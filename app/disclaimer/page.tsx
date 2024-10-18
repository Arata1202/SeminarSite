import Disclaimer from '@/components/Fixed/Disclaimer';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '免責事項 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの免責事項について紹介しています。',
  openGraph: {
    title: '免責事項 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description:
      '東洋大学経営学部マーケティング学科鈴木ゼミナールの免責事項について紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzuki-seminar.com/disclaimer',
  },
};

export default async function Page() {
  return (
    <>
      <div style={{ padding: '24px' }}>
        <Disclaimer />
      </div>
    </>
  );
}
