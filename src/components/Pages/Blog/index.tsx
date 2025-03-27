import { BellAlertIcon } from '@heroicons/react/24/solid';
import { Article } from '@/types/microcms';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

type Props = {
  articles: Article[];
  current?: number;
  totalCount: number;
};

export default async function BlogPage({ articles, totalCount, current }: Props) {
  return (
    <>
      <MainContainer>
        <Breadcrumb title="ブログ" path="blog" />
        <PageTitle title="ブログ" Icon={BellAlertIcon} />
        <ArticleList articles={articles} />
        <Pagination totalCount={totalCount} current={current} />
      </MainContainer>
    </>
  );
}
