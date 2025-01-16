import React from 'react';
import { carouselImages } from '@/utils/carouselImages';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt="carousel image"
                  priority
                  className="w-full h-[24rem] rounded-md object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {carouselImages.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
