import Member from '@/components/Fixed/Member';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '組織 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの組織についてを紹介しています。',
  openGraph: {
    title: '組織 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの組織についてを紹介しています。',
    images: '/images/icons/og.jpg',
    url: 'https://suzuki-seminar.com/member',
  },
};

export default async function Page() {
  return (
    <>
      <div className="MainLayout">
        <Member />
      </div>
    </>
  );
}
