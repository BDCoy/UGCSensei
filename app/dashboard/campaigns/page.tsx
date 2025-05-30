import { createClient } from '@/utils/supabase/server';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefsTab } from "@/components/dashboard/campaigns/BriefsTab";
import { TasksTab } from "@/components/dashboard/campaigns/TasksTab";
import { ShipmentsTab } from "@/components/dashboard/campaigns/ShipmentsTab";
import { MessagesTab } from "@/components/dashboard/campaigns/MessagesTab";
import { DisputesTab } from "@/components/dashboard/campaigns/DisputesTab";

export default async function CampaignsPage() {
  const supabase = createClient();
  
  // Get current user and role
  const { data: { user } } = await supabase.auth.getUser();
  const { data: userDetails } = await supabase
    .from('users')
    .select('role')
    .eq('id', user?.id)
    .single();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Manage Campaigns</h1>
        <p className="text-muted-foreground">
          Create and manage your campaign briefs, tasks, and shipments
        </p>
      </div>

      <Tabs defaultValue="briefs" className="w-full">
        <TabsList>
          <TabsTrigger value="briefs">Briefs</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
        </TabsList>

        <TabsContent value="briefs" className="mt-6">
          <BriefsTab userRole={userDetails?.role} userId={user?.id} />
        </TabsContent>

        <TabsContent value="tasks" className="mt-6">
          <TasksTab userRole={userDetails?.role} userId={user?.id} />
        </TabsContent>

        <TabsContent value="shipments" className="mt-6">
          <ShipmentsTab userRole={userDetails?.role} userId={user?.id} />
        </TabsContent>

        <TabsContent value="messages" className="mt-6">
          <MessagesTab userRole={userDetails?.role} userId={user?.id} />
        </TabsContent>

        <TabsContent value="disputes" className="mt-6">
          <DisputesTab userRole={userDetails?.role} userId={user?.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}