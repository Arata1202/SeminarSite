import Link from 'next/link';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import { HomeIcon, ChevronRightIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import { Article } from '@/types/microcms';

type Props = {
  articles: Article[];
  current?: number;
  totalCount: number;
};

export default async function BlogPage({ articles, totalCount, current }: Props) {
  return (
    <>
      <div className="MainLayout">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side"
          style={{ marginTop: '50px' }}
        >
          <h1 className="categoryTitle text-3xl font-bold pt-5 max-w-[85rem] mx-auto pb-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <Link href="/" className="flex text-gray-500 hover:text-green-500">
                    <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-4 w-4 flex-shrink-0 text-gray-500"
                      aria-hidden="true"
                    />
                    <Link
                      href={`/blog`}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                    >
                      ブログ
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="flex items-center pb-2 pt-2 mt-5">
              <BellAlertIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>最新記事</div>
            </div>
          </h1>
        </div>
        <ArticleList articles={articles} />
        <Pagination totalCount={totalCount} current={current} />
      </div>
    </>
  );
}
