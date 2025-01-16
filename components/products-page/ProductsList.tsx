import React from 'react';
import { Product } from '@prisma/client';
import { formatPrice } from '@/utils/formatPrice';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, company, image } = product;

        return (
          <article key={product.id} className="group relative">
            <Link href={`/products/${product.id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3 ">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="w-full rounded object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                    <p className="text-muted-foreground pt-4">{company}</p>
                  </div>
                  <p className="text-primary md:ml-auto">
                    {formatPrice(price)}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={product.id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
