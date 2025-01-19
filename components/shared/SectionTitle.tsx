import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

function SectionTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div>
      <h2
        className={cn(
          'text-xl font-medium tracking-wider capitalize mb-8',
          className
        )}
      >
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
