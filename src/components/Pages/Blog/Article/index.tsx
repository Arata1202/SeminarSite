'use client';

import { Article } from '@/types/microcms';
import '../../../../styles/plugin.css';
import Breadcrumb from '@/components/Common/BreadCrumb';
import ArticleFeature from '@/components/Features/Article';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <MainContainer>
        <Breadcrumb title={article.title} path={`blog/articles/${article.id}`} blog />
        <ArticleFeature article={article} />
      </MainContainer>
    </>
  );
}
