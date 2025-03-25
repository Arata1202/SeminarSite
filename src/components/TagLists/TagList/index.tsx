import { Category } from '@/types/microcms';
import TagListItem from '../TagListItem';
import styles from './index.module.css';

type Props = {
  categories?: Category[];
  hasLink?: boolean;
};

export default function TagList({ categories, hasLink = true }: Props) {
  if (!categories) {
    return null;
  }
  return (
    <ul className={styles.categories}>
      {categories.map((category) => (
        <li key={category.id}>
          <TagListItem tag={category} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}
