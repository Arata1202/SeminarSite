import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';
import Script from 'next/script';
import { url } from 'inspector';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
  openGraph: {
    title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
    images: '/ogp.png',
    url: '',
  },
  alternates: {
    canonical: '',
  },
  icons: {
    icon: '',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <head>
        {/* GoogleAnalytics */}
        <Script async strategy="lazyOnload" src={process.env.GOOGLE_ANALYTICS_ID} />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDPNECEGML', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {/* 共通 OK */}
        <meta name="format-detection" content="email=no,telephone=no,address=no" />
        {/* 共通 ファビコン OK */}
        <link rel="icon" href="" sizes="16x16" type="image/png" />
        <link rel="icon" href="" sizes="32x32" type="image/png" />
        <link rel="icon" href="" sizes="48x48" type="image/png" />
        {/* 共通 Appleアイコン OK */}
        <link rel="apple-touch-icon" href="" />

        {/* 共通 Windows用アイコン OK */}
        <meta name="msapplication-TileImage" content="" />
        <meta name="msapplication-TileColor" content="#E0CBBA" />
        {/* 共通 Twitter用 OK */}
        <meta property="og:type" content="blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:site" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:locale" content="ja_JP" />

        {/* Search Console */}
        {/* <meta name="google-site-verification" content={process.env.SEARCH_CONSOLE_ID} /> */}
      </head>
      <body>
        <Header />
        {/* <Nav tags={tags.contents} /> */}
        <main className={styles.main}>{children}</main>
        <Footer />
        {/* <Script async strategy="afterInteractive" src="//www.instagram.com/embed.js" /> */}
      </body>
    </html>
  );
}
