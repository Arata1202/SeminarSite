import styles from './index.module.css';
import { LIMIT } from '@/constants/limit';
import Link from 'next/link';
import ScrollAnimation from '../Animation/ScrollAnimation';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1);
  return (
    <ScrollAnimation variant="staggerContainer" duration={1.0}>
      <ul className={styles.container}>
        {pages.map((p) => (
          <ScrollAnimation key={p} variant="staggerItem" duration={1.0}>
            <li className={styles.list}>
              {current !== p ? (
                <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')} className={styles.item}>
                  {p}
                </Link>
              ) : (
                <span className={`${styles.item} ${styles.current}`}>{p}</span>
              )}
            </li>
          </ScrollAnimation>
        ))}
      </ul>
    </ScrollAnimation>
  );
}
