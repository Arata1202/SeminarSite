import { Article } from '@/libs/microcms';
import ArticleListItem from '../ArticleListItem';
import Sidebar from '../Sidebar';

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 main_side mt-10">
        <div className="mx-auto text-base leading-7">
          {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
          <div className="max-w-[87rem] mx-auto">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              <div className="lg:col-span-2">
                <div className="text-center pt-7">
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    記事はまだありません
                  </h1>
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 main_side mt-10">
        <div className="mx-auto text-base leading-7">
          {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
          <div className="max-w-[87rem] mx-auto">
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
