export default function Head() {
  const title = "プライバシーポリシー | 株式会社DAYSIO";
  const description =
    "株式会社DAYSIOのプライバシーポリシー。個人情報の取り扱いについてご説明します。";
  const url = "https://www.daysio.co.jp/privacy-policy";
  const ogImage = "https://www.daysio.co.jp/ogp.png";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="株式会社DAYSIO" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="株式会社DAYSIO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
