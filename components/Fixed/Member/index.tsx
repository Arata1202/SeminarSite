'use client';

import '../../../app/globals.css';
import {
  CheckBadgeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChevronRightIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Member() {
  const genderData = {
    labels: ['男子', '女子'],
    datasets: [
      {
        data: [20, 22],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const data = {
    labels: ['2年生', '3年生', '4年生'],
    datasets: [
      {
        data: [14, 15, 13],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        font: {
          size: 25,
          weight: 'bold' as 'bold',
        },
        formatter: (value: number) => {
          return value + ' 人';
        },
      },
    },
  };

  const people = [
    {
      name: 'ゼミ長',
      imageUrl: '/images/member/roles/6.png',
      // xUrl: '#',
      description:
        'ゼミ長の主な仕事は、ゼミの運営を円滑に進めることです。具体的には、日程調整やメンバー間の連絡、進行状況の確認、イベント時の挨拶などを行います。また、ゼミの目標を共有し、良い雰囲気を作りながらメンバー同士の仲を深めることに努めています。',
    },
    {
      name: '副ゼミ長',
      imageUrl: '/images/member/roles/3.png',
      // xUrl: '#',
      description:
        '副ゼミ長の仕事は、ゼミ長のサポートとしてゼミの運営を円滑に進める役割です。ゼミ活動の調整、資料準備、連絡事項の共有、ゼミ長不在時の代理業務、ゼミ生間の意見調整などを行い、ゼミ全体のサポートを担います。',
    },
    {
      name: 'イベント',
      imageUrl: '/images/member/roles/4.png',
      // xUrl: '#',
      description:
        'イベント係では、ディズニー視察、学期末お疲れ様会、夏合宿それぞれの企画、運営を行います。学年を越えた交流や、組織全体のコミュニケーションを促す大事な役割です。鈴木ゼミの風通しの良さを作ってくれているのは間違いなくイベント係のおかげ！',
    },
    {
      name: '広報',
      imageUrl: '/images/member/roles/2.png',
      // xUrl: '#',
      description:
        '広報係はゼミの魅力、活動、成果を多くの人に伝えています。主にSNSの情報発信を通して新しいメンバーを募集したりゼミ内での活動報告を行なっております。',
    },
    {
      name: '運営',
      imageUrl: '/images/member/roles/5.png',
      // xUrl: '#',
      description:
        '運営係では、ディベート大会や夏合宿の設営を行います。ゼミの発表、各イベントが円滑に進むように班を越えた積極的なコミュニケーションをゼミ全体に促します。鈴木ゼミを陰から支えるまさかに"縁の下の力持ち"の役割を果たしています！',
    },
    {
      name: '渉外',
      imageUrl: '/images/member/roles/1.png',
      // xUrl: '#',
      description:
        '渉外係では、主にディベート大会の企画、運営を行います。年に２回開催されるディベート大会をスムーズに進行できるよう、事前に他大学と打ち合わせをします。ディベートを通じて、企業の経営戦略やビジネスモデルの有効性を学ぶ機会を渉外係が中心になって作ります。',
    },
  ];

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
                      href="/member"
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                    >
                      組織
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </h1>
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-5">
              <AcademicCapIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>教授</div>
            </div>
          </h1>
          <div className="mt-10 mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="flex max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto text-left items-end">
              鈴木 寛<div className="ml-5 text-xl sm:text-3xl">Kan Suzuki</div>
            </h1>

            <div className="u_tablet_teacher_p mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 text-left">
                ゼミではテキストの輪読、ディベート(大会)、論文執筆等への取り組みを通じて大学生としてのスキルを高められるように先輩方と教員でフォローしていきます。
                <br />
                <br />
                大学生活を通じて何か成し遂げたいとやる気のある方の参加を希望します。
              </p>
            </div>
            <img
              alt=""
              src="/images/member/AD5B05E6-4456-4777-8A3C-8F92D50F9B0D_1_201_a.jpeg"
              className="u_tablet_teacher_img aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2 xl:row-end-2"
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>

          <h1 className="text-3xl font-bold mt-10">
            <div className="flex items-center pb-2 pt-2 mt-10">
              <UserGroupIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>人数比</div>
            </div>
          </h1>
          <div
            className="PieChartContainerflex justify-between mt-10 mx-auto"
            style={{ width: '70%' }}
          >
            <div className="PieCahrt flex justify-center items-center">
              <Doughnut data={data} options={options} width={300} height={300} />
            </div>

            <div className="PieCahrt flex justify-center items-center">
              <Doughnut data={genderData} options={options} width={300} height={300} />
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              <CheckBadgeIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>役割</div>
            </div>
          </h1>

          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl px-8 py-10 border border-gray-300">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-500">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-left text-gray-400">
                  {person.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
