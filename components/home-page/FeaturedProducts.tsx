import React from 'react';
import { fetchFeaturedProducts } from '@/utils/actions';
import SectionTitle from '../shared/SectionTitle';
import ProductsGrid from '../products-page/ProductsGrid';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
