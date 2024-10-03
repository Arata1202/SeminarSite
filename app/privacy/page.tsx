import Privacy from '@/components/Privacy';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'プライバシーポリシー - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description:
    '東洋大学経営学部マーケティング学科鈴木ゼミナールのプライバシーポリシーについて紹介しています。',
  openGraph: {
    title: 'プライバシーポリシー - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description:
      '東洋大学経営学部マーケティング学科鈴木ゼミナールのプライバシーポリシーについて紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzuki-seminar.com/privacy',
  },
};

export default async function Page() {
  return (
    <>
      <Privacy />
    </>
  );
}
