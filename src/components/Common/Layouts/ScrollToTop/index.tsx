'use client';

import { ChevronDoubleUpIcon } from '@heroicons/react/20/solid';
import styles from './index.module.css';

export default function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} fixed z-50 flex items-center justify-center shadow hover:text-green-500 border border-gray-300 bg-white`}
    >
      <ChevronDoubleUpIcon className={styles.icon} />
    </button>
  );
}
