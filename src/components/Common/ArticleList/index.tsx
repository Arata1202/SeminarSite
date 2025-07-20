import { Article } from '@/types/microcms';
import ArticleCard from '../ArticleCard';
import Sidebar from '../Layouts/Sidebar';
import BlogMainContainer from '../Layouts/Container/BlogMainContainer';
import BlogContentContainer from '../Layouts/Container/BlogContentContainer';
import ScrollAnimation from '../Animation/ScrollAnimation';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <>
      <BlogMainContainer>
        <BlogContentContainer>
          {articles.length === 0 && (
            <ScrollAnimation variant="fadeInScale" duration={1.0}>
              <div className="text-center pt-7">
                <div className="mt-4 text-5xl font-bold tracking-tight sm:text-5xl">
                  記事はまだありません
                </div>
              </div>
            </ScrollAnimation>
          )}
          {articles.length > 0 && (
            <ScrollAnimation variant="staggerContainer" duration={1.0}>
              <ul>
                {articles.map((article) => (
                  <ScrollAnimation key={article.id} variant="staggerItem" duration={1.0}>
                    <ArticleCard article={article} />
                  </ScrollAnimation>
                ))}
              </ul>
            </ScrollAnimation>
          )}
        </BlogContentContainer>
        <ScrollAnimation variant="fadeInRight" duration={1.0}>
          <Sidebar />
        </ScrollAnimation>
      </BlogMainContainer>
    </>
  );
}
