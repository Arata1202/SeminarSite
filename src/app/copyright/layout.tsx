import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const defaultTitle = process.env.NEXT_PUBLIC_BASE_TITLE;

  const title = `著作権 - ${defaultTitle}`;
  const description = `東洋大学経営学部マーケティング学科鈴木ゼミナールの著作権について紹介しています。`;
  const images = `${defaultUrl}/images/icons/og.jpg`;
  const url = `${defaultUrl}/copyright`;

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

export default async function CopyrightLayout(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
