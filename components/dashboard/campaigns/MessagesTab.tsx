"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  brief_id: string;
  sender_id: string;
  message: string;
  created_at: string;
  users: {
    full_name: string;
    avatar_url: string;
  };
  briefs: {
    title: string;
  };
}

export function MessagesTab({ userRole, userId }: { userRole: string; userId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select(`
          *,
          users (full_name, avatar_url),
          briefs (title)
        `)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setMessages(data);
      }
    };

    fetchMessages();

    // Set up real-time subscription
    const channel = supabase
      .channel('messages')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'messages' },
        (payload) => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, userId]);

  if (messages.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No messages yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id} className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{message.users?.full_name}</p>
                  <p className="text-sm text-muted-foreground">
                    Re: {message.briefs?.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {new Date(message.created_at).toLocaleDateString()}
                </p>
              </div>
              <p className="mt-2">{message.message}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}