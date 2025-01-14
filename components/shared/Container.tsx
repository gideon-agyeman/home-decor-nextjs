import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{ className?: string }>;

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8', className)}>
      {children}
    </div>
  );
}

export default Container;
