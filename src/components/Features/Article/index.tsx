'use client';

import { Article } from '@/types/microcms';
import styles from './index.module.css';
import '../../../styles/plugin.css';
import { useExtractHeadings } from '@/hooks/useExtractHeadings';
import TableOfContents from '@/components/Common/TableOfContent';
import WebpImage from '@/components/Common/Elements/WebpImage';
import DoubleDate from '@/components/Common/DoubleDate';
import SpeechBubble from './Elements/Plugins/SpeechBubble';
import RichText from './Elements/Plugins/RichText';
import CustomHtml from './Elements/Plugins/CustomHtml';
import WantToRead from './Elements/Plugins/WantToRead';
import TabBox from './Elements/Plugins/TabBox';
import Sidebar from '@/components/Common/Layouts/Sidebar';
import BlogMainContainer from '@/components/Common/Layouts/Container/BlogMainContainer';
import BlogContentContainer from '@/components/Common/Layouts/Container/BlogContentContainer';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

type Props = {
  article: Article;
};

export default function ArticleFeature({ article }: Props) {
  const headings = useExtractHeadings(article.content_blocks);
  return (
    <>
      <BlogMainContainer>
        <BlogContentContainer>
          <ScrollAnimation variant="fadeInLeft" duration={1.0}>
            <h1 className={`${styles.title} mt-5`}>{article.title}</h1>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeInScale" duration={1.0}>
            <WebpImage article={article} />
          </ScrollAnimation>

          <ScrollAnimation variant="fadeInUp" duration={1.0}>
            <DoubleDate article={article} />
          </ScrollAnimation>

          <ScrollAnimation variant="fadeInUp" duration={1.0}>
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
          </ScrollAnimation>

          {headings.length > 0 && (
            <ScrollAnimation variant="slideInFromBottom" duration={1.0}>
              <TableOfContents headings={headings} />
            </ScrollAnimation>
          )}

          <ScrollAnimation variant="fadeInUp" duration={1.0}>
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
          </ScrollAnimation>
        </BlogContentContainer>
        <Sidebar contentBlocks={article.content_blocks} sidebar />
      </BlogMainContainer>
    </>
  );
}
