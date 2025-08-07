'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    router.push(`${pathname}?${params.toString()}`, {scroll: false});
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6f">
        <span>Sort by:</span>
        <select name="sort" id="sort" className='ring-1 ring-gray-200 shadow-md p-1' onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </div>
  );
}