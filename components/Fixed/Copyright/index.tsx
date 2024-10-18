import '../../../app/globals.css';
import './index.css';
import PublishedDate from '../../Elements/Date';
import { DocumentTextIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Copyright() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
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
                  href="/copyright"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  著作権
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
            <DocumentTextIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">著作権</div>
          </div>
        </h1>
        <div className="space-y-5 lg:space-y-8">
          <div className="includeBanner flex justify-end gap-x-5">
            <PublishedDate date={formattedDate} />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold">著作権について</h2>
          <p className="mt-6">
            鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール（以下、「本サービス」と言います。）のコンテンツ（写真や画像、文章など）の著作権につきましては、
            原則として本サービスに帰属しており、無断転載することを禁止します。
          </p>
          <p className="mt-6">
            本サービスのコンテンツを利用したい場合は、別途お問い合わせください。
          </p>
          <p className="mt-6">
            本サービスは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
            <a href="/contact">お問い合わせ</a>
            よりご連絡ください。迅速に対応いたします。
          </p>
        </div>
      </div>
    </div>
  );
}
