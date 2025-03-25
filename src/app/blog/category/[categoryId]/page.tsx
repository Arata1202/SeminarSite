import Link from 'next/link';
import { getList } from '@/libs/microcms';
import { getCategory } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Elements/Pagination';
import ArticleList from '@/components/ArticleLists/ArticleList';
import { HomeIcon, ChevronRightIcon, FolderOpenIcon } from '@heroicons/react/24/solid';
import { CATEGORY_ARR } from '@/constants/category';

type Props = {
  params: Promise<{
    categoryId: string;
  }>;
};

export const generateStaticParams = async () => {
  return CATEGORY_ARR.map((category) => ({ categoryId: category.id }));
};

export default async function Page(props: Props) {
  const params = await props.params;
  const tag = await getCategory(params.categoryId);
  const { categoryId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `categories[contains]${categoryId}`,
  });
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
                    href={`${tag.id}`}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                  >
                    {tag.name}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center pb-2 pt-2 mt-5">
            <FolderOpenIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div>{tag.name}</div>
          </div>
        </h1>
      </div>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/categories/${categoryId}`} />
    </>
  );
}
