import { BellAlertIcon } from '@heroicons/react/24/solid';
import { Article } from '@/types/microcms';
import Pagination from '@/components/Common/Pagination';
import ArticleList from '@/components/Common/ArticleList';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';

type Props = {
  articles: Article[];
  current?: number;
  totalCount: number;
};

export default async function BlogPage({ articles, totalCount, current }: Props) {
  return (
    <>
      <div className="MainLayout">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side"
          style={{ marginTop: '50px' }}
        >
          <Breadcrumb title="ブログ" path="blog" />
          <PageTitle title="ブログ" Icon={BellAlertIcon} />
          <ArticleList articles={articles} />
          <Pagination totalCount={totalCount} current={current} />
        </div>
      </div>
    </>
  );
}
