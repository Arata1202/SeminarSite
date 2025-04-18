import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const defaultTitle = process.env.NEXT_PUBLIC_BASE_TITLE;

  const title = `ブログ - ${defaultTitle}`;
  const description = `ブログを公開しているページです。`;
  const images = `${defaultUrl}/images/icons/og.jpg`;
  const url = `${defaultUrl}/blog`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: images,
      url: url,
    },
  };
}

export default async function BlogLayout(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
