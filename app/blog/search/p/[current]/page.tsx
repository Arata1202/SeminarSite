import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Elements/Pagination';
import ArticleList from '@/components/ArticleLists/ArticleList';
import { HomeIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  params: Promise<{
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export const revalidate = 60;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const current = parseInt(params.current as string, 10);
  const keyword = searchParams.q;
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <div
        className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side"
        style={{ marginTop: '80px' }}
      >
        <h1 className="categoryTitle text-3xl font-bold pt-5 max-w-[85rem] mx-auto pb-2">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <a href="/" className="flex text-gray-500 hover:text-green-500">
                  <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-4 w-4 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <div className="ml-4 text-sm font-medium text-gray-500">{`「${keyword}」の検索結果`}</div>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center pb-2 pt-2 mt-5">
            <MagnifyingGlassIcon className="h-8 w-8 mr-2 flex-shrink-0" aria-hidden="true" />
            <div className="whitespace-nowrap overflow-hidden">{`「${keyword}」の検索結果`}</div>
          </div>
        </h1>
      </div>
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/search"
        q={searchParams.q}
      />
    </>
  );
}
