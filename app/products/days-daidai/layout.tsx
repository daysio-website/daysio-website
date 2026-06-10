import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "スマート健診クラウドシステム DAYS-Daidai｜台数無制限・多言語対応 - DAYSIO",
  description: "DAYS-Daidaiはスマート健診クラウドシステムです。ブラウザだけで即日利用開始。台数無制限・多言語対応・60社以上との連携実績。初期費用0円のフリープランあり。",
}

export default function DaysDaidaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
