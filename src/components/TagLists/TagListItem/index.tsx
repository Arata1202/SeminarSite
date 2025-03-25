import { Category } from '@/types/microcms';
import styles from './index.module.css';
import Link from 'next/link';

type Props = {
  tag: Category;
  hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link href={`/blog/category/${tag.id}`} className={styles.tag}>
        {tag.name}
      </Link>
    );
  }
  return <span className={styles.tag}>{tag.name}</span>;
}
