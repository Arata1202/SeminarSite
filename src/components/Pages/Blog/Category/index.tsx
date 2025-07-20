import { FolderOpenIcon } from '@heroicons/react/24/solid';
import { Article, Category } from '@/types/microcms';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

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
        <ScrollAnimation variant="fadeInUp" duration={1.0}>
          <ArticleList articles={articles} />
        </ScrollAnimation>
        <ScrollAnimation variant="fadeInUp" duration={1.0}>
          <Pagination
            totalCount={totalCount}
            current={current}
            basePath={`/categories/${category.id}`}
          />
        </ScrollAnimation>
      </MainContainer>
    </>
  );
}
