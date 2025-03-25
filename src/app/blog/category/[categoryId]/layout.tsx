import React from 'react';
import { getCategory } from '@/libs/microcms';
import { Metadata } from 'next';

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const tag = await getCategory(params.tagId);

  return {
    title: `${tag.name} - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
    description: `${tag.name}について紹介するカテゴリーです。`,
    openGraph: {
      title: `${tag.name} - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
      description: `${tag.name}について紹介するカテゴリーです。`,
      images: '/images/icons/og.jpg',
      url: `https://suzuki-seminar.com/blog/category/${tag.id}`,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    tagId: string;
  }>;
};

export default async function TagsLayout({ children }: Props) {
  return (
    <div>
      <div className="MainLayout">
        <div>{children}</div>
      </div>
    </div>
  );
}
