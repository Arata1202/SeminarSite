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

export default async function Page(props: Props) {
  const params = await props.params;
  const data = await getDetail(params.slug);

  return (
    <div className="MainLayout">
      <Article data={data} />
    </div>
  );
}
