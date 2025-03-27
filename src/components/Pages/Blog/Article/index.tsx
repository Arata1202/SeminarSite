'use client';

import { Article } from '@/types/microcms';
import '../../../../styles/plugin.css';
import Breadcrumb from '@/components/Common/BreadCrumb';
import ArticleFeature from '@/components/Features/Article';

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <div className="MainLayout">
        <div
          className="main_side top_title mx-auto max-w-7xl px-6 text-center lg:px-8"
          style={{ marginTop: '80px' }}
        >
          <Breadcrumb title={article.title} path={`blog/articles/${article.id}`} blog />
          <ArticleFeature article={article} />
        </div>
      </div>
    </>
  );
}
