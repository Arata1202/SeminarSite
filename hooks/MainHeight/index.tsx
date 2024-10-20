'use client';

import React from 'react';
import styles from './index.module.css';
import { isAndroid, isIOS } from 'react-device-detect';

type Props = {
  children: React.ReactNode;
};

export default function MainHeight({ children }: Props) {
  const isPWA =
    typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches;

  return (
    <main
      className={styles.main}
      style={{ marginTop: (isAndroid || isIOS) && !isPWA ? '35px' : '0' }}
    >
      {children}
    </main>
  );
}
