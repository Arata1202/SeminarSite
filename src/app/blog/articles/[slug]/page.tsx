import { Metadata } from 'next';
import { getDetail, getAllLists } from '@/libs/microcms';
import Article from '@/components/Articles/Article';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () => {
  const data = await getAllLists();

  return data.map((slug) => ({ slug: slug.id }));
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const data = await getDetail(params.slug);

  return {
    title: data.title + ' - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: data.description,
    openGraph: {
      title: data.title + ' - 鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
      description: data.description,
      images: [data?.thumbnail?.url || ''],
      url: 'https://suzuki-seminar.com/blog/articles/' + data.id,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const data = await getDetail(params.slug);

  return (
    <div className="MainLayout">
      <Article data={data} />
    </div>
  );
}
