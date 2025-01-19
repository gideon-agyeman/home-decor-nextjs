import { fetchProductRating } from '@/utils/fetchData';
import { FaStar } from 'react-icons/fa';

async function StarRatings({ productId }: { productId: string }) {
  const { count, rating } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4 text-primary`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}
export default StarRatings;
