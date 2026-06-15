import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DAYS-Daidai 連携システム一覧｜40社以上・検体検査・画像診断・WEB予約に対応",
  description:
    "DAYS-Daidai-は40社以上のシステムと連携実績あり。アステム・フクダ電子（検体検査）、富士フイルム・コニカミノルタ（画像診断）、WEB予約・PHR・DWH連携にも対応。",
}

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
