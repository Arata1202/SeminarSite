<div id="top"></div>

<div align="right">

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Arata1202/SeminarSite/vercel_deploy.yml)
![GitHub License](https://img.shields.io/github/license/Arata1202/SeminarSite)

</div>

![title](/.docs/readme/images/title.png)

## 目次

- [鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール](#top)
  - [目次](#目次)
  - [リンク一覧](#リンク一覧)
  - [主な機能一覧](#主な機能一覧)
  - [使用技術](#使用技術)
  - [環境構築](#環境構築)
    - [リポジトリのクローン](#リポジトリのクローン)
    - [pnpmの場合](#pnpmの場合)
      - [開発環境](#開発環境)
      - [本番環境](#本番環境)
    - [Dockerの場合](#Dockerの場合)
  - [ディレクトリ構成](#ディレクトリ構成)
  - [Gitの運用](#Gitの運用)
    - [ブランチ](#ブランチ)
    - [コミットメッセージの記法](#コミットメッセージの記法)

## リンク一覧

<ul><li><a href="https://suzuki-seminar.com/">鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール</a></li></ul>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 主な機能一覧

| 最新記事ページ                     | 　カテゴリーページ                               |
| ---------------------------------- | ------------------------------------------------ |
| ![23](/.docs/readme/images/23.png) | ![24](/.docs/readme/images/24.png)               |
| 最新記事を一覧表示するページです。 | 特定のカテゴリーの記事を一覧表示するページです。 |

| 検索ページ                                         | 　アーカイブページ                         |
| -------------------------------------------------- | ------------------------------------------ |
| ![25](/.docs/readme/images/25.png)                 | ![26](/.docs/readme/images/26.png)         |
| 検索したキーワードの記事を一覧表示するページです。 | 特定の年月の記事を一覧表示するページです。 |

| 記事ページ                         | 　お問い合わせページ                 |
| ---------------------------------- | ------------------------------------ |
| ![27](/.docs/readme/images/27.png) | ![28](/.docs/readme/images/28.png)   |
| 記事を表示するページです。         | 管理者にお問い合わせするページです。 |

| サイトマップ                            | 　RSS                              |
| --------------------------------------- | ---------------------------------- |
| ![29](/.docs/readme/images/29.png)      | ![30](/.docs/readme/images/30.png) |
| XML形式のサイトマップを公開しています。 | XML形式のRSSを公開しています。     |

<p align="right">(<a href="#top">トップへ</a>)</p>

## 使用技術

| Category          | Technology Stack                     |
| ----------------- | ------------------------------------ |
| Frontend          | Next.js, TypeScript, Tailwind CSS    |
| Backend           | MicroCMS                             |
| Infrastructure    | Vercel                               |
| Environment setup | Docker, Nginx                        |
| CI/CD             | GitHub Actions                       |
| Design            | Canva                                |
| Google            | Analytics, Search Console, reCAPTCHA |
| etc.              | PWA, OneSignal, Pipedream, Sentry    |

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境構築

### リポジトリのクローン

```
# リポジトリのクローン
git clone git@github.com:Arata1202/SeminarSite.git
cd SeminarSite

# .env.exampleから.envを作成
mv .env.example .env

# .envの編集
vi .env
```

### pnpmの場合

#### 開発環境

```
# node_modulesのインストール
pnpm install

# 開発サーバーの立ち上げ
pnpm dev

# ブラウザにアクセス
http:localhost:3000
```

#### 本番環境

```
# node_modulesのインストール
pnpm install

# Next.jsのビルド
pnpm build

# ビルドしたNext.jsの起動
pnpm start

# ブラウザにアクセス
http:localhost:3000
```

### Dockerの場合

```
# コンテナのビルドと起動
docker compose up -d --build

# ブラウザにアクセス
http:localhost:3000

# コンテナの停止
docker compose down
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

```
❯ tree -a -I "node_modules|.next|.git|.pytest_cache|static" -L 2
.
├── .docker
│   ├── js
│   └── nginx
├── .dockerignore
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
│   ├── manifest.json
│   ├── activity
│   ├── api
│   ├── blog
│   ├── contact
│   ├── copyright
│   ├── disclaimer
│   ├── favicon.ico
│   ├── global-error.tsx
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
├── instrumentation.ts
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
│   ├── OneSignalSDKWorker.js
│   └── robots.txt
├── rss.ts
├── section
│   └── archive.tsx
├── sentry.client.config.ts
├── sentry.edge.config.ts
├── sentry.server.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## Gitの運用

### ブランチ

GitHub Flowを使用する。
masterとfeatureブランチで運用する。

| ブランチ名 |   役割   | 派生元 | マージ先 |
| :--------: | :------: | :----: | :------: |
|   master   | 本番環境 |   -    |    -     |
| feature/\* | 機能開発 | master |  master  |

### コミットメッセージの記法

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
