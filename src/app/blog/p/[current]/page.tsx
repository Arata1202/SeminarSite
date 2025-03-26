import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';
import BlogPage from '@/components/Pages/Blog';

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export const metadata = {
  robots: {
    index: false,
  },
};

export const generateStaticParams = async () => {
  const data = await getList({
    limit: 0,
    fields: '',
  });

  const totalCount = data.totalCount;
  const currents = Array.from({ length: totalCount }, (_, i) => i + 1);

  return currents.map((current) => ({ current: current.toString() }));
};

export default async function Page(props: Props) {
  const params = await props.params;
  const current = parseInt(params.current as string, 10);

  const data = await getList({
    limit: LIMIT,
    fields: 'id,title,description,thumbnail,publishedAt,updatedAt',
    offset: LIMIT * (current - 1),
  });

  return (
    <>
      <BlogPage articles={data.contents} totalCount={data.totalCount} current={current} />
    </>
  );
}
