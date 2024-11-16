import React from 'react';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `ブログ - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
    description: `ブログを公開しているページです。`,
    openGraph: {
      title: `ブログ - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
      description: `ブログを公開しているページです。`,
      images: `/images/icons/1200logo.jpg`,
      url: `https://suzuki-seminar.com/blog`,
    },
  };
}

export default async function TagsLayout({ children }: Props) {
  return (
    <>
      <>{children}</>
    </>
  );
}
