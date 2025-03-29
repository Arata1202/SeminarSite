import Link from 'next/link';
import { FolderIcon } from '@heroicons/react/24/solid';
import { CATEGORY_ARR } from '@/constants/category';

export default function Category() {
  return (
    <div className="bg-white pt-8 px-4 border border-gray-300 py-5">
      <div className={`text-2xl text-center font-semibold flex justify-center`}>
        <FolderIcon className="h-8 w-8 mr-2" />
        カテゴリー
      </div>
      <nav className="flex gap-4 mt-5 md:mt-5">
        {CATEGORY_ARR.slice(0, 2).map((item) => (
          <Link
            href={`/blog/category/${item.id}`}
            className="w-full hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-3 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
            key={item.name}
          >
            <div className="flex justify-center">
              <item.icon className="w-12 h-12" />
            </div>
            <div className="flex justify-center mt-2">{item.name}</div>
          </Link>
        ))}
      </nav>
      <nav className="flex gap-4 mt-5 md:mt-5 w-100">
        {CATEGORY_ARR.slice(2, 4).map((item) => (
          <Link
            href={`/blog/category/${item.id}`}
            className="w-full hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-3 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
            key={item.name}
          >
            <div className="flex justify-center">
              <item.icon className="w-12 h-12" />
            </div>
            <div className="flex justify-center mt-2">{item.name}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
