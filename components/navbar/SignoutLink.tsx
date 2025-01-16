'use client';

import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

function SignoutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'logout successful' });
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignoutLink;
