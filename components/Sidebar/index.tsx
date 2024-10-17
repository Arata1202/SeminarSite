'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SearchField from '../SearchField';
import styles from './index.module.css';

export default function Sidebar() {
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
      </div>
    </div>
  );
}
