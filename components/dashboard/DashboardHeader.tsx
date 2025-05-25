/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DashboardNav } from '@/components/dashboard/DashboardNav';

export function DashboardHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-4 border-b bg-white">
      <div className="flex items-center gap-4 w-full  mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="px-1 py-6">
              <Link href="/dashboard" className="flex items-center gap-2 px-2">
                <img
                  src="/landing/ugc-sensei-logo-2.png"
                  alt="UGC Sensei"
                  className="h-8 w-auto"
                />
              </Link>
              <div className="mt-8">
                <DashboardNav />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2">
          <img
            src="/landing/ugc-sensei-logo-2.png"
            alt="UGC Sensei"
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </div>
  );
}