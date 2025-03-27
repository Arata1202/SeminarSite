'use client';

import { ClockIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/utils/formatDate';
import styles from './index.module.css';

type Props = {
  date: string;
  updatedAt?: boolean;
};

export default function SingleDate({ date, updatedAt = false }: Props) {
  return (
    <>
      <span className={`${styles.date} ${updatedAt && styles.updatedAt}`}>
        {updatedAt ? <ArrowPathIcon className="h-5 w-5" /> : <ClockIcon className="h-5 w-5" />}
        {formatDate(date)}
      </span>
    </>
  );
}
