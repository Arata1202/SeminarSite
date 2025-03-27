import { Article } from '@/types/microcms';
import ArticleCard from '../ArticleCard';
import Sidebar from '../Layouts/Sidebar';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl main_side">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            {articles.length === 0 && (
              <div className="text-center pt-7">
                <div className="mt-4 text-5xl font-bold tracking-tight sm:text-5xl">
                  記事はまだありません
                </div>
              </div>
            )}
            {articles.length > 0 && (
              <ul>
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </ul>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
