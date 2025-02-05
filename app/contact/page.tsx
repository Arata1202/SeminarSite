import Contact from '@/components/Fixed/Contact';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'お問い合わせ - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールのお問い合わせフォームです。',
  openGraph: {
    title: 'お問い合わせ - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールのお問い合わせフォームです。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzuki-seminar.com/contact',
  },
};

export default async function Page() {
  return (
    <>
      <div className="MainLayout">
        <Contact />
      </div>
    </>
  );
}
