'use client';

import { Article } from '@/types/microcms';
import styles from './index.module.css';
import '../../../../styles/plugin.css';
import { useExtractHeadings } from '@/hooks/useExtractHeadings';
import TableOfContents from '../../../Common/TableOfContent';
import Breadcrumb from '@/components/Common/BreadCrumb';
import WebpImage from '@/components/Common/Elements/WebpImage';
import DoubleDate from '@/components/Common/DoubleDate';
import SpeechBubble from './Elements/Plugins/SpeechBubble';
import RichText from './Elements/Plugins/RichText';
import CustomHtml from './Elements/Plugins/CustomHtml';
import WantToRead from './Elements/Plugins/WantToRead';
import TabBox from './Elements/Plugins/TabBox';
import Sidebar from '@/components/Common/Layouts/Sidebar';

type Props = {
  article: Article;
};

export default function ArticleComponent({ article }: Props) {
  const headings = useExtractHeadings(article.content_blocks);
  return (
    <>
      <div className="MainLayout">
        <div
          className="main_side top_title mx-auto max-w-7xl px-6 text-center lg:px-8"
          style={{ marginTop: '80px' }}
        >
          <Breadcrumb title={article.title} path={`blog/articles/${article.id}`} blog />
          <div className="mx-auto max-w-7xl main_side">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              <div className="lg:col-span-2">
                <h1 className={`${styles.title} mt-5`}>{article.title}</h1>
                <WebpImage article={article} />
                <DoubleDate article={article} />
                <div className={styles.content}>
                  {article.introduction_blocks.map((block, index) => (
                    <div key={index}>
                      {block.bubble_text && block.bubble_image && <SpeechBubble block={block} />}
                      {block.rich_text && <RichText block={block} />}
                      {block.custom_html && <CustomHtml block={block} />}
                      {block.article_link && typeof block.article_link !== 'string' && (
                        <WantToRead block={block} />
                      )}
                      {block.box_merit && <TabBox block={block} merit={true} />}
                      {block.box_demerit && <TabBox block={block} demerit={true} />}
                      {block.box_point && <TabBox block={block} point={true} />}
                      {block.box_common && <TabBox block={block} common={true} />}
                    </div>
                  ))}
                </div>
                <div className="w-1/2 tableOfContent">
                  {headings.length > 0 && <TableOfContents headings={headings} />}
                </div>
                <div className={styles.content}>
                  {article.content_blocks.map((block, index) => (
                    <div key={index}>
                      {block.bubble_text && block.bubble_image && <SpeechBubble block={block} />}
                      {block.rich_text && <RichText block={block} />}
                      {block.custom_html && <CustomHtml block={block} />}
                      {block.article_link && typeof block.article_link !== 'string' && (
                        <WantToRead block={block} />
                      )}
                      {block.box_merit && <TabBox block={block} merit={true} />}
                      {block.box_demerit && <TabBox block={block} demerit={true} />}
                      {block.box_point && <TabBox block={block} point={true} />}
                      {block.box_common && <TabBox block={block} common={true} />}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: '72px' }} className="ArticleSidebar">
                <Sidebar contentBlocks={article.content_blocks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
