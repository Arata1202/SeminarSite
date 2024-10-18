import React from 'react';
import { getTag } from '@/libs/microcms';
import { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = await getTag(params.tagId);

  return {
    title: `${tag.name} - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
    description: `${tag.name}について紹介するカテゴリーです。`,
    openGraph: {
      title: `${tag.name} - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
      description: `${tag.name}について紹介するカテゴリーです。`,
      images: '/images/icons/1200logo.jpg',
      url: `https://suzuki-seminar.com/category/${tag.id}`,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children }: Props) {
  return (
    <div>
      <div style={{ padding: '24px' }}>
        <div>{children}</div>
      </div>
    </div>
  );
}
