import '../../app/globals.css';
import { FireIcon, ChevronRightIcon, HomeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export default function Activity() {
  const timeline = [
    {
      name: '新年会',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: 'お疲れ様回',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '7月',
      dateTime: '2022-12',
    },
    {
      name: 'オープンゼミ',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '10月',
      dateTime: '2021-08',
    },
    {
      name: 'ディズニー視察',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '12月',
      dateTime: '2022-12',
    },
    {
      name: '歓迎会',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '12月',
      dateTime: '2021-08',
    },
    {
      name: '忘年会',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '12月',
      dateTime: '2022-12',
    },
    {
      name: '追いコン',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '12月',
      dateTime: '2022-12',
    },
  ];

  const timeline_second = [
    {
      name: '輪読',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: 'ディベート',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '9月',
      dateTime: '2022-12',
    },
  ];

  const timeline_third = [
    {
      name: 'ディベート',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: '就活報告メール',
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: '9月',
      dateTime: '2021-12',
    },
    {
      name: 'コンテスト',
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: '9月',
      dateTime: '2022-02',
    },
  ];

  const timeline_fourth = [
    {
      name: '卒業論文',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
  ];
  const features = [
    {
      name: '輪読',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'ディベート',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: '就活報告メール',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: '卒業論文',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ];
  return (
    <>
      <div className="">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side top_title"
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
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              {/* <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" /> */}
              <div className="text-black">全学年共通</div>
            </div>
          </h1>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl">
            <img
              alt=""
              src="/images/member/8007A0FE-E8A9-4322-BEC6-B230B17A7345_1_201_a.jpeg"
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
                      className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
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
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              {/* <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" /> */}
              <div className="text-black">２年生</div>
            </div>
          </h1>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl">
            <img
              alt=""
              src="/images/member/B84EE05A-F8C7-4BF2-95A1-7D630BE17E57_1_201_a.jpeg"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline_second.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
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
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              {/* <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" /> */}
              <div className="text-black">3年生</div>
            </div>
          </h1>
          <div className="mt-10 xl:mx-auto xl:max-w-7xl">
            <img
              alt=""
              src="/images/member/6D9D88FF-01AC-4AF8-A43C-53C85CEFDA32_1_201_a.jpeg"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline_third.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
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
          <div className="mt-10 xl:mx-auto xl:max-w-7xl">
            <img
              alt=""
              src="/images/member/6D9D88FF-01AC-4AF8-A43C-53C85CEFDA32_1_201_a.jpeg"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              {/* <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" /> */}
              <div className="text-black">4年生</div>
            </div>
          </h1>
          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline_fourth.map((item) => (
                  <div key={item.name} className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
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
