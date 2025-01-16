import { LayoutGrid, List } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

type ProductHeaderProps = {
  layout: string;
  total: number;
  search: string;
};

const ProductPageHeader = ({ layout, total, search }: ProductHeaderProps) => {
  return (
    <section>
      <div className="flex justify-between items-center mt-8">
        <h4 className="font-medium text-md">
          {total} product{total > 1 && 's'}
        </h4>
        <div className="flex gap-x-1">
          <Button variant={layout === 'list' ? 'default' : 'ghost'} size="icon">
            <Link href={`/products?layout=list${search}`}>
              <List />
            </Link>
          </Button>
          <Button variant={layout === 'grid' ? 'default' : 'ghost'} size="icon">
            <Link href={`/products?layout=grid${search}`}>
              <LayoutGrid />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPageHeader;
