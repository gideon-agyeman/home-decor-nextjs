'use client';

import React from 'react';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const searchParamValue = searchParams.get('search');
  const [search, setSearch] = useState(searchParamValue?.toString() || '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    replace(`/products?${params.toString()}`);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  useEffect(() => {
    if (!searchParamValue) {
      setSearch('');
    }
  }, [searchParamValue]);

  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      value={search}
      onChange={handleChange}
    />
  );
};

export default NavSearch;
