"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Dispute {
  id: string;
  brief_id: string;
  raised_by: string;
  reason: string;
  status: 'open' | 'resolved' | 'rejected';
  resolution_notes: string;
  created_at: string;
  resolved_at: string;
  users: {
    full_name: string;
  };
  briefs: {
    title: string;
  };
}

export function DisputesTab({ userRole, userId }: { userRole: string; userId: string }) {
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchDisputes = async () => {
      const query = supabase
        .from('disputes')
        .select(`
          *,
          users (full_name),
          briefs (title)
        `)
        .order('created_at', { ascending: false });

      // Filter based on user role
      if (userRole === 'brand') {
        query.eq('briefs.brand_id', userId);
      } else if (userRole === 'creator') {
        query.eq('briefs.creator_id', userId);
      }

      const { data, error } = await query;

      if (!error && data) {
        setDisputes(data);
      }
    };

    fetchDisputes();
  }, [supabase, userId, userRole]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (disputes.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No disputes found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {disputes.map((dispute) => (
        <Card key={dispute.id} className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">
                Dispute for: {dispute.briefs?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Raised by: {dispute.users?.full_name}
              </p>
            </div>
            <Badge className={getStatusColor(dispute.status)}>
              {dispute.status.charAt(0).toUpperCase() + dispute.status.slice(1)}
            </Badge>
          </div>
          
          <div className="mt-4">
            <p className="font-medium">Reason:</p>
            <p className="mt-1">{dispute.reason}</p>
          </div>

          {dispute.resolution_notes && (
            <div className="mt-4">
              <p className="font-medium">Resolution Notes:</p>
              <p className="mt-1">{dispute.resolution_notes}</p>
            </div>
          )}

          <div className="mt-6 flex justify-end gap-4">
            {dispute.status === 'open' && userRole === 'admin' && (
              <>
                <Button variant="outline">Reject Dispute</Button>
                <Button>Resolve Dispute</Button>
              </>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}