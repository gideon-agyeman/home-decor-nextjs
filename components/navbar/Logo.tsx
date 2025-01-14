import React from 'react';
import { Armchair } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <Armchair className="w-8 h-8" />
      </Link>
    </Button>
  );
}

export default Logo;
