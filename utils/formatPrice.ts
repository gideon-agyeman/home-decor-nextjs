export const formatPrice = (price: string | number): string => {
  const numericPrice = Number(price);

  if (isNaN(numericPrice)) {
    throw new Error('Invalid price input');
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(numericPrice);
};
