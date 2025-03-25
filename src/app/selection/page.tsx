import Selection from '@/components/Fixed/Selection';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '選考 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの選考についてを紹介しています。',
  openGraph: {
    title: '選考 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの選考についてを紹介しています。',
    images: '/images/icons/og.jpg',
    url: 'https://suzuki-seminar.com/selection',
  },
};

export default async function Page() {
  return (
    <>
      <div className="MainLayout">
        <Selection />
      </div>
    </>
  );
}
