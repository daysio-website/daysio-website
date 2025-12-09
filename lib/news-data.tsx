export interface NewsItem {
  id: number
  slug: string
  date: string
  title: string
  content: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "2025-01-15-system-update",
    date: "2025.01.15",
    title: "システムアップデートのお知らせ",
    content: `
      <p>平素より DAYS-Daidai- をご利用いただき、誠にありがとうございます。</p>
      <p>2025年1月20日（月）午前2時～午前4時の間、システムメンテナンスを実施いたします。</p>
      <p>メンテナンス中は一時的にサービスがご利用いただけなくなります。ご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。</p>
    `,
  },
  {
    id: 2,
    slug: "2025-01-10-new-feature",
    date: "2025.01.10",
    title: "新機能追加のお知らせ",
    content: `
      <p>DAYS-Daidai- に新機能が追加されました。</p>
      <p>健診結果のデータエクスポート機能が強化され、より柔軟なデータ出力が可能になりました。</p>
      <p>詳細につきましては、操作ガイドをご確認ください。</p>
    `,
  },
  {
    id: 3,
    slug: "2025-01-05-year-end-greeting",
    date: "2025.01.05",
    title: "年始のご挨拶",
    content: `
      <p>新年あけましておめでとうございます。</p>
      <p>旧年中は格別のご愛顧を賜り、厚く御礼申し上げます。</p>
      <p>本年も、医療機関の皆様の業務効率化に貢献できるよう、サービスの向上に努めてまいります。</p>
      <p>本年もどうぞよろしくお願い申し上げます。</p>
    `,
  },
  {
    id: 4,
    slug: "2024-12-20-winter-campaign",
    date: "2024.12.20",
    title: "年末キャンペーンのお知らせ",
    content: `
      <p>DAYS-Daidai- 年末キャンペーンを実施いたします。</p>
      <p>期間中にお申し込みいただいた医療機関様には、初期費用を特別価格でご提供いたします。</p>
      <p>詳細につきましては、お問い合わせください。</p>
    `,
  },
  {
    id: 5,
    slug: "2024-12-15-partnership-announcement",
    date: "2024.12.15",
    title: "新規連携パートナー追加のお知らせ",
    content: `
      <p>DAYS-Daidai- の連携パートナーに新たに2社が追加されました。</p>
      <p>これにより、さらに幅広いシステムとの連携が可能になりました。</p>
      <p>連携可能なシステムの詳細は、他システム連携ページをご覧ください。</p>
    `,
  },
]

export function getNewsItems(limit?: number): NewsItem[] {
  if (limit) {
    return newsItems.slice(0, limit)
  }
  return newsItems
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug)
}
