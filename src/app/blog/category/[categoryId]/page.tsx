import { getList } from '@/libs/microcms';
import { getCategory } from '@/libs/microcms';
import { LIMIT } from '@/constants/limit';
import { CATEGORY_ARR } from '@/constants/category';
import CategoryPage from '@/components/Pages/Blog/Category';

type Props = {
  params: Promise<{
    categoryId: string;
  }>;
};

export const generateStaticParams = async () => {
  return CATEGORY_ARR.map((category) => ({ categoryId: category.id }));
};

export default async function Page(props: Props) {
  const params = await props.params;
  const category = await getCategory(params.categoryId);
  const { categoryId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `categories[contains]${categoryId}`,
  });
  return (
    <>
      <CategoryPage articles={data.contents} totalCount={data.totalCount} category={category} />
    </>
  );
}
