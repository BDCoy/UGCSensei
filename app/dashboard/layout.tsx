import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardNav } from '@/components/dashboard/DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <div className="flex-1 flex">
        <div className="hidden md:flex w-72 flex-col gap-4 p-4 border-r min-h-[calc(100vh-4rem)] mt-16">
          <DashboardNav />
        </div>
        <main className="flex-1 p-4 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}