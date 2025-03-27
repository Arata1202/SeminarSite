'use client';

import Link from 'next/link';
import TableOfContents from '../../TableOfContent';
import styles from './index.module.css';
import { FolderIcon } from '@heroicons/react/24/solid';
import { useExtractHeadings } from '@/hooks/useExtractHeadings';
import {
  UserGroupIcon,
  ChartPieIcon,
  BookOpenIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const CategoryList = [
  {
    name: '全学年',
    href: '/blog/category/allgrades',
    icon: UserGroupIcon,
  },
  {
    name: '2年生',
    href: '/blog/category/grade2',
    icon: BookOpenIcon,
  },
];
const CategoryList2 = [
  {
    name: '３年生',
    href: '/blog/category/grade3',
    icon: ChartPieIcon,
  },
  {
    name: '４年生',
    href: '/blog/category/grade4',
    icon: DocumentTextIcon,
  },
];

type Props = {
  contentBlocks?: { rich_text?: string }[];
  sidebar?: boolean;
};

export default function Sidebar({ contentBlocks = [], sidebar = false }: Props) {
  const headings = useExtractHeadings(contentBlocks);

  return (
    <div className={`${sidebar && styles.container} lg:col-span-1 lg:w-full`}>
      <div className="sidebar">
        <div className="bg-white pt-8 px-4 border border-gray-300 py-5">
          <h1
            className={`${styles.profile} text-2xl text-center font-semibold flex justify-center`}
          >
            <FolderIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            カテゴリー
          </h1>
          <nav className="flex gap-4 mt-5 md:mt-5" role="tablist">
            {CategoryList.map((item) => (
              <Link
                href={item.href}
                className="sidebarCategory hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-3 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
                style={{ width: '100%' }}
                data-hs-tab="#tabs-with-card-1"
                role="tab"
                key={item.name}
              >
                <span className="flex">
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600">
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
              </Link>
            ))}
          </nav>
          <nav className="flex gap-4 mt-5 md:mt-5 w-100" role="tablist">
            {CategoryList2.map((item) => (
              <Link
                href={item.href}
                className="sidebarCategory hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-3 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
                style={{ width: '100%' }}
                data-hs-tab="#tabs-with-card-1"
                role="tab"
                key={item.name}
              >
                <span className="flex">
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600">
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
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {headings.length > 0 && (
        <div className={`${styles.pc} ${styles.sidebar}`}>
          <TableOfContents headings={headings} sidebar={true} />
        </div>
      )}
    </div>
  );
}
