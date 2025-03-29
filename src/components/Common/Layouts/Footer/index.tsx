'use client';

import Link from 'next/link';
import styles from './index.module.css';
import { COPYRIGHT, FOOTER_MENU, APP_LOGO } from '@/constants/data';

export default function Footer() {
  return (
    <footer className={`${styles.footer} w-full bg-white`}>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className={styles.justify}>
              {APP_LOGO.map((item) => (
                <img
                  key={item.path}
                  src={`/images/icons/${item.path}`}
                  alt={item.alt}
                  className="h-7 hover:scale-110 transition-transform cursor-pointer"
                />
              ))}
            </Link>
            <div className={`${styles.justify} flex space-x-6`}>
              {FOOTER_MENU.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="blank"
                  className="hover:text-green-500"
                >
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className={styles.align}>
                <div className="text-sm font-semibold leading-6">鈴木ゼミについて</div>
                <ul className="mt-6 space-y-4">
                  {FOOTER_MENU.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-green-500">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.align} mt-10 md:mt-0`}>
                <div className="text-sm font-semibold leading-6">選考</div>
                <ul className="mt-6 space-y-4">
                  {FOOTER_MENU.selection.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-green-500">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className={`${styles.align} sm:text-left`}>
                <div className="text-sm font-semibold leading-6">利用規約</div>
                <ul className="mt-6 space-y-4">
                  {FOOTER_MENU.policy.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-green-500">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.align} mt-10 md:mt-0`}>
                <div className="text-sm font-semibold leading-6">お問い合わせ</div>
                <ul className="mt-6 space-y-4">
                  {FOOTER_MENU.contact.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-green-500">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-300 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
