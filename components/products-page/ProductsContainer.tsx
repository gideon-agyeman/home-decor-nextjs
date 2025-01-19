import React from 'react';
import { Params } from '@/app/products/page';
import { fetchAllProducts } from '@/utils/fetchData';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { Separator } from '../ui/separator';
import ProductPageHeader from './ProductPageHeader';

async function ProductsContainer({ layout, search }: Params) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <>
      <ProductPageHeader
        layout={layout}
        total={totalProducts}
        search={searchTerm}
      />
      <Separator className="mt-4" />
      {totalProducts < 1 ? (
        <h5 className="text-2xl mt-16 text-center">
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </>
  );
}

export default ProductsContainer;
