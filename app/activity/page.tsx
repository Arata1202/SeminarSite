import Activity from '@/components/Activity';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '活動内容 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの活動内容を紹介しています。',
  openGraph: {
    title: '活動内容 - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの活動内容を紹介しています。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzuki-seminar.com/activity',
  },
};

export default async function Page() {
  return (
    <>
      <Activity />
    </>
  );
}
