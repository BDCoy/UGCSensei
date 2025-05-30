import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardNav } from '@/components/dashboard/DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />
      <div className="flex-1 flex pt-16">
        <div className="hidden md:flex w-72 flex-col gap-4 p-4 border-r bg-white min-h-[calc(100vh-4rem)]">
          <DashboardNav />
        </div>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}