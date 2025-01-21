import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { fetchAdminOrders } from '@/utils/fetchData';
import { formatPrice } from '@/utils/formatPrice';
import { formatDate } from '@/utils/formatDate';

async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <Table>
      <TableCaption>Total Orders : {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order Id</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Num of Items</TableHead>
          <TableHead>Order Total</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const {
            id,
            products: items,
            orderTotal,
            tax,
            shipping,
            createdAt,
            email,
          } = order;
          return (
            <TableRow key={order.id}>
              <TableCell>{id}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{items}</TableCell>
              <TableCell>{formatPrice(orderTotal)}</TableCell>
              <TableCell>{formatPrice(tax)}</TableCell>
              <TableCell>{formatPrice(shipping)}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export default SalesPage;
