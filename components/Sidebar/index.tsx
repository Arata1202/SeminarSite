'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SearchField from '../SearchField';
import styles from './index.module.css';
import { FolderIcon } from '@heroicons/react/24/solid';
import { Listbox } from '@headlessui/react';
import { CalendarDaysIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { archive } from '@/section/archive';
import { useState } from 'react';
import {
  UserGroupIcon,
  ChartPieIcon,
  BookOpenIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const CategoryList = [
  {
    name: '全学年',
    href: '/category/allgrades',
    icon: UserGroupIcon,
  },
  {
    name: '2年生',
    href: '/category/grade2',
    icon: BookOpenIcon,
  },
];
const CategoryList2 = [
  {
    name: '３年生',
    href: '/category/grade3',
    icon: ChartPieIcon,
  },
  {
    name: '４年生',
    href: '/category/grade4',
    icon: DocumentTextIcon,
  },
];

export default function Sidebar() {
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleArchiveChange = (value: string) => {
    if (value) {
      window.location.href = `/archive/${value}`;
      setSelectedMonth('');
    }
  };
  return (
    <div className="lg:col-span-1 lg:w-full lg:h-full">
      <div className="sidebar">
        <div className="bg-white pt-8 px-4 border border-gray-300 py-5">
          <h1
            className={`${styles.profile} text-2xl text-center font-semibold mb-5 flex justify-center`}
          >
            <MagnifyingGlassIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            キーワードで探す
          </h1>
          <SearchField />
        </div>

        <div className="bg-white pt-8 px-4 border border-gray-300 py-5 mt-5">
          <h1
            className={`${styles.profile} text-2xl text-center font-semibold flex justify-center`}
          >
            <FolderIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            カテゴリー
          </h1>
          <nav className="flex gap-4 mt-5 md:mt-5" role="tablist">
            {CategoryList.map((item) => (
              <a
                href={item.href}
                className="sidebarCategory hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-3 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
                style={{ width: '100%' }}
                data-hs-tab="#tabs-with-card-1"
                role="tab"
                key={item.name}
              >
                <span className="flex">
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                      <ul>
                        <li>
                          <div className="flex justify-center">
                            <item.icon className="w-12 h-12" aria-hidden="true" />
                          </div>
                          <div className="flex justify-center mt-2">
                            <div>{item.name}</div>
                          </div>
                        </li>
                      </ul>
                    </span>
                  </span>
                </span>
              </a>
            ))}
          </nav>
          <nav className="flex gap-4 mt-5 md:mt-5 w-100" role="tablist">
            {CategoryList2.map((item) => (
              <a
                href={item.href}
                className="sidebarCategory hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-3 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
                style={{ width: '100%' }}
                data-hs-tab="#tabs-with-card-1"
                role="tab"
                key={item.name}
              >
                <span className="flex">
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                      <ul>
                        <li>
                          <div className="flex justify-center">
                            <item.icon className="w-12 h-12" aria-hidden="true" />
                          </div>
                          <div className="flex justify-center mt-2">
                            <div>{item.name}</div>
                          </div>
                        </li>
                      </ul>
                    </span>
                  </span>
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="bg-white pt-8 px-4 border border-gray-300 py-5 mt-5">
          <h1
            className={`${styles.profile} text-2xl text-center font-semibold flex justify-center`}
          >
            <CalendarDaysIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            アーカイブ
          </h1>

          <Listbox value={selectedMonth} onChange={handleArchiveChange}>
            <div className="relative mt-5">
              <Listbox.Button
                style={{ height: '40px' }}
                className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <span style={{ fontSize: '18px' }} className="block truncate">
                  {selectedMonth
                    ? `${selectedMonth.split('/')[0]}年${selectedMonth
                        .split('/')[1]
                        .replace(/^0+/, '')}月`
                    : 'アーカイブを選択'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-7 w-7 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {archive.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    value={`${item.year}/${item.monthForPath}`}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 ${
                        active ? 'bg-[#eaf4fc]' : 'text-gray-900'
                      }`
                    }
                  >
                    <span
                      className={`block truncate font-normal ${
                        selectedMonth === `${item.year}/${item.monthForPath}` ? 'font-semibold' : ''
                      }`}
                    >
                      {`${item.year}年${item.month}月`}
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}
