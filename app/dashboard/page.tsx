import { createClient } from '@/utils/supabase/server';
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileVideo, Users, AlertTriangle, Truck } from "lucide-react";

export default async function DashboardPage() {
  const supabase = createClient();
  
  // Get current user and stats
  const { data: { user } } = await supabase.auth.getUser();
  
  // Fetch user's subscription and credit balance
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .eq('user_id', user?.id)
    .in('status', ['trialing', 'active'])
    .single();

  const { data: wallet } = await supabase
    .from('wallets')
    .select('balance')
    .eq('user_id', user?.id)
    .single();

  // Fetch counts for different sections
  const { count: activeBriefs } = await supabase
    .from('briefs')
    .select('*', { count: 'exact', head: true })
    .eq('brand_id', user?.id)
    .in('status', ['open', 'in_progress']);

  const { count: pendingInvitations } = await supabase
    .from('invitations')
    .select('*', { count: 'exact', head: true })
    .eq('receiver_id', user?.id)
    .eq('status', 'pending');

  const { count: activeDisputes } = await supabase
    .from('disputes')
    .select('*', { count: 'exact', head: true })
    .eq('raised_by', user?.id)
    .eq('status', 'open');

  const { count: pendingShipments } = await supabase
    .from('shipments')
    .select('*', { count: 'exact', head: true })
    .eq('brand_id', user?.id)
    .eq('status', 'due_to_ship');

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-[#175779]">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your UGC Sensei dashboard
        </p>
      </div>
      
      {/* Credits and Subscription Status */}
      <Card className="p-8 bg-[#175779] text-white rounded-xl shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold opacity-90">Available Credits</h2>
            <p className="text-4xl font-bold mt-3">
              ${wallet?.balance || 0}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">Current Plan</p>
            <p className="font-semibold text-lg mt-1">{subscription?.prices?.products?.name || 'No active plan'}</p>
            <Link href="/dashboard/account">
              <Button className="mt-3 bg-white text-[#175779] hover:bg-gray-100 rounded-full px-6">
                Manage Subscription
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/dashboard/campaigns">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#175779] rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#eedac1] rounded-full">
                <FileVideo className="w-6 h-6 text-[#175779]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Active Campaigns</h3>
                <p className="text-3xl font-bold mt-2 text-[#175779]">{activeBriefs || 0}</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/dashboard/creators">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#175779] rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#eedac1] rounded-full">
                <Users className="w-6 h-6 text-[#175779]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Pending Invitations</h3>
                <p className="text-3xl font-bold mt-2 text-[#175779]">{pendingInvitations || 0}</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/dashboard/campaigns?tab=disputes">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#175779] rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#eedac1] rounded-full">
                <AlertTriangle className="w-6 h-6 text-[#175779]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Active Disputes</h3>
                <p className="text-3xl font-bold mt-2 text-[#175779]">{activeDisputes || 0}</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/dashboard/campaigns?tab=shipments">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#175779] rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#eedac1] rounded-full">
                <Truck className="w-6 h-6 text-[#175779]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Pending Shipments</h3>
                <p className="text-3xl font-bold mt-2 text-[#175779]">{pendingShipments || 0}</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/dashboard/campaigns/new-brief">
          <Button className="w-full sm:w-auto bg-[#175779] hover:bg-[#124965] rounded-full px-8 py-6 text-base">
            Create New Brief
          </Button>
        </Link>
        <Link href="/dashboard/creators">
          <Button className="w-full sm:w-auto rounded-full px-8 py-6 text-base" variant="outline">
            Browse Creators
          </Button>
        </Link>
      </div>
    </div>
  );
}