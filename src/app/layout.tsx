import { Metadata } from 'next';
import type { Viewport } from 'next';
import '../styles/globals.css';
import styles from './layout.module.css';
import { DESCRIPTION } from '@/constants/data';
import Header from '@/components/Common/Layouts/Header';
import Footer from '@/components/Common/Layouts/Footer';
import ScrollTopButton from '@/components/Common/Layouts/ScrollToTop';
import GoogleAnalytics from '@/components/ThirdParties/GoogleAnalytics';
import Instagram from '@/components/ThirdParties/Instagram';
import OneSignal from '@/components/ThirdParties/OneSignal';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const defaultTitle = process.env.NEXT_PUBLIC_BASE_TITLE;

  const title = `${defaultTitle}`;
  const description = DESCRIPTION;
  const images = `${defaultUrl}/images/icons/og.jpg`;
  const url = `${defaultUrl}`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: images,
      url: url,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head>
        <meta name="format-detection" content="email=no,telephone=no,address=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/images/icons/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:site_name"
          content="鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール"
        />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body className="text-gray-700">
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <ScrollTopButton />
        <GoogleAnalytics />
        <Instagram />
        <OneSignal />
      </body>
    </html>
  );
}
