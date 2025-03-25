import Privacy from '@/components/Fixed/Privacy';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'プライバシーポリシー - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description:
    '東洋大学経営学部マーケティング学科鈴木ゼミナールのプライバシーポリシーについて紹介しています。',
  openGraph: {
    title: 'プライバシーポリシー - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description:
      '東洋大学経営学部マーケティング学科鈴木ゼミナールのプライバシーポリシーについて紹介しています。',
    images: '/images/icons/og.jpg',
    url: 'https://suzuki-seminar.com/privacy',
  },
};

export default async function Page() {
  return (
    <>
      <div className="MainLayout">
        <Privacy />
      </div>
    </>
  );
}
