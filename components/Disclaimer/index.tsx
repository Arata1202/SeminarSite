import '../../app/globals.css';
import { ShieldExclamationIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Disclaimer() {
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
                  href="/disclaimer"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  免責事項
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </h1>
      <div className="mx-auto text-base leading-7">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="text-3xl font-bold">
          <div className="flex items-center pb-2 pt-2 mt-5">
            <ShieldExclamationIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">免責事項</div>
          </div>
        </h1>
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">免責事項について</h2>
          <p className="mt-6">
            鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール（以下、「本サービス」と言います。）からのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
          <p className="mt-6">
            また本サービスのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          </p>
          <p className="mt-6">
            本サービスに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </div>
      </div>
    </div>
  );
}
