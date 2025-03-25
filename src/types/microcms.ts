import type { MicroCMSImage, MicroCMSDate, MicroCMSContentId } from 'microcms-js-sdk';

export type Blog = {
  title: string;
  description: string;
  content: string;
  content_blocks: ContentBlock[];
  introduction_blocks: IntroductionBlock[];
  thumbnail: MicroCMSImage;
  categories: Category[];
  related_articles?: RelatedArticle[];
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type IntroductionBlock = {
  rich_text?: string;
  custom_html?: string;
  article_link?: string;
  bubble_image?: MicroCMSImage;
  bubble_name?: string;
  bubble_text?: string;
  bubble_isRight?: boolean;
  box_merit?: string;
  box_demerit?: string;
  box_point?: string;
  box_common?: string;
};

export type ContentBlock = {
  rich_text?: string;
  custom_html?: string;
  article_link?: string;
  bubble_image?: MicroCMSImage;
  bubble_name?: string;
  bubble_text?: string;
  bubble_isRight?: boolean;
  box_merit?: string;
  box_demerit?: string;
  box_point?: string;
  box_common?: string;
};

export type RelatedArticle = {
  article_link?: string;
};
