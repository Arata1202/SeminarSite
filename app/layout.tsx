import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import styles from './layout.module.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
  openGraph: {
    title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
    images: '/images/icons/1200logo.jpg',
    url: 'https://suzuki-seminar.com',
  },
  icons: {
    icon: '/images/icons/favicon.ico',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head>
        <Script async strategy="lazyOnload" src={process.env.GOOGLE_ANALYTICS_ID} />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S1SHC8JCBV', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta name="format-detection" content="email=no,telephone=no,address=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/images/icons/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="" />
        <meta name="twitter:site" content="" /> */}
        <meta
          property="og:site_name"
          content="鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール"
        />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <script async src="//www.instagram.com/embed.js" />
      </body>
    </html>
  );
}
