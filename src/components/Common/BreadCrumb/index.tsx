import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

type Props = {
  title: string;
  path: string;
  blog?: boolean;
};

export default function Breadcrumb({ title, path, blog = false }: Props) {
  return (
    <div className="text-3xl font-bold pt-5 max-w-[85rem] mx-auto pb-2">
      <nav className="flex">
        <ol className="flex items-center space-x-4 text-left">
          <li>
            <Link href="/" className="flex text-gray-500 hover:text-green-500">
              <HomeIcon className="h-4 w-4 flex-shrink-0" />
            </Link>
          </li>
          {blog && (
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                <Link
                  href={`/blog`}
                  className="whitespace-nowrap ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  ブログ
                </Link>
              </div>
            </li>
          )}
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-500" />
              <Link
                href={`/${path}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
              >
                {title}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
