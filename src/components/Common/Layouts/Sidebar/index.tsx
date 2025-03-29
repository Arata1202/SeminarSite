'use client';

import styles from './index.module.css';
import { useExtractHeadings } from '@/hooks/useExtractHeadings';
import TableOfContents from '../../TableOfContent';
import Category from './Elements/Category';

type Props = {
  contentBlocks?: { rich_text?: string }[];
  sidebar?: boolean;
};

export default function Sidebar({ contentBlocks = [], sidebar = false }: Props) {
  const headings = useExtractHeadings(contentBlocks);

  return (
    <div className={`${sidebar && styles.container} lg:col-span-1 lg:w-full`}>
      <Category />
      {headings.length > 0 && (
        <div className={`${styles.pc} ${styles.sidebar}`}>
          <TableOfContents headings={headings} sidebar={true} />
        </div>
      )}
    </div>
  );
}
