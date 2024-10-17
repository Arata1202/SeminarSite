'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from './index.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} fixed top-0 left-0 w-full bg-white z-30`}>
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
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            ホーム
          </a>
          <a href="/activity" className="text-sm font-semibold leading-6 text-gray-900">
            活動内容
          </a>
          <a href="/member" className="text-sm font-semibold leading-6 text-gray-900">
            組織
          </a>
          <a href="/selection" className="text-sm font-semibold leading-6 text-gray-900">
            選考
          </a>
          {/* <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
            ブログ
          </a> */}
          <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            お問い合わせ
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
                      className="block text-base font-semibold text-gray-900 text-lg"
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
                      className="block text-base font-semibold text-gray-900 text-lg"
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
                      className="block text-base font-semibold text-gray-900 text-lg"
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
                      className="block text-base font-semibold text-gray-900 text-lg"
                    >
                      ▶︎ 選考
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/blog"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/blog';
                      }}
                      className="block text-base font-semibold text-gray-900"
                    >
                      ▶︎ ブログ
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/contact"
                      onClick={(event) => {
                        event.preventDefault();
                        setMobileMenuOpen(false);
                        window.location.href = '/contact';
                      }}
                      className="block text-base font-semibold text-gray-900 text-lg"
                    >
                      ▶︎ お問い合わせ
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
    </header>
  );
}
