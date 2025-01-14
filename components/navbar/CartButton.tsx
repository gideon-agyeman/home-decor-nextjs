import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';

async function CartButton() {
  const numItemsInCart = 0;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex justify-center items-center "
    >
      <Link href="/cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
