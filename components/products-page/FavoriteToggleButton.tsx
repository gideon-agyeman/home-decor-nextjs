import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '../ui/button';

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <Heart />
    </Button>
  );
}

export default FavoriteToggleButton;
