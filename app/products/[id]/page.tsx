import React from 'react';
import Image from 'next/image';
import { fetchSingleProduct, findExistingReview } from '@/utils/fetchData';
import AddToCart from '@/components/single-product/AddToCart';

import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import StarRatings from '@/components/single-product/StarRatings';
import FavoriteToggleButton from '@/components/products-page/FavoriteToggleButton';
import ShareButton from '@/components/single-product/ShareButton';
import { formatPrice } from '@/utils/formatPrice';
import ProductReviews from '@/components/reviews/ProductReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import { auth } from '@clerk/nextjs/server';

type Params = {
  params: { id: string };
};

async function SingleProductPage({ params }: Params) {
  const { id } = await params;
  const { name, image, company, description, price } = await fetchSingleProduct(
    id
  );
  const { userId } = await auth();
  const notReviewed = userId && !(await findExistingReview(userId, id));

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
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={id} />
              <ShareButton name={name} productId={id} />
            </div>
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
      <ProductReviews productId={id} />
      {notReviewed && <SubmitReview productId={id} />}
    </section>
  );
}

export default SingleProductPage;
