import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Article';
import { ChevronRightIcon, HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title + ' - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: data.description,
    openGraph: {
      title: data.title + ' - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
      description: data.description,
      images: [data?.thumbnail?.url || ''],
      url: '' + data.id,
    },
    alternates: {
      canonical: '' + data.id,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
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
      <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-5">
          <DocumentIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div className="text-black">ブログ</div>
        </div>
      </h1>
      {/* <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-5">
          <InformationCircleIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div className="text-black">ブログ</div>
        </div>
      </h1> */}
      <Article data={data} />
    </div>
  );
}
