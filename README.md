<div id="top"><h1>鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール</h1></div>

## 使用技術

<!-- シールド一覧 -->
<p style="display: inline">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Typescript-000000.svg?logo=typescript&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Tailwind CSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-MicroCMS-000000.svg?logo=&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Vercel-000000.svg?logo=vercel&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Github Actions-000000.svg?logo=githubactions&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Docker-000000.svg?logo=docker&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Nginx-000000.svg?logo=nginx&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Canva-000000.svg?logo=canva&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Google Analytics-000000.svg?logo=googleanalytics&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Google Search Console-000000.svg?logo=googlesearchconsole&style=for-the-badge">
</p>

## 目次

1. [プロジェクトについて](#1-プロジェクトについて)
2. [環境](#2-環境)
3. [ディレクトリ構成](#3-ディレクトリ構成)
4. [開発環境構築](#4-開発環境構築)
5. [プレフィックス](#5-プレフィックス)

## 1. プロジェクトについて

東洋大学経営学部マーケティング学科鈴木ゼミナールの公式ホームページ

  <p align="left">
    <br />
    <a href="https://suzuki-seminar.com/"><strong>鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール »</strong></a>
    <br />
    <br />

<p align="right">(<a href="#top">トップへ</a>)</p>

## 2. 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 主要なパッケージ | バージョン |
| ---------------- | ---------- |
| next             | 15.0.3     |
| react            | 18.3.1     |
| typescript       | 5.6.3      |
| tailwindcss      | 3.4.15     |
| microcms-js-sdk  | 3.1.2      |
| husky            | 9.1.6      |
| eslint           | 9.15.0     |
| prettier         | 3.3.3      |

その他のパッケージのバージョンは`package.json`を参照

<p align="right">(<a href="#top">トップへ</a>)</p>

## 3. ディレクトリ構成

```
❯ tree -a -I "node_modules|.next|.git|.pytest_cache|static" -L 2
.
├── .docker
│   ├── js
│   └── nginx
├── .env
├── .env.example
├── .github
│   └── workflows
├── .gitignore
├── .husky
│   └── pre-commit
├── .prettierignore
├── .prettierrc
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── LICENSE
├── app
│   ├── activity
│   ├── api
│   ├── blog
│   ├── contact
│   ├── copyright
│   ├── disclaimer
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.module.css
│   ├── layout.tsx
│   ├── link
│   ├── member
│   ├── not-found.module.css
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── privacy
│   └── selection
├── components
│   ├── ArticleLists
│   ├── Articles
│   ├── Elements
│   ├── Fixed
│   ├── Layouts
│   ├── Sidebar
│   └── TagLists
├── constants
│   └── index.ts
├── docker-compose.yml
├── eslint.config.mjs
├── libs
│   ├── microcms.ts
│   └── utils.ts
├── next-sitemap.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── images
│   └── robots.txt
├── rss.ts
├── section
│   └── archive.tsx
├── tailwind.config.ts
└── tsconfig.json
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 4. 開発環境構築

### 開発環境の構築と起動

`.env`ファイルを[環境変数一覧](#環境変数一覧)を元に作成

```
MICROCMS_API_KEY=
MICROCMS_SERVICE_DOMAIN=
BASE_URL=
GOOGLE_ANALYTICS_ID=
RECAPTCHA_SECRET_KEY=
EMAIL_TO=
EMAIL_TO2=
EMAIL_FROM=
SMTP_USER=
SMTP_PASS=
```

`.env`ファイルを作成後、以下の方法で開発環境を起動

#### pnpmを使用する場合

```
pnpm install
pnpm run dev
```

#### Dockerを使用する場合

```
docker compose up -d --build
```

### 動作確認

http://localhost:3000 にアクセスできるか確認
アクセスできたら成功

### コンテナの停止

以下のコマンドでコンテナを停止

```
docker compose down
```

### 環境変数一覧

| 変数名                  | 役割                                      |
| ----------------------- | ----------------------------------------- |
| MICROCMS_API_KEY        | MicroCMSのAPIキー                         |
| MICROCMS_SERVICE_DOMAIN | MicroCMSのサービスドメイン（サービスID）  |
| BASE_URL                | 本番環境のベースURL                       |
| GOOGLE_ANALYTICS_ID     | Google AnalyticsのスクリプトID            |
| RECAPTCHA_SECRET_KEY    | Google reCAPTCHAのシークレットキー        |
| EMAIL_TO                | お問い合わせの送信先メールアドレス        |
| EMAIL_TO2               | 2つ目のお問い合わせの送信先メールアドレス |
| EMAIL_FROM              | お問い合わせの送信元メールアドレス        |
| SMTP_USER               | Googleアカウントのメールアドレス          |
| SMTP_PASS               | Googleアカウントのアプリパスワード        |

### コマンド一覧

| 主要なコマンド               | 実行する処理                                     |
| ---------------------------- | ------------------------------------------------ |
| pnpm install                 | `node_modules`のインストール                     |
| pnpm run dev                 | 開発環境の起動                                   |
| pnpm run build               | Next.jsのビルド、サイトマップとRSSフィードの生成 |
| pnpm run start               | ビルド済みNext.jsの起動                          |
| docker compose up -d --build | コンテナのビルドと起動                           |
| docker compose down          | コンテナの停止                                   |

<p align="right">(<a href="#top">トップへ</a>)</p>

## 5. プレフィックス

```
fix: バグ修正
feat: 新機能追加
update: 機能更新
change: 仕様変更
perf: パフォーマンス改善
refactor: コードのリファクタリング
docs: ドキュメントのみの変更
style: コードのフォーマットに関する変更
test: テストコードの変更
revert: 変更の取り消し
chore: その他の変更
```

<p align="right">(<a href="#top">トップへ</a>)</p>
