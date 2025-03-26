import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';
import BlogPage from '@/components/Pages/Blog';

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
    fields: 'id,title,description,thumbnail,publishedAt,updatedAt',
  });
  return (
    <>
      <BlogPage articles={data.contents} totalCount={data.totalCount} />
    </>
  );
}
