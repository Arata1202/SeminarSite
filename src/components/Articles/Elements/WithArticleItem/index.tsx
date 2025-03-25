'use client';

import React from 'react';
import { memo } from 'react';
import { Article } from '@/types/microcms';
import styles from './index.module.css';
import PublishedDate from '../../../Elements/Date';
import Link from 'next/link';

type Props = {
  article: Article;
};

function getImageSrcSizes(imageSrc: string) {
  return {
    mobileSrcSet: `${imageSrc}?fm=webp&w=414 1x, ${imageSrc}?fm=webp&w=414&dpr=2 2x`,
    desktopSrcSet: `${imageSrc}?fm=webp&fit=crop&w=240&h=126 1x, ${imageSrc}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`,
  };
}

const ArticleListItem = ({ article }: Props) => {
  const imageSrc = article.thumbnail?.url || '/no-image.png';
  const isThumbnailAvailable = !!article.thumbnail;
  const { mobileSrcSet, desktopSrcSet } = getImageSrcSizes(imageSrc);

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();
    window.location.href = url;
  };

  return (
    <li className={styles.list}>
      <Link
        onClick={(event) => handleNavigation(event, `/blog/articles/${article.id}`)}
        href={`/blog/articles/${article.id}`}
        className={`${styles.link} p-2 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1 cursor-pointer`}
      >
        <picture>
          {isThumbnailAvailable && (
            <>
              <source type="image/webp" media="(max-width: 640px)" srcSet={mobileSrcSet} />
              <source type="image/webp" srcSet={desktopSrcSet} />
            </>
          )}
          <img src={imageSrc} alt="サムネイル" className={styles.image} width="600" height="300" />
        </picture>
        <div className={`${styles.content} text-gray-700`}>
          <div className={styles.title}>{article.title}</div>
          <div className={styles.description}>{article.description}</div>
          <div className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default memo(ArticleListItem);
