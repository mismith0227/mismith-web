export interface Project {
  name: string;
  period: { start: string; end: string | '継続中' };
  role: string;
  description: string;
}

export interface Work {
  company: string;
  period: { start: string; end: string | '継続中' };
  projects: Project[];
}

export const works: Work[] = [
  {
    company: "フリーランス",
    period: { start: "2022年02月", end: "継続中" },
    projects: [
      {
        name: "ファッションECサイトの開発",
        period: { start: "2025年02月", end: "進行中" },
        role: "フロントエンドエンジニア",
        description:
          "ShopifyのECサイトをliquidで開発。flowの構築など",
      },
      {
        name: "ファッションのECサービス",
        period: { start: "2022年02月", end: "進行中" },
        role: "フロントエンドエンジニア",
        description:
          "ReactによるフロントエンドのUI実装",
      },
      {
        name: "営業支援ツール開発",
        period: { start: "2022年02月", end: "2026年04月" },
        role: "フロントエンドエンジニア",
        description:
          "営業支援ツールの開発、React化プロジェクト。初期リリースでAngular JSで作られたアプリケーションをReactへリプレース",
      },
      {
        name: "大学のwebサイトコーディング",
        period: { start: "2022年02月", end: "2023年10月" },
        role: "フロントエンドエンジニア",
        description:
          "Next.jsによるサイト制作",
      },
    ],
  },
  {
    company: "制作会社",
    period: { start: "2021年09月", end: "2022年01月" },
    projects: [
      {
        name: "webサイトの制作",
        period: { start: "2021年09月", end: "2022年01月" },
        role: "フロントエンドエンジニア",
        description:
          "コーポレート、教育機関、リクルート、キャンペーンなどのwebサイト制作",
      },
    ],
  },
  {
    company: "制作会社",
    period: { start: "2020年04月", end: "2021年08月" },
    projects: [
      {
        name: "業務支援ツールの開発",
        period: { start: "2020年04月", end: "2021年08月" },
        role: "フロントエンドエンジニア",
        description:
          "React,Laravelによる業務支援ツールの開発のフロントエンドを担当",
      },
    ],
  },
  {
    company: "スタートアップ",
    period: { start: "2016年10月", end: "2020年03月" },
    projects: [
      {
        name: "業務支援ツールの開発",
        period: { start: "2016年10月", end: "2020年03月" },
        role: "フロントエンドエンジニア",
        description:
          "React、AngularJS（1.x系）でのフロントエンド開発",
      },
    ],
  },
];
