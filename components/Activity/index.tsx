import '../../app/globals.css';
import { FireIcon, ChevronRightIcon, HomeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

export default function Activity() {
  const timeline = [
    {
      name: '宴会',
      description:
        '宴会は、学期の始まりや終わり、4年生の追いコンなどの大切なイベントで、ゼミ生と先生方が参加し、学年を超えた交流が行われます。鈴木ゼミでは、こうした機会を通じてゼミ生同士の絆を深め、コミュニケーションを行うことを重視しています。',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: 'ディズニー視察',
      description:
        '5月にはディズニー視察が行われます。学年を超えたグループ活動を通じて、ゼミ生同士の距離が一気に縮まります。この視察の機会を活かし、マーケティングについて学びを深めます。',
      date: '5月',
      dateTime: '2022-12',
    },
    {
      name: 'ゼミ合宿',
      description:
        '毎年9月の前半に2泊3日でゼミ合宿を行います。ディベートやグループディスカッションなどの学びの場に加え、BBQ、花火など多彩なイベントも盛りだくさん。遊びに勉強に有意義な3日間を過ごすことができます。',
      date: '9月',
      dateTime: '2022-12',
    },
    {
      name: 'オープンゼミ',
      description:
        'オープンゼミは、1年生が普段のゼミを体験できる貴重な機会です。先輩と直接話しながら、ゼミの雰囲気や活動内容を知ることができ、研究テーマへの理解も深まります。先輩からのアドバイスや経験談を聞くことで、ゼミへの参加意欲を高め、将来の学びに繋げていきます。',
      date: '10月',
      dateTime: '2021-08',
    },
    {
      name: '歓迎会',
      description:
        '新しいゼミ生が決まった後にゼミ全体で交流会を行います。クイズ大会などのレクリエーションを通して、これから一緒に活動する同期や先輩と交流を深める活動です。',
      date: '12月',
      dateTime: '2021-08',
    },
  ];

  const timeline_second = [
    {
      name: '輪読',
      description:
        '２年生は春学期に消費者行動についての本を使い輪読を行います。「なぜ人は衝動買いをしてしまうのか」などの内容を通して消費者心理やマーケティングについて学ぶことができます。また、先輩のアドバイスやスライドの作り方や発表の仕方を回数を重ねながら学ぶことができます。',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: 'ディベート',
      description:
        '2年生の秋と3年生の春に、経営戦略をテーマにしたディベートを行い、他大学との対戦を通じて論理的思考やコミュニケーション能力を磨きます。賛成・反対に分かれて議論し、リサーチやプレゼン力も向上させます。他大学の学生との交流を通じて多様な視点を学ぶ機会にもなります。ディベート大会は、ゼミの重要な活動で、メンバー全員の成長を支える大切な場です。',
      date: '9月',
      dateTime: '2022-12',
    },
  ];

  const timeline_third = [
    {
      name: 'ビジネスコンテスト',
      description:
        '3年生の秋には、企業が主催するビジネスコンテストに参加しています。昨年は見事に受賞し、プレゼンテーション力や企画力を磨きました。ディベートで培った分析力を活かし、論理的にビジネスアイデアを構築するスキルも向上します。チームでの協力やアイデア創出を通じて、実践的なビジネス感覚を養い、将来のキャリアに繋げることを目指しています。',
      date: '9月',
      dateTime: '2022-02',
    },
  ];

  const timeline_fourth = [
    {
      name: '卒業論文',
      description:
        '4年生の1年間で卒業論文に取り組みます。テーマはマーケティングや消費者心理学など自由に選べ、自分の興味を深める良い機会です。卒論を通じて文章力やデータ分析力を養い、得たスキルは将来のキャリアにも役立ちます。自分の考えを形にする経験を通じて、さらなる成長が期待されます。',
      date: '4月',
      dateTime: '2021-08',
    },
  ];
  return (
    <>
      <div className="">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side top_title"
          style={{ marginBottom: '120px' }}
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
                      href="/activity"
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                    >
                      活動内容
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </h1>
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-5">
              <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div className="text-black">活動内容</div>
            </div>
          </h1>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl">
            <img
              alt=""
              src="/images/activity/8007A0FE-E8A9-4322-BEC6-B230B17A7345_1_201_a.jpeg"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-green-700"
                    >
                      <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                        <circle r={2} cx={2} cy={2} fill="currentColor" />
                      </svg>
                      {item.date}
                      <div
                        aria-hidden="true"
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      />
                    </time>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl relative">
            <img
              alt=""
              src="/images/activity/B84EE05A-F8C7-4BF2-95A1-7D630BE17E57_1_201_a.jpeg"
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute ActivityGradeSection">
              <p className="ActivityGrade">2年生</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline_second.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-green-600"
                    >
                      <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                        <circle r={2} cx={2} cy={2} fill="currentColor" />
                      </svg>
                      {item.date}
                      <div
                        aria-hidden="true"
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      />
                    </time>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl relative">
            <img
              alt=""
              src="/images/activity/6D9D88FF-01AC-4AF8-A43C-53C85CEFDA32_1_201_a.jpeg"
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute ActivityGradeSection">
              <p className="ActivityGrade">3年生</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline_third.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-green-600"
                    >
                      <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                        <circle r={2} cx={2} cy={2} fill="currentColor" />
                      </svg>
                      {item.date}
                      <div
                        aria-hidden="true"
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      />
                    </time>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl relative">
            <img
              alt=""
              src="/images/activity/4nen.png"
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute ActivityGradeSection">
              <p className="ActivityGrade">4年生</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline_fourth.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-green-600"
                    >
                      <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                        <circle r={2} cx={2} cy={2} fill="currentColor" />
                      </svg>
                      {item.date}
                      <div
                        aria-hidden="true"
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      />
                    </time>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <div className="mx-auto max-w-7xl">
              <h1 className="text-3xl font-bold">
                <div className="flex items-center pb-2 pt-2 mt-10">
                  <CalendarDaysIcon className="h-8 w-8 mr-2" aria-hidden="true" />
                  <div className="text-black">スケジュール</div>
                </div>
              </h1>
              <img className="pc mt-10" src="/images/activity/pc.png" alt="" />
              <img className="mobile mt-10" src="/images/activity/mobile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
