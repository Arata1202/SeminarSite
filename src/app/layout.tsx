import React from 'react';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import '../styles/globals.css';
import Script from 'next/script';
import ScrollTopButton from '@/components/Layouts/ScrollToTop';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
  openGraph: {
    title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
    images: '/images/icons/og.jpg',
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
  const onesignalAppId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
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
        <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          strategy="afterInteractive"
        />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
          window.OneSignalDeferred = window.OneSignalDeferred || [];
          OneSignalDeferred.push(async function(OneSignal) {
            await OneSignal.init({
              appId: "${onesignalAppId}",
            });
          });
        `}
        </Script>
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
      <body className="text-gray-700" style={{ fontSize: '18px' }}>
        <Header />
        {children}
        <Footer />
        <ScrollTopButton />
        <script async src="//www.instagram.com/embed.js" />
      </body>
    </html>
  );
}
