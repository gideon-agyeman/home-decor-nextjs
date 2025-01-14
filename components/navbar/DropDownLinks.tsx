import React from 'react';
import Link from 'next/link';
import { links } from '@/utils/links';
import { Button } from '../ui/button';
import { AlignLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

function DropDownLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex gap-4 max-w-[100px]"
        >
          <AlignLeft className="w-6 h-6" />
          <span className="sr-only"> Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 " align="end" sideOffset={25}>
        {links.map((link) => {
          const { href, label } = link;
          return (
            <DropdownMenuItem key={label}>
              <Link href={href} className="capitalize">
                {' '}
                {label}{' '}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownLinks;
