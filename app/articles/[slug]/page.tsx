import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Articles/Article';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title + ' - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: data.description,
    openGraph: {
      title: data.title + ' - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
      description: data.description,
      images: [data?.thumbnail?.url || ''],
      url: 'https://suzuki-seminar.com/articles/' + data.id,
    },
  };
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return (
    <div style={{ padding: '24px' }}>
      <Article data={data} />
    </div>
  );
}
