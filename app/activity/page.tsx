import Activity from '@/components/Fixed/Activity';
import { isAndroid, isIOS } from 'react-device-detect';

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
  const isPWA =
    typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches;
  return (
    <>
      <div
        style={{ padding: '24px' }}
        className={`${(isAndroid || isIOS) && !isPWA ? 'margin-top-35' : 'margin-top-0'}`}
      >
        <Activity />
      </div>
    </>
  );
}
