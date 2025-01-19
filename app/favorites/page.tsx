import Link from 'next/link';
import SectionTitle from '@/components/shared/SectionTitle';
import ProductsGrid from '@/components/products-page/ProductsGrid';
import { fetchUserFavorites } from '@/utils/fetchData';

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0) {
    return (
      <div className="text-center">
        <SectionTitle text="You have no favorites yet." />
        <p className="mt-4">
          Browse our{' '}
          <Link href="/products" className="text-blue-500 underline">
            products
          </Link>{' '}
          to find your favorites!
        </p>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}

export default FavoritesPage;
