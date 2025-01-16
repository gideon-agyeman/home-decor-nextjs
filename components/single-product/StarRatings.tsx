import React from 'react';
import { StarIcon } from 'lucide-react';

function StarRatings({ productId }: { productId: string }) {
  const rating = 4.9;
  const count = 5;

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count} reviews)`;
  return (
    <span className={className}>
      <StarIcon className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}

export default StarRatings;
