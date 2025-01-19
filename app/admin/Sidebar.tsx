'use client';

import React from 'react';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href;
        const variant = isActive ? 'secondary' : 'ghost';
        return (
          <Button
            asChild
            key={link.href}
            variant={variant}
            className="w-full mb-2 capitalize font-normal justify-start"
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
