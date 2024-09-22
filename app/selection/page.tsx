import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Selection from '@/components/Selection';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '選考 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの選考についてを紹介しています。',
  openGraph: {
    title: '選考 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの選考についてを紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzukiseminar.vercel.app/selection',
  },
};

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <Selection />
    </>
  );
}
