import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { type NextRequest } from 'next/server';
import db from '@/utils/db';

export const POST = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get('origin');

  const { orderId, cartId } = await req.json();

  const order = await db.order.findUnique({
    where: { id: orderId },
  });

  const cart = await db.cart.findUnique({
    where: { id: cartId },
    include: {
      cartItems: {
        include: { product: true },
      },
    },
  });

  if (!order || !cart) {
    return Response.json(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const line_items = cart.cartItems.map((cartItem) => {
    const { quantity, product } = cartItem;
    const { name, image, price } = product;

    if (!name || !image || !price) {
      throw new Error('Missing product details for line item.');
    }

    return {
      quantity,
      price_data: {
        currency: 'eur',
        product_data: {
          name,
        },
        unit_amount: Math.round(price * 100),
      },
    };
  });

  //   if (order.shipping) {
  //     line_items.push({
  //       quantity: 1,
  //       price_data: {
  //         currency: 'eur',
  //         product_data: {
  //           name: 'Shipping',
  //         },
  //         unit_amount: Math.round(order.shipping * 100),
  //       },
  //     });
  //   }

  const calculateTax = (cartItems: typeof cart.cartItems) => {
    const taxRate = 0.1;
    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return total * taxRate;
  };

  const taxAmount = calculateTax(cart.cartItems);
  line_items.push({
    quantity: 1,
    price_data: {
      currency: 'eur',
      product_data: {
        name: 'Tax',
      },
      unit_amount: Math.round(taxAmount * 100),
    },
  });

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      metadata: { orderId, cartId },
      line_items,
      mode: 'payment',
      //   automatic_tax: { enabled: true },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: 'Standard Shipping',
            type: 'fixed_amount',
            fixed_amount: {
              amount: Math.round(order.shipping * 100),
              currency: 'eur',
            },
          },
        },
        {
          shipping_rate_data: {
            display_name: 'Express Shipping',
            type: 'fixed_amount',
            fixed_amount: {
              amount: Math.round(order.shipping * 1.5 * 100),
              currency: 'eur',
            },
          },
        },
      ],
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Stripe Session Error:', error);
    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
};
