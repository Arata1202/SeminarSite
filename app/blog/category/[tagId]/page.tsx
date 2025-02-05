import { getList } from '@/libs/microcms';
import { getTag } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Elements/Pagination';
import ArticleList from '@/components/ArticleLists/ArticleList';
import { HomeIcon, ChevronRightIcon, FolderOpenIcon } from '@heroicons/react/24/solid';

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export const revalidate = 60;

export default async function Page(props: Props) {
  const params = await props.params;
  const tag = await getTag(params.tagId);
  const { tagId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
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
                    className="h-4 w-4 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <a
                    href={`${tag.id}`}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                  >
                    {tag.name}
                  </a>
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
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </>
  );
}
