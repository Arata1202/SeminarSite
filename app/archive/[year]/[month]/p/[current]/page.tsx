import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Elements/Pagination';
import ArticleList from '@/components/ArticleLists/ArticleList';
import { CalendarDaysIcon, HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {
  params: {
    current: string;
    year: string;
    month: string;
  };
};

export const metadata = {
  robots: {
    index: false,
  },
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { year, month } = params;
  const startDate = `${year}-${month}-01T00:00:00Z`;
  const endDate = new Date(Number(year), Number(month), 0).toISOString();
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    filters: `publishedAt[greater_than]${startDate}[and]publishedAt[less_than]${endDate}`,
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
                    <a
                      href={`/blog`}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                    >
                      ブログ
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-4 w-4 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      href={`/archive/${year}/${month}`}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                    >
                      {year}月{parseInt(month)}月
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="flex items-center pb-2 pt-2 mt-5">
              <CalendarDaysIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>
                {year}年{parseInt(month)}月
              </div>
            </div>
          </h1>
        </div>
        <ArticleList articles={data.contents} />
        <Pagination
          totalCount={data.totalCount}
          current={current}
          basePath={`/archive/${year}/${month}`}
        />
      </div>
    </>
  );
}
