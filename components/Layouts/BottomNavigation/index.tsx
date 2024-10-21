'use client';

import Link from 'next/link';
import { isAndroid, isIOS } from 'react-device-detect';
import {
  HomeIcon,
  FireIcon,
  UserGroupIcon,
  FlagIcon,
  BellAlertIcon,
} from '@heroicons/react/24/solid';
import styles from './index.module.css';

const menuItems = [
  { name: 'ホーム', icon: HomeIcon, href: '/' },
  { name: '活動', icon: FireIcon, href: '/activity' },
  { name: '組織', icon: UserGroupIcon, href: '/member' },
  { name: '選考', icon: FlagIcon, href: '/selection' },
  { name: 'ブログ', icon: BellAlertIcon, href: '/blog' },
];

export default function BottomNavigation() {
  const isPWA =
    typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches;
  return (
    <>
      {(isAndroid || isIOS) && isPWA && (
        <div
          className={`${styles.footer} fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200`}
        >
          <div
            className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium"
            style={{ padding: '2px 0 2px 0' }}
          >
            {menuItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                type="button"
                className="inline-flex flex-col items-center justify-center hover:bg-gray-50 group"
              >
                <item.icon
                  className="w-6 h-6 mb-1 text-gray-900 group-hover:text-green-500"
                  aria-hidden="true"
                />
                <span
                  className="text-sm text-gray-900 group-hover:text-green-500"
                  style={{ fontSize: '10px' }}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
