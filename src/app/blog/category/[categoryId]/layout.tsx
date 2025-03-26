import { Metadata } from 'next';
import { getCategory } from '@/libs/microcms';

type Props = {
  children: React.ReactNode;
  params: Promise<{
    categoryId: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const category = await getCategory(params.categoryId);

  const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const defaultTitle = process.env.NEXT_PUBLIC_BASE_TITLE;

  const title = `${category.name} - ${defaultTitle}`;
  const description = `${category.name}について紹介するカテゴリーです。`;
  const images = `${defaultUrl}/images/icons/og.jpg`;
  const url = `${defaultUrl}/blog/category/${category.id}`;

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

export default async function CategoryLayout(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
