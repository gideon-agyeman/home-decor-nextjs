import ProductsContainer from '@/components/products-page/ProductsContainer';
import React from 'react';

type SearchParams = {
  searchParams: Promise<Params>;
};

export type Params = {
  layout: string;
  search: string;
};

const ProductsPage = async ({ searchParams }: SearchParams) => {
  const { layout = 'grid', search = '' } = await searchParams;

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
