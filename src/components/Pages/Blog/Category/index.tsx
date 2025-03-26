import Link from 'next/link';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import { Article, Category } from '@/types/microcms';
import { HomeIcon, ChevronRightIcon, FolderOpenIcon } from '@heroicons/react/24/solid';

type Props = {
  articles: Article[];
  totalCount: number;
  category: Category;
};

export default async function CategoryPage({ articles, totalCount, category }: Props) {
  return (
    <>
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
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-4 w-4 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <Link
                    href={`${category.id}`}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                  >
                    {category.name}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center pb-2 pt-2 mt-5">
            <FolderOpenIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div>{category.name}</div>
          </div>
        </h1>
      </div>
      <ArticleList articles={articles} />
      <Pagination totalCount={totalCount} basePath={`/categories/${category.id}`} />
    </>
  );
}
