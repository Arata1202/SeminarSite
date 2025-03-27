import { Article } from '@/types/microcms';
import ArticleCard from '../ArticleCard';
import Sidebar from '../Layouts/Sidebar';
import BlogMainContainer from '../Layouts/Container/BlogMainContainer';
import BlogContentContainer from '../Layouts/Container/BlogContentContainer';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <>
      <BlogMainContainer>
        <BlogContentContainer>
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
        </BlogContentContainer>
        <Sidebar />
      </BlogMainContainer>
    </>
  );
}
