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
| Backend           | Go                                   |
| CMS               | MicroCMS                             |
| Infrastructure    | Cloudflare Pages, Vercel             |
| Environment setup | Docker                               |
| CI/CD             | GitHub Actions                       |
| Design            | Canva                                |
| Google            | Analytics, Search Console, reCAPTCHA |
| etc.              | PWA, OneSignal,                      |

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境構築

```
# リポジトリのクローン
git clone git@github.com:Arata1202/SeminarSite.git
cd SeminarSite

# .env.exampleから.envを作成
mv .env.example .env

# .envの編集
vi .env

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
❯ tree -a -I "node_modules|.next|.git|out|.vercel|_|.DS_Store|.env|next-env.d.ts|tmp" -L 3
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
