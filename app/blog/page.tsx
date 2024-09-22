import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import { getTagList } from '@/libs/microcms';
import { DocumentIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'ブログ - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールのブログを紹介しています。',
  openGraph: {
    title: 'ブログ - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールのブログを紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzukiseminar.vercel.app/blog',
  },
};

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
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
                  href="/blog"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-blue-500"
                >
                  ブログ
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </h1>
      <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-5">
          <DocumentIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div className="text-black">ブログ</div>
        </div>
      </h1>
      {/* <Nav tags={tags.contents} /> */}
      <div className="flex mt-10">
        <ArticleList articles={data.contents} />
      </div>
      <Pagination totalCount={data.totalCount} />
    </div>
  );
}
