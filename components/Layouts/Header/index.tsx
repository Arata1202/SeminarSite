'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUpOnSquareIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import styles from './index.module.css';
import { useA2HS } from '@/hooks/A2hs';
import { isAndroid, isIOS } from 'react-device-detect';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [, promptToInstall] = useA2HS({
    onAccepted: () => {
      console.log('ホーム画面に追加が受け入れられました');
    },
    onDismissed: () => {
      console.log('ホーム画面に追加が拒否されました');
    },
  });

  const isPWA =
    typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches;

  return (
    <header className={`${styles.header} fixed top-0 left-0 w-full bg-white z-30`}>
      {(isAndroid || isIOS) && !isPWA && (
        <div
          className="flex justify-between"
          style={{ backgroundColor: '#a3a4a4', padding: '10px 0.4rem 10px 0.4rem' }}
        >
          <p className="text-white text-sm">ホーム画面にインストールできます</p>
          {isAndroid ? (
            <button
              onClick={promptToInstall}
              className="bg-blue-400 text-white text-sm rounded-full px-1"
              style={{ backgroundColor: '#3597e1' }}
            >
              インストール
            </button>
          ) : isIOS ? (
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-400 text-white text-sm rounded-full px-1"
              style={{ backgroundColor: '#3597e1' }}
            >
              インストール
            </button>
          ) : null}
        </div>
      )}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <a href="/" className="-m-1.5 p-1.5 hover:scale-110 transition-transform">
          <span className="sr-only">Your Company</span>
          <img alt="" src="/images/icons/kan_logo.jpeg" className="h-8 w-auto" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
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
          {/* <Popover className="relative">
            {({ open, close }) => (
              <>
                <Popover.Button className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-500 focus:outline-none">
                  <FolderIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  Product
                  <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {products.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={(event) => {
                            event.preventDefault();
                            close();
                            window.location.href = product.href;
                          }}
                        >
                          {product.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover> */}
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
            {/* Dialog.Overlay の代わりに div タグを使用 */}
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
            <Dialog.Panel className="fixed inset-y-0 right-0 flex max-w-xs w-full bg-white shadow-xl">
              <div className="flex w-full flex-col p-5">
                <button
                  type="button"
                  className="-ml-2 flex items-center justify-end p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
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
                  {/* <li>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button className="flex items-center text-base font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none">
                            <FolderIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                            Product
                            <ChevronDownIcon
                              className="ml-1 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {products.map((product) => (
                                  <a
                                    key={product.name}
                                    href={product.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      setMobileMenuOpen(false);
                                      window.location.href = product.href;
                                    }}
                                  >
                                    {product.name}
                                  </a>
                                ))}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </li> */}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <DevicePhoneMobileIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-green-700"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        最新情報を逃すな！
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 text-left">
                          ホーム画面にインストールできます。
                          <br />
                          <br />
                          <div className="text-left flex">
                            画面下部の
                            <div className="flex">
                              「シェアアイコン
                              <ArrowUpOnSquareIcon aria-hidden="true" className="h-4 w-" />
                              」をタップして
                            </div>
                          </div>
                          「ホーム画面に追加」を選択してください。
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
