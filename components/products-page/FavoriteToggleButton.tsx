import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/fetchData';
import FavoriteToggleForm from './FavoriteToggleForm';

async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;
