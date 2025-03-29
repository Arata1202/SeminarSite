import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { InstagramIcon } from '@/components/Common/Elements/SocialIcon';

export const DESCRIPTION =
  '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。';

export const APP_LOGO = [{ path: 'logo.jpeg', alt: 'ロゴ' }];

export const HEADER_MENU = [
  { name: 'ホーム', href: '/' },
  { name: '活動内容', href: '/activity' },
  { name: '組織', href: '/member' },
  { name: '選考', href: '/selection' },
  { name: 'ブログ', href: '/blog' },
  {
    name: 'インスタグラム',
    href: 'https://www.instagram.com/szk_seminar/?igsh=MWt5M3Bqb2Q3ZHR6bw%3D%3D',
    target: '_blank',
    icon: ArrowTopRightOnSquareIcon,
  },
];

export const FOOTER_MENU = {
  about: [
    { name: '組織', href: '/member' },
    { name: '活動内容', href: '/activity' },
    { name: 'ブログ', href: '/blog' },
  ],
  selection: [{ name: '選考', href: '/selection' }],
  policy: [
    { name: 'プライバシーポリシー', href: '/privacy' },
    { name: '免責事項', href: '/disclaimer' },
    { name: '著作権', href: '/copyright' },
    { name: 'リンク', href: '/link' },
  ],
  contact: [{ name: 'お問い合わせ', href: '/contact' }],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/szk_seminar/?igsh=MWt5M3Bqb2Q3ZHR6bw%3D%3D',
      icon: InstagramIcon,
    },
  ],
};

export const COPYRIGHT =
  'Copyright © 2024 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール All Rights Reserved.';
