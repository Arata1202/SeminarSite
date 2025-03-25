import { formatDate } from '@/libs/utils';
import styles from './index.module.css';
import { ClockIcon } from '@heroicons/react/24/outline';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return (
    <span className={styles.date}>
      <ClockIcon className="h-5 w-5" aria-hidden="true" />
      {formatDate(date)}
    </span>
  );
}
