const { createClient } = require('microcms-js-sdk');
const RSS = require('rss');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

const getAllContents = async (endpoint) => {
  let allContents = [];
  let offset = 0;
  const limit = 100;

  try {
    while (true) {
      const res = await client.getList({
        endpoint,
        queries: { offset, limit, fields: 'id,title,description,publishedAt,tags,thumbnail' },
      });
      if (res.contents.length === 0) break;
      allContents = allContents.concat(res.contents);
      offset += limit;
    }
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
  }

  return allContents;
};

const generateRSSFeed = async () => {
  const feed = new RSS({
    title: '鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページです。',
    feed_url: 'https://suzuki-seminar.com/rss.xml',
    site_url: 'https://suzuki-seminar.com',
    language: 'ja',
    ttl: 60,
    lastBuildDate: new Date().toUTCString(),
  });

  const articles = await getAllContents('blog');

  articles.forEach((article) => {
    if (
      article &&
      article.title &&
      article.description &&
      article.publishedAt &&
      article.thumbnail
    ) {
      feed.item({
        title: article.title,
        description: article.description,
        url: `https://suzuki-seminar.com/articles/${article.id}`,
        // author: '鈴木ゼミ',
        date: article.publishedAt,
        categories: article.tags ? article.tags.map((tag) => tag.name) : [],
        enclosure: {
          url: article.thumbnail.url,
          type: 'image/jpg',
        },
      });
    }
  });

  const xml = feed.xml({ indent: true });

  try {
    const rssPath = path.join(__dirname, 'public', 'rss.xml');
    fs.mkdirSync(path.dirname(rssPath), { recursive: true });
    fs.writeFileSync(rssPath, xml);
    console.log('RSS feed generated successfully');
  } catch (error) {
    console.error('Error writing RSS feed to file:', error);
  }
};

generateRSSFeed().catch((error) => {
  console.error('Error generating RSS feed:', error);
});
