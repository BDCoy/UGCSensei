"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: string;
  avatar_url: string;
  created_at: string;
}

interface Subscription {
  status: string;
  products: {
    name: string;
  };
  prices: {
    unit_amount: number;
    interval: string;
  };
}

export default function AccountPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const supabase = createClient();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      
      if (user) {
        const { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        const { data: subscription } = await supabase
          .from('subscriptions')
          .select('*, prices(*, products(*))')
          .eq('user_id', user.id)
          .in('status', ['trialing', 'active'])
          .single();

        if (profile) {
          setProfile(profile);
          setUpdatedName(profile.full_name);
        }
        if (subscription) {
          setSubscription(subscription);
        }
      }
    };

    fetchProfile();
  }, [supabase]);

  const updateProfile = async () => {
    const { error } = await supabase
      .from('users')
      .update({ full_name: updatedName })
      .eq('id', profile?.id);

    if (error) {
      toast.error('Failed to update profile');
    } else {
      setProfile(prev => prev ? { ...prev, full_name: updatedName } : null);
      setIsEditing(false);
      toast.success('Profile updated successfully');
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and subscription
        </p>
      </div>

      {/* Profile Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
        
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            {isEditing ? (
              <div className="flex gap-2">
                <Input
                  id="name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
                <Button onClick={updateProfile}>Save</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-lg">{profile.full_name}</p>
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <p className="text-lg">{profile.email}</p>
          </div>

          <div className="grid gap-2">
            <Label>Role</Label>
            <p className="text-lg capitalize">{profile.role}</p>
          </div>

          <div className="grid gap-2">
            <Label>Member Since</Label>
            <p className="text-lg">
              {new Date(profile.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Card>

      {/* Subscription Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Subscription</h2>
        
        {subscription ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium">
                  {subscription.products?.name}
                </p>
                <p className="text-muted-foreground">
                  ${subscription.prices?.unit_amount / 100}/
                  {subscription.prices?.interval}
                </p>
              </div>
              <Button variant="outline">Manage Subscription</Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-sm capitalize">{subscription.status}</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">
              You don't have an active subscription
            </p>
            <Button>Upgrade Now</Button>
          </div>
        )}
      </Card>
    </div>
  );
}