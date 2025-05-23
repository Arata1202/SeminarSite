import { getList, getCategory } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';
import { CATEGORY_ARR } from '@/constants/category';
import CategoryPage from '@/components/Pages/Blog/Category';

type Props = {
  params: Promise<{
    categoryId: string;
    current: string;
  }>;
};

export const metadata = {
  robots: {
    index: false,
  },
};

export const generateStaticParams = async () => {
  const results = await Promise.all(
    CATEGORY_ARR.map(async (category) => {
      const categoryId = category.id;

      const data = await getList({
        limit: 0,
        fields: '',
        filters: `categories[contains]${categoryId}`,
      });

      const totalCount = data.totalCount;
      const currents = Array.from({ length: totalCount }, (_, i) => i + 1);

      return currents.map((current) => ({
        categoryId,
        current: current.toString(),
      }));
    }),
  );

  return results.flat();
};

export default async function Page(props: Props) {
  const params = await props.params;
  const { categoryId } = params;

  const current = parseInt(params.current as string, 10);

  const data = await getList({
    limit: LIMIT,
    fields: 'id,title,description,thumbnail,publishedAt,updatedAt',
    offset: LIMIT * (current - 1),
    filters: `categories[contains]${categoryId}`,
  });
  const category = await getCategory(params.categoryId, { fields: 'id,name' });

  return (
    <>
      <CategoryPage
        articles={data.contents}
        category={category}
        current={current}
        totalCount={data.totalCount}
      />
    </>
  );
}
