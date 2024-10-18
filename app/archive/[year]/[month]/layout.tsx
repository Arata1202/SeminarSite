import React from 'react';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: {
    year: string;
    month: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, month } = params;

  return {
    title: `${year}年${parseInt(
      month,
    )}月 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
    description: `${year}年${parseInt(month)}月の記事一覧です。`,
    openGraph: {
      title: `${year}年${parseInt(
        month,
      )}月 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール`,
      description: `${year}年${parseInt(month)}月の記事一覧です。`,
      images: `/images/icons/1200logo.jpg`,
      url: `https://suzuki-seminar.com/archive/${year}/${month}`,
    },
    robots: {
      index: false,
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
