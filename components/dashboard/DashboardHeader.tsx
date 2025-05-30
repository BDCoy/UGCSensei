/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DashboardNav } from '@/components/dashboard/DashboardNav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export function DashboardHeader() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();
        setUser(data);
      }
    };
    fetchUser();
  }, [supabase]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-16 bg-white border-b">
      <div className="flex items-center gap-4 w-full px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="px-6 py-4 border-b">
              <Link href="/dashboard" className="flex items-center gap-2">
                <img
                  src="/landing/ugc-sensei-logo-2.png"
                  alt="UGC Sensei"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="px-2 py-6">
              <DashboardNav />
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/dashboard">
            <img
              src="/landing/ugc-sensei-logo-2.png"
              alt="UGC Sensei"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-4">
          <Link href="/dashboard/account">
            <Avatar className="cursor-pointer">
              <AvatarImage src={user?.avatar_url} />
              <AvatarFallback className="bg-[#175779] text-white">
                {user?.full_name?.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
}