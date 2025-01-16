import FeaturedProducts from '@/components/home-page/FeaturedProducts';
import Hero from '@/components/home-page/Hero';
import LoadingContainer from '@/components/shared/LoadingContainer';
import { Suspense } from 'react';

function HomePage() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}

export default HomePage;
