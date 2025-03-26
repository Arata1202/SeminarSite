import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const defaultTitle = process.env.NEXT_PUBLIC_BASE_TITLE;

  const title = `免責事項 - ${defaultTitle}`;
  const description = `東洋大学経営学部マーケティング学科鈴木ゼミナールの免責事項について紹介しています。`;
  const images = `${defaultUrl}/images/icons/og.jpg`;
  const url = `${defaultUrl}/disclaimer`;

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

export default async function DisclaimerLayout(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
