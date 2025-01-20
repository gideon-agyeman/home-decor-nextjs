import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import SectionTitle from '@/components/shared/SectionTitle';
import { fetchUserOrders } from '@/utils/fetchData';
import { formatPrice } from '@/utils/formatPrice';
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';

async function OrdersPage() {
  const orders = await fetchUserOrders();
  if (orders.length === 0) {
    return (
      <div>
        <SectionTitle text="you have no orders yet..." />
        <p className="mt-4">
          Browse our {''}
          <Link href="/products" className="text-blue-500 underline">
            products
          </Link>
          {''} to find your favorites!
        </p>
      </div>
    );
  }

  return (
    <>
      <SectionTitle text="Your Orders" />
      <Table>
        <TableCaption>Total Orders : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { products, orderTotal, tax, shipping, createdAt } = order;
            return (
              <TableRow key={order.id}>
                <TableCell>{products}</TableCell>
                <TableCell>{formatPrice(orderTotal)}</TableCell>
                <TableCell>{formatPrice(tax)}</TableCell>
                <TableCell>{formatPrice(shipping)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
export default OrdersPage;
