import { FolderOpenIcon } from '@heroicons/react/24/solid';
import { Article, Category } from '@/types/microcms';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

type Props = {
  articles: Article[];
  current?: number;
  totalCount: number;
  category: Category;
};

export default async function CategoryPage({ articles, totalCount, category, current }: Props) {
  return (
    <>
      <MainContainer>
        <Breadcrumb title={category.name} path={`blog/category/${category.id}`} blog />
        <PageTitle title={category.name} Icon={FolderOpenIcon} />
        <ArticleList articles={articles} />
        <Pagination
          totalCount={totalCount}
          current={current}
          basePath={`/categories/${category.id}`}
        />
      </MainContainer>
    </>
  );
}
