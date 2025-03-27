'use client';

import { ContentBlock } from '@/types/microcms';
import styles from './index.module.css';

type Props = {
  block: ContentBlock;
};

export default function RichText({ block }: Props) {
  return (
    <>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: block.rich_text!.replace(/<img/g, '<img loading="lazy"'),
        }}
      />
    </>
  );
}
