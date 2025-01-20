import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import SectionTitle from '@/components/shared/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Separator } from '@/components/ui/separator';

async function CartPage() {
  const { userId } = await auth();
  if (!userId) redirect('/');
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);
  if (cartItems.length === 0)
    return (
      <div>
        <SectionTitle text="Your Cart is empty" />
        <p className="mt-4">
          Browse our {''}
          <Link href="/products" className="text-blue-500 underline">
            products.
          </Link>
        </p>
      </div>
    );

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        <div className="md:col-span-2 lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="md:col-span-1 lg:col-span-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>

      <div className="mt-8 w-full">
        <Separator />
        <Button className="mt-4">
          <IoIosAddCircleOutline />
          <Link href="/products">Add New Item</Link>
        </Button>
      </div>
    </>
  );
}
export default CartPage;
