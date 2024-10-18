'use client';

// import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import { useEffect, useState } from 'react';
import PublishedDate from '../Date';
import styles from './index.module.css';
import './article.css';
import TableOfContents from '../TableOfContent';
import TagList from '../TagList';
import WithArticleItem from '../WithArticleItem';
import {
  HomeIcon,
  ChevronRightIcon,
  FolderIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  LightBulbIcon,
  InformationCircleIcon,
  LinkIcon,
} from '@heroicons/react/24/solid';
import Sidebar from '../Sidebar';

type Props = {
  data: Article;
};

interface Heading {
  id: string;
  title: string;
  level: number;
}

function useExtractHeadings(contentBlocks: { rich_text?: string }[]): Heading[] {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (contentBlocks.length > 0) {
      // 新しい Headings を抽出する
      const extractedHeadings: Heading[] = [];

      contentBlocks.forEach((block) => {
        if (block.rich_text) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = block.rich_text;

          const blockHeadings: Heading[] = Array.from(
            tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6'),
          ).map((el) => ({
            id: el.id,
            title: el.textContent || '',
            level: parseInt(el.tagName[1], 10),
          }));

          extractedHeadings.push(...blockHeadings);
        }
      });

      // 現在の Headings と新しい Headings が異なる場合のみ setHeadings を実行
      const isEqual =
        extractedHeadings.length === headings.length &&
        extractedHeadings.every((heading, index) => {
          const current = headings[index];
          return (
            current &&
            current.id === heading.id &&
            current.title === heading.title &&
            current.level === heading.level
          );
        });

      if (!isEqual) {
        setHeadings(extractedHeadings);
      }
    }
  }, [contentBlocks, headings]);

  return headings;
}

export default function ArticleComponent({ data }: Props) {
  const headings = useExtractHeadings(data.content_blocks);
  return (
    <>
      <div className="">
        <div
          className="main_side top_title mx-auto max-w-7xl px-6 text-center lg:px-8"
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
                      href={`/blog`}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                      style={{ whiteSpace: 'nowrap' }}
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
                      href={`${data.id}`}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                    >
                      {data.title}
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </h1>
          <div className="max-w-[87rem] mx-auto ArticleThumbnail">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              <div className="lg:col-span-2">
                <h1 className={`${styles.title} mt-5 ArticleTitle`}>{data.title}</h1>
                <main className={styles.main}>
                  <picture>
                    <source
                      type="image/webp"
                      media="(max-width: 640px)"
                      srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
                    />
                    <source
                      type="image/webp"
                      srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
                    />
                    <img
                      src={data.thumbnail?.url}
                      alt=""
                      className={`${styles.thumbnail}`}
                      width={data.thumbnail?.width}
                      height={data.thumbnail?.height}
                    />
                  </picture>
                  <div style={{ marginLeft: 'auto' }}>
                    <div className={styles.date}>
                      <FolderIcon className="h-5 w-5 mr-2 mt-3" aria-hidden="true" />
                      <TagList tags={data.tags} hasLink={true} />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <PublishedDate date={data.publishedAt || data.createdAt} />
                    </div>
                  </div>
                  <div className={styles.content}>
                    {data.introduction_blocks.map((block, index) => (
                      <div key={index}>
                        {(block.bubble_name || block.bubble_text || block.bubble_image) && (
                          <div className="my-10">
                            <div
                              className={`speech-bubble ${block.bubble_isRight ? 'right' : 'left'}`}
                            >
                              {block.bubble_image && (
                                <div
                                  className={`bubble-image-wrapper ${
                                    block.bubble_isRight ? 'right' : 'left'
                                  }`}
                                >
                                  <div>
                                    <img
                                      src={block.bubble_image.url}
                                      width={75}
                                      height={75}
                                      alt="吹き出しのイメージ"
                                      className="bubble-image"
                                    />
                                  </div>
                                </div>
                              )}
                              <div
                                className={`bubble-content ${
                                  block.bubble_isRight ? 'right' : 'left'
                                }`}
                              >
                                <p className="bubble-text">{block.bubble_text}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {block.rich_text && (
                          <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{
                              __html: block.rich_text.replace(/<img/g, '<img loading="lazy"'),
                            }}
                          />
                        )}
                        {block.custom_html && (
                          <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: block.custom_html }}
                          />
                        )}
                        {block.articleLink && typeof block.articleLink !== 'string' && (
                          <div>
                            <div className="flex mt-10">
                              <LinkIcon className="h-8 w-8 mr-2" aria-hidden="true" />
                              <h1 className="text-2xl font-semibold mb-5">あわせて読みたい</h1>
                            </div>
                            <WithArticleItem article={block.articleLink as Article} />
                          </div>
                        )}
                        {block.box_merit && (
                          <div className={`${styles.tab_merit_box} flex items-center`}>
                            <HandThumbUpIcon
                              className={`h-8 w-8 ${styles.tab_merit_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_merit }} />
                          </div>
                        )}
                        {block.box_demerit && (
                          <div className={`${styles.tab_demerit_box} flex items-center`}>
                            <HandThumbDownIcon
                              className={`h-8 w-8 ${styles.tab_demerit_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_demerit }} />
                          </div>
                        )}
                        {block.box_point && (
                          <div className={`${styles.tab_point_box} flex items-center`}>
                            <LightBulbIcon
                              className={`h-8 w-8 ${styles.tab_point_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_point }} />
                          </div>
                        )}
                        {block.box_common && (
                          <div className={`${styles.tab_common_box} flex items-center`}>
                            <InformationCircleIcon
                              className={`h-8 w-8 ${styles.tab_common_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_common }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="w-1/2 tableOfContent">
                    {headings.length > 0 && <TableOfContents headings={headings} />}
                  </div>
                  <div className={styles.content}>
                    {data.content_blocks.map((block, index) => (
                      <div key={index}>
                        {/* {block.adsense && <Display slot={block.adsense} />} */}
                        {(block.bubble_name || block.bubble_text || block.bubble_image) && (
                          <div className="my-10">
                            <div
                              className={`speech-bubble ${block.bubble_isRight ? 'right' : 'left'}`}
                            >
                              {block.bubble_image && (
                                <div
                                  className={`bubble-image-wrapper ${
                                    block.bubble_isRight ? 'right' : 'left'
                                  }`}
                                >
                                  <div>
                                    <img
                                      src={block.bubble_image.url}
                                      width={75}
                                      height={75}
                                      alt="吹き出しのイメージ"
                                      className="bubble-image"
                                    />
                                  </div>
                                </div>
                              )}
                              <div
                                className={`bubble-content ${
                                  block.bubble_isRight ? 'right' : 'left'
                                }`}
                              >
                                <p className="bubble-text">{block.bubble_text}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {block.rich_text && (
                          <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{
                              __html: block.rich_text.replace(/<img/g, '<img loading="lazy"'),
                            }}
                          />
                        )}
                        {block.custom_html && (
                          <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: block.custom_html }}
                          />
                        )}
                        {block.articleLink && typeof block.articleLink !== 'string' && (
                          <div>
                            <div className="flex mt-10">
                              <LinkIcon className="h-8 w-8 mr-2" aria-hidden="true" />
                              <h1 className="text-2xl font-semibold mb-5">あわせて読みたい</h1>
                            </div>
                            <WithArticleItem article={block.articleLink as Article} />
                          </div>
                        )}
                        {block.box_merit && (
                          <div className={`${styles.tab_merit_box} flex items-center`}>
                            <HandThumbUpIcon
                              className={`h-8 w-8 ${styles.tab_merit_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_merit }} />
                          </div>
                        )}
                        {block.box_demerit && (
                          <div className={`${styles.tab_demerit_box} flex items-center`}>
                            <HandThumbDownIcon
                              className={`h-8 w-8 ${styles.tab_demerit_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_demerit }} />
                          </div>
                        )}
                        {block.box_point && (
                          <div className={`${styles.tab_point_box} flex items-center`}>
                            <LightBulbIcon
                              className={`h-8 w-8 ${styles.tab_point_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_point }} />
                          </div>
                        )}
                        {block.box_common && (
                          <div className={`${styles.tab_common_box} flex items-center`}>
                            <InformationCircleIcon
                              className={`h-8 w-8 ${styles.tab_common_box_icon}`}
                              aria-hidden="true"
                            />
                            <div dangerouslySetInnerHTML={{ __html: block.box_common }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </main>
              </div>
              <div style={{ marginTop: '112px' }} className="ArticleSidebar">
                <Sidebar contentBlocks={data.content_blocks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
