import Link from 'next/link';
import { Tag } from '@/libs/microcms';
import styles from './index.module.css';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <a href={`/tags/${tag.id}`} className={styles.tag}>
        #{tag.name}
      </a>
    );
  }
  return <span className={styles.tag}>#{tag.name}</span>;
}
