import { getList } from '@/libs/microcms';
import ArticleList from '@/components/ArticleLists/ArticleList';
import Pagination from '@/components/Elements/Pagination';
import { HomeIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const revalidate = 60;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const data = await getList({
    q: searchParams.q,
  });

  return (
    <>
      <div style={{ padding: '24px' }}>
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side"
          style={{ marginTop: '50px' }}
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
                      className="h-4 w-4 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 text-sm font-medium text-gray-500">キーワードで探す</div>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="flex items-center pb-2 pt-2 mt-5">
              <MagnifyingGlassIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>キーワードで探す</div>
            </div>
          </h1>
        </div>
        <ArticleList articles={data.contents} />
        <Pagination totalCount={data.totalCount} basePath="/search" q={searchParams.q} />
      </div>
    </>
  );
}
