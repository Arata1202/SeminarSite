import Copyright from '@/components/Copyright';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '著作権 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの著作権について紹介しています。',
  openGraph: {
    title: '著作権 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの著作権について紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzukiseminar.vercel.app/copyright',
  },
  alternates: {
    canonical: '',
  },
};

export default async function Page() {
  return (
    <>
      <Copyright />
    </>
  );
}
