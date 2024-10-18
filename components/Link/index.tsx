import '../../app/globals.css';
import './index.css';
import PublishedDate from '../Date';
import { LinkIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Link() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return (
    <div
      className="top_title mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
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
                  href="/link"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  リンク
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </h1>
      <div className="mx-auto">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="text-3xl font-bold">
          <div className="flex items-center pb-2 pt-2 mt-5">
            <LinkIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">リンク</div>
          </div>
        </h1>
        <div className="space-y-5 lg:space-y-8">
          <div className="includeBanner flex justify-end gap-x-5">
            <PublishedDate date={formattedDate} />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold">リンクについて</h2>
          <p className="mt-6">
            鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール（以下、「本サービス」と言います。）は完全リンクフリーです。リンクを行う場合の本サービスへの許可や連絡は不要です。
          </p>
          <p className="mt-6">ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
        </div>
      </div>
    </div>
  );
}
