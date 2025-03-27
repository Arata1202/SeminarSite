import Link from 'next/link';
import { Article } from '@/types/microcms';
import styles from './index.module.css';
import WebpImage from '../Elements/WebpImage';
import DoubleDate from '../DoubleDate';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link
        href={`/blog/articles/${article.id}`}
        className={`${styles.link} p-2 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1`}
      >
        <WebpImage article={article} card />
        <div className={`${styles.content}`}>
          <div className={`${styles.title}`}>{article.title}</div>
          <div className={styles.description}>{article.description}</div>
          <DoubleDate article={article} />
        </div>
      </Link>
    </li>
  );
}
