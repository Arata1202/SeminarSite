import Link from 'next/link';
import { getList } from '@/libs/microcms';
import { getCategory } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import { HomeIcon, ChevronRightIcon, FolderOpenIcon } from '@heroicons/react/24/solid';
import { CATEGORY_ARR } from '@/constants/category';

type Props = {
  params: Promise<{
    categoryId: string;
    current: string;
  }>;
};

export const generateStaticParams = async () => {
  const results = await Promise.all(
    CATEGORY_ARR.map(async (category) => {
      const categoryId = category.id;

      const data = await getList({
        limit: 0,
        fields: '',
        filters: `categories[contains]${categoryId}`,
      });

      const totalCount = data.totalCount;
      const currents = Array.from({ length: totalCount }, (_, i) => i + 1);

      return currents.map((current) => ({
        categoryId,
        current: current.toString(),
      }));
    }),
  );

  return results.flat();
};

export default async function Page(props: Props) {
  const params = await props.params;
  const tag = await getCategory(params.categoryId);
  const { categoryId } = params;
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
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
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath={`/category/${categoryId}`}
      />
    </>
  );
}
