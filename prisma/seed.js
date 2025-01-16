import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';

const products = JSON.parse(
  await readFile(new URL('../utils/products.json', import.meta.url))
);

const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.createMany({
      data: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
