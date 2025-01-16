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
import UserIcon from './UserIcon';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignoutLink from './SignoutLink';

function DropDownLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <AlignLeft className="w-6 h-6" />
          <UserIcon />
          <span className="sr-only"> Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 " align="end" sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Sign up</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            const { href, label } = link;
            return (
              <DropdownMenuItem key={label}>
                <Link href={href} className="capitalize">
                  {label}{' '}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignoutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownLinks;
