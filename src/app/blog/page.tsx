import BlogPage from '@/components/Pages/Blog';
import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <BlogPage articles={data.contents} totalCount={data.totalCount} />
    </>
  );
}
