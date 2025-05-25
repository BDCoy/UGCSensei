export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your UGC Sensei dashboard
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium">Active Campaigns</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium">Connected Creators</h3>
          <p className="text-3xl font-bold mt-2">48</p>
        </div>
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium">Content Pieces</h3>
          <p className="text-3xl font-bold mt-2">156</p>
        </div>
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium">Total Reach</h3>
          <p className="text-3xl font-bold mt-2">2.4M</p>
        </div>
      </div>
    </div>
  );
}