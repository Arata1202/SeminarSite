import '../../app/globals.css';
import { FlagIcon, ChevronRightIcon, HomeIcon, CheckIcon } from '@heroicons/react/24/solid';
const firstSteps = [
  {
    id: '01',
    name: 'エントリーシート + レポート提出',
    description: 'Vitae sed mi luctus laoreet.',
    href: '#',
    status: 'current',
  },
  {
    id: '02',
    name: '面接',
    description: 'Cursus semper viverra.',
    href: '#',
    status: 'current',
  },
  {
    id: '03',
    name: '成績',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'current',
  },
];

export default function Selection() {
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
                  href="/selection"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  選考フロー
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
            <FlagIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">選考フロー</div>
          </div>
        </h1>

        <nav aria-label="Progress" style={{ marginTop: '2.5rem' }}>
          <ol
            role="list"
            className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
          >
            {firstSteps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex md:flex-1">
                {step.status === 'complete' ? (
                  <div className="group flex w-full items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                        <CheckIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                    </span>
                  </div>
                ) : step.status === 'current' ? (
                  <div
                    aria-current="step"
                    className="flex items-center px-6 py-4 text-sm font-medium"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                      <span className="text-indigo-600">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
                  </div>
                ) : (
                  <div className="group flex items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </div>
                )}

                {stepIdx !== firstSteps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-0 hidden h-full w-5 md:block"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 22 80"
                        preserveAspectRatio="none"
                        className="h-full w-full text-gray-300"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mx-auto text-base leading-7">
          <p className="mt-6">
            まず、エントリーシートとレポートを提出していただきます。その上で面接を行います。
            最終的に、春学期の成績も考慮した上で決定します（成績は提出不要）。
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            エントリーシート
          </h2>
          <p className="mt-6">
            以下のURLから必要事項を記入し、提出してください。
            <br />
            <a
              className="text-green-700 hover:text-green-500"
              href="https://forms.gle/uVEL8K9113wd9EnC9"
            >
              応募フォーム
            </a>
            <br />
            皆さんの人となりを知る上で重要なため、できる限り詳しく書いてください。
            <br />
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">レポート</h2>
          <p className="mt-6">
            レポートは「マーケティングが優れていると思う企業（or 製品 or サービス or
            ブランド）について」というテーマで提出していただきます。
            <br />
            皆さんが優れていると思う企業、製品、サービス、ブランドについて、どのような点が優れていると考えたのか、マーケティングの知識や授業で習ったことを活かして書いてください（500字程度、文字数が多い分には制限はありません）。
            <br />
            <br />
            選ぶ題材は自由ですが、以下の企業・ブランドを取り上げることは避けてください。
            <br />
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
            <li>Apple（の製品含む）</li>
            <li>ディズニー（のキャラクター、オリエンタルランド含む）</li>
            <li>USJ（ユニバーサルスタジオジャパン）</li>
            <li>任天堂（が所有するゲームソフトやキャラクター含む）</li>
            <li>スターバックス</li>
            <li>ユニクロ</li>
            <li>マクドナルド</li>
            <li>セブンイレブン</li>
          </ul>
          （事例がありふれており、皆さん自身の考えを知ることができないため）
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">面接</h2>
          <p className="mt-6">11月21日（木）の3〜5限を予定しています。</p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">応募期限</h2>
          <p className="mt-6">
            10月31日（木）の23:59までに、
            <a
              className="text-green-700 hover:text-green-500"
              href="https://forms.gle/uVEL8K9113wd9EnC9"
            >
              応募フォーム
            </a>
            よりエントリーシートおよびレポートの提出に加え、Toyonet-ACEへの登録を済ませてください。
          </p>
        </div>
      </div>
    </div>
  );
}
