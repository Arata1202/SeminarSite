import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';

type Props = {
  params: Promise<{
    current: string;
  }>;
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
    offset: LIMIT * (current - 1),
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} />
    </>
  );
}
