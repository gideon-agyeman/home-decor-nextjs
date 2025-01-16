import React from 'react';
import Image from 'next/image';
import { fetchSingleProduct } from '@/utils/actions';
import AddToCart from '@/components/single-product/AddToCart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import StarRatings from '@/components/single-product/StarRatings';
import FavoriteToggleButton from '@/components/products-page/FavoriteToggleButton';
import { formatPrice } from '@/utils/formatPrice';

type Params = {
  params: { id: string };
};

async function SingleProductPage({ params }: Params) {
  const { id } = await params;
  const { name, image, company, description, price } = await fetchSingleProduct(
    id
  );

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
            className="w-full rounded object-cover"
          />
        </div>
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <StarRatings productId={id} />
          <h4 className="text xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {formatPrice(price)}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
