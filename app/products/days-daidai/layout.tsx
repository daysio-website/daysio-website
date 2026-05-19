import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "クラウド健診システム｜台数無制限・多言語対応 - DAYSIO",
  description: "ブラウザだけで即日使えるクラウド健診システム。台数無制限・多言語対応・60社以上との他システム連携実績。フリープラン（0円）から始められます。",
}

export default function DaysDaidaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
