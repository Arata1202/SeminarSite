import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import PublishedDate from '../Date';
import { FolderIcon } from '@heroicons/react/24/solid';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link
        href={`/articles/${article.id}`}
        className={`${styles.link} p-2 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1`}
      >
        {article.thumbnail ? (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
            />
            <img
              src={article.thumbnail?.url || `/noimage.png`}
              alt=""
              className={styles.image}
              width={article.thumbnail?.width}
              height={article.thumbnail?.height}
            />
          </picture>
        ) : (
          <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <div className={`${styles.content}`}>
          <div className={`${styles.title}`}>{article.title}</div>
          <div className={styles.description}>{article.description}</div>
          <div className={styles.date}>
            <FolderIcon className="h-5 w-5 mr-2 mt-3" aria-hidden="true" />
            <TagList tags={article.tags} hasLink={false} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </div>
        </div>
      </Link>
    </li>
  );
}
