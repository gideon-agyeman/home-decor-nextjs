'use client';

import { Card } from '@/components/ui/card';
import { FirstColumn, SecondColumn, FourthColumn } from './CartColumns';
import ThirdColumn from './ThirdColumn';
import { CartItemWithProduct } from '@/utils/types';

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, quantity } = cartItem;
        const { image, name, company, price, id: productId } = cartItem.product;

        return (
          <Card key={id} className="flex gap-y-4 md:flex-row p-6 mb-8 gap-x-4">
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={quantity} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
