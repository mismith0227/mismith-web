# Portfolio Project

## 技術スタック
- Astro + MDX
- Cloudflare Pages / Workers / D1

## ブログ
- Zenn RSSフィードから記事を取得: https://zenn.dev/misumith/feed
- タイトルとURLのみ表示し、リンク先はZennの記事ページ
- ビルド時にfetchするSSG方式

## コーディング規約
- TypeScriptを使う
- コンポーネントはsrc/components/に置く
- ブログ記事はsrc/content/blog/に置く

## デプロイ
- mainブランチへのpushでCloudflare Pagesに自動デプロイ
- 環境変数はCloudflareダッシュボードで管理

## 注意事項
- Node.js固有のAPIは使わない（Workersで動かないため）
- 画像はpublicフォルダかCloudflare Imagesを使う