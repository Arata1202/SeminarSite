import { Article } from '@/libs/microcms';
import ArticleListItem from '../ArticleListItem';
import { HomeIcon, ChevronRightIcon, PencilIcon } from '@heroicons/react/24/solid';
import Sidebar from '../Sidebar';

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <div
        className="top_title mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
        style={{ marginTop: '80px', marginBottom: '120px' }}
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
                    href="/link"
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                  >
                    ブログ
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </h1>
        <div className="mx-auto text-base leading-7">
          {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-5">
              <PencilIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div className="text-black">ブログ</div>
            </div>
          </h1>
          <div className="max-w-[87rem] mx-auto mt-10">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              <div className="lg:col-span-2">
                <ul>
                  {articles.map((article) => (
                    <ArticleListItem key={article.id} article={article} />
                  ))}
                </ul>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
