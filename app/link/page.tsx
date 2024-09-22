import Link from '@/components/Link';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'リンク - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールのリンクについて紹介しています。',
  openGraph: {
    title: 'リンク - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールのリンクについて紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzukiseminar.vercel.app/link',
  },
};

export default async function Page() {
  return (
    <>
      <Link />
    </>
  );
}
