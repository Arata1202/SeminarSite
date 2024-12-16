'use client';

import { Fragment, useState } from 'react';
import styles from './index.module.css';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} fixed top-0 left-0 w-full z-50 bg-white`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5 hover:scale-110 transition-transform">
          <span className="sr-only">Your Company</span>
          <img alt="" src="/images/head/1.png" className="w-auto" style={{ height: '45px' }} />
        </a>
        <div className="flex lg:hidden">
          {mobileMenuOpen ? (
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close main menu</span>
              <XMarkIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
            </button>
          ) : (
            <div className="flex">
              <button
                type="button"
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ml-1`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <div className="hidden lg:flex lg:gap-x-12 font-bold">
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500"
          >
            ホーム
          </a>
          <a
            href="/activity"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500"
          >
            活動内容
          </a>
          <a
            href="/member"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500"
          >
            組織
          </a>
          <a
            href="/selection"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500"
          >
            選考
          </a>
          <a
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500"
          >
            ブログ
          </a>
          <a
            href="https://www.instagram.com/szk_seminar/?igsh=MWt5M3Bqb2Q3ZHR6bw%3D%3D"
            target="_blank"
            className="flex text-sm font-semibold leading-6 text-gray-900 hover:text-green-500"
          >
            インスタグラム
            <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1" aria-hidden="true" />
          </a>
        </div>
      </nav>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative lg:hidden z-50" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className={`fixed inset-y-0 right-0 flex max-w-xs w-full shadow-xl  bg-white`}
            >
              <div className="flex w-full flex-col p-5">
                <button
                  type="button"
                  className="-ml-2 flex items-center justify-end p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className={`h-6 w-6" aria-hidden="true text-gray-700`} />
                  <span className="sr-only">Close menu</span>
                </button>
                <div
                  className="text-white text-center py-2 text-xl font-bold"
                  style={{ backgroundColor: '#017247' }}
                >
                  Menu
                </div>
                <ul className="mt-5 space-y-6">
                  <li>
                    <a
                      href="/"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/';
                      }}
                      className="block text-base font-semibold text-gray-900 text-lg hover:text-green-500"
                    >
                      ▶︎ ホーム
                    </a>
                  </li>
                  <li>
                    <a
                      href="/activity"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/activity';
                      }}
                      className="block text-base font-semibold text-gray-900 text-lg hover:text-green-500"
                    >
                      ▶︎ 活動内容
                    </a>
                  </li>
                  <li>
                    <a
                      href="/member"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/member';
                      }}
                      className="block text-base font-semibold text-gray-900 text-lg hover:text-green-500"
                    >
                      ▶︎ 組織
                    </a>
                  </li>
                  <li>
                    <a
                      href="/selection"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/selection';
                      }}
                      className="block text-base font-semibold text-gray-900 text-lg hover:text-green-500"
                    >
                      ▶︎ 選考
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/blog';
                      }}
                      className="block text-base font-semibold text-gray-900 hover:text-green-500"
                    >
                      ▶︎ ブログ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/szk_seminar/?igsh=MWt5M3Bqb2Q3ZHR6bw%3D%3D"
                      target="_blank"
                      className="flex block text-base font-semibold text-gray-900 text-lg hover:text-green-500"
                    >
                      ▶︎ インスタグラム
                      <ArrowTopRightOnSquareIcon
                        className="h-5 w-5 ml-1"
                        style={{ marginTop: '2px' }}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
