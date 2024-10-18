// import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import './article.css';
import TagList from '../TagList';
import { HomeIcon, ChevronRightIcon, FolderIcon } from '@heroicons/react/24/solid';
import Sidebar from '../Sidebar';

type Props = {
  data: Article;
};

export default function ArticleComponent({ data }: Props) {
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
                  <a href="/" className="flex text-gray-500 hover:text-blue-500">
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
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-blue-500"
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
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-blue-500"
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
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{
                      __html: `${data.content}`,
                    }}
                  />
                </main>
              </div>
              <div style={{ marginTop: '112px' }} className="ArticleSidebar">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
