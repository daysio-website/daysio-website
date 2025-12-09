"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Cloud, CheckCircle } from "lucide-react"
import Link from "next/link"
import { getNewsItems } from "@/lib/news-data"
import Image from "next/image"

export default function Home() {
  const latestNews = getNewsItems(5)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showIntegrationDropdown, setShowIntegrationDropdown] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/images/daysio-logo.png" alt="DAYSIO" width={150} height={40} className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="text-gray-600 hover:text-[#0f172a]">
                DAYS-Daidai-とは
              </a>
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <a href="#features" className="text-gray-600 hover:text-[#0f172a] cursor-pointer">
                  機能・料金
                </a>
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
                    <Link
                      href="/pricing"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                    >
                      各プランの詳細はこちら
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <a href="#products" className="text-gray-600 hover:text-[#0f172a] cursor-pointer">
                  自社関連製品
                </a>
                {showProductsDropdown && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
                    <Link
                      href="/products/kenshin-plus"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                    >
                      KENSHIN Plus®
                    </Link>
                    <Link
                      href="/products/nijiken-tracker"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                    >
                      NIJIKEN Tracker
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setShowIntegrationDropdown(true)}
                onMouseLeave={() => setShowIntegrationDropdown(false)}
              >
                <a href="#integration" className="text-gray-600 hover:text-[#0f172a] cursor-pointer">
                  他システム連携
                </a>
                {showIntegrationDropdown && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
                    <Link
                      href="/integrations"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                    >
                      連携イメージはこちら
                    </Link>
                  </div>
                )}
              </div>
              <a href="#faq" className="text-gray-600 hover:text-[#0f172a]">
                FAQ
              </a>
              <a href="#multilingual" className="text-gray-600 hover:text-[#0f172a]">
                多言語
              </a>
              <a href="#news" className="text-gray-600 hover:text-[#0f172a]">
                新着情報
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Link href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-gray-600">
                  ログイン
                </Button>
              </Link>
              <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white">お問い合わせ</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-20 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                DAYS-Daidai-とは
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Webブラウザですぐ使える
                <br />
                台数無制限の
                <br />
                健診クラウドシステム
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                DAYS-Daidai-
                は、健診受付から結果管理までを一元化し、医療機関の業務負担を大幅に軽減するクラウドサービスです。ペーパーレス化や情報共有を促進し、現場の作業効率とミス削減に貢献します。
              </p>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src="/images/hero-medical-staff.png"
                alt="医師と看護師がタブレットで健診データを確認"
                className="w-3/4 rounded-xl border-4 border-[#4AA8C7]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security & Environment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">
              安心のセキュリティと、シンプルな導入環境
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-[#0f172a] mb-4" />
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">安全な通信と高い信頼性</h3>
              <p className="text-gray-600 leading-relaxed">
                レセプトオンライン請求と同じ SSL
                通信を採用し、一般回線でも安全に利用できます。医療情報システムの「3省2ガイドライン」にも準拠しています。
              </p>
            </Card>

            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 text-[#0f172a] mb-4" />
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">導入がかんたん</h3>
              <p className="text-gray-600 leading-relaxed">
                必要なのは「インターネット環境」と「Google Chrome
                を入れたデバイス」だけ。専用サーバーなどの設備は不要で、すぐに使い始められます。
              </p>
            </Card>

            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-[#0f172a] mb-4" />
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">安心の運用サポート</h3>
              <p className="text-gray-600 leading-relaxed">
                当社がサーバーとアプリの保守を担当し、経産省ガイドラインに沿った環境で運用できます。低コストで安全なシステム提供を実現しています。
              </p>
            </Card>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-base text-gray-600">
              DAYS-Daidai- は、クラウドデータセンター上で動作するマルチテナント方式の SaaS 環境を採用しています。
            </p>
            <p className="text-base text-gray-600 mt-4">
              1つのサーバーに複数ユーザー環境を構成することでリソースを効率化し、インフラコストを抑えた安価なサービス提供を実現しています。
            </p>
          </div>
        </div>
      </section>

      {/* Features & Pricing Section */}
      <section id="features" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              機能・料金
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">DAYS-Daidai-3つのプラン</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
              初期費用0円の「フリープラン」から、スタンダードな「安心サポートプラン」、上位の「グローバルプラン」まで、ご利用ニーズに合わせてお選びいただけます。
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
              {/* Free Plan */}
              <Card className="p-8 bg-[#f5f0e8] border-gray-200 shadow-lg">
                <p className="text-sm text-gray-600 mb-4 text-center">まずは試してみたい方に</p>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">非課金フリープラン</h3>
                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-[#0f172a]">
                    ¥ 0<span className="text-lg font-normal">/月(税込)</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">初期費用 0 円</p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>無料で操作性をご体験いただけます。</p>
                  <p>ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をサポートします。</p>
                  <p>非課金フリープランでは、サポートセンターのご利用制限がございます。</p>
                  <p>ご不明な場合は、DAYS-Daidai-操作ガイドよりご確認頂けます。</p>
                </div>
              </Card>

              {/* Support Plan */}
              <Card className="p-8 bg-[#d9eff9] border-gray-200 shadow-lg">
                <p className="text-sm text-gray-600 mb-4 text-center">標準的な健診業務を網羅</p>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">安心サポートプラン</h3>
                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-[#0f172a]">
                    ¥ 9,900<span className="text-lg font-normal">/月(税込)</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">初期費用110,000円〜</p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Q&Aやマニュアルに加えて電話やメールによるサポートがついています。</p>
                  <p>ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をバックアップ。</p>
                  <p>さらに、各種オプションをご用意しております。</p>
                </div>
              </Card>

              {/* Global Plan */}
              <Card className="p-8 bg-[#b8e6e6] border-gray-200 shadow-lg">
                <p className="text-sm text-gray-600 mb-4 text-center">上位な連携ができる拡張性</p>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">グローバルプラン</h3>
                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-[#0f172a]">
                    ¥ 29,700<span className="text-lg font-normal">/月(税込)</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">初期費用550,000円〜</p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Q&Aやマニュアルに加えて電話やメールによるサポート付き。</p>
                  <p>ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をバックアップ。</p>
                  <p>
                    英語を始め多言語対応など、安心サポートプランより適応可能なオプションを幅広くお選びいただけます。
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <Link href="/pricing">
              <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-4 text-lg rounded-full shadow-lg">
                各プランの詳細はこちら
              </Button>
            </Link>
          </div>

          {/* 自社関連製品セクション */}
          <div id="products" className="mb-16 scroll-mt-24 pt-8">
            <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              自社関連製品
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-4">DAYS-Daidai-と連携可能な自社製品</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              DAYS-Daidai- には、健診データ収集アプリ KENSHIN
              Plusや、再検査・二次検査フォローアップ業務支援システムNIJIKEN Tracker といった関連製品がございます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* KENSHIN Plus Card */}
            <Link href="/products/kenshin-plus" className="block">
              <Card className="p-4 md:p-8 border-2 border-gray-200 hover:shadow-xl hover:border-[#0ea5e9] transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                  <div className="flex-1 order-2 md:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2 md:mb-3">KENSHIN Plus®</h3>
                    <p className="text-sm md:text-base text-gray-600">健診データ収集 iPadアプリ</p>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-48 order-1 md:order-2">
                    <img
                      src="/images/kenshin.jpg"
                      alt="KENSHIN Plus - 医療従事者がiPadを使用している様子"
                      className="w-full h-40 md:h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </Card>
            </Link>

            {/* NIJIKEN Tracker Card */}
            <Link href="/products/nijiken-tracker" className="block">
              <Card className="p-4 md:p-8 border-2 border-gray-200 hover:shadow-xl hover:border-[#0ea5e9] transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                  <div className="flex-1 order-2 md:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2 md:mb-3">NIJIKEN Tracker</h3>
                    <p className="text-sm md:text-base text-gray-600">再検査・２次検査フォローアップ業務支援システム</p>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-48 order-1 md:order-2">
                    <img
                      src="/images/nijiken.jpg"
                      alt="NIJIKEN Tracker - 医療機器とタブレット操作"
                      className="w-full h-40 md:h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              他システム連携
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a]">
              DAYS-Daidai-との各種データ連携実績がある企業様一覧
            </h2>
            <Link href="/integrations">
              <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-full shadow-lg whitespace-nowrap w-full md:w-auto">
                連携イメージこちら
              </Button>
            </Link>
          </div>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed mb-12">
            連携をご希望の際は、必ず事前に各連携会社へ、直接お客様から詳細や費用をご確認ください。なお、費用が発生する場合は貴社ご負担となります。
          </p>

          <div className="w-full mb-4 md:hidden text-sm text-gray-500 text-center">← 横にスクロールできます →</div>
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto border border-gray-200 rounded-lg">
            <table className="min-w-[900px] w-full text-sm">
              <thead className="sticky top-0 bg-white z-10">
                {/* カテゴリヘッダー */}
                <tr>
                  <th
                    rowSpan={2}
                    className="border border-gray-300 px-4 py-3 text-center bg-gray-100 font-bold text-[#0f172a]"
                  >
                    連携パートナー企業
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center bg-red-100 font-bold text-[#0f172a]">
                    受診者属性
                  </th>
                  <th
                    colSpan={2}
                    className="border border-gray-300 px-4 py-2 text-center bg-green-100 font-bold text-[#0f172a]"
                  >
                    検体検査
                  </th>
                  <th
                    colSpan={3}
                    className="border border-gray-300 px-4 py-2 text-center bg-purple-100 font-bold text-[#0f172a]"
                  >
                    画像診断
                  </th>
                  <th
                    colSpan={2}
                    className="border border-gray-300 px-4 py-2 text-center bg-blue-100 font-bold text-[#0f172a]"
                  >
                    WEB予約
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center bg-yellow-100 font-bold text-[#0f172a]">
                    PHR
                  </th>
                  <th
                    colSpan={3}
                    className="border border-gray-300 px-4 py-2 text-center bg-gray-200 font-bold text-[#0f172a]"
                  >
                    その他
                  </th>
                </tr>
                {/* サブヘッダー */}
                <tr className="text-xs">
                  <th className="border border-gray-300 px-2 py-2 text-center bg-red-50">
                    基本属性
                    <br />
                    Import
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                    オーダー
                    <br />
                    Export
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                    検査結果
                    <br />
                    Import
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-purple-50">
                    URLビューワ
                    <br />
                    連携
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-purple-50">
                    MWMオーダー
                    <br />
                    Export
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-purple-50">
                    検査レポート
                    <br />
                    Import
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                    予約
                    <br />
                    Import
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                    問診
                    <br />
                    Import
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-yellow-50">
                    健診結果
                    <br />
                    データ
                    <br />
                    Export
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-gray-100">DWH</th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-gray-100">
                    タッチ
                    <br />
                    ディスプレイ
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-center bg-gray-100">
                    医用画像
                    <br />
                    モニター
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* データ行 */}
                {[
                  { name: "株式会社アイソル", vals: ["〇", "", "", "", "", "", "", "", "", "", "", ""] },
                  { name: "株式会社アステム", vals: ["", "〇", "〇", "", "", "", "", "", "", "", "", ""] },
                  { name: "アトムメディカル株式会社", vals: ["", "〇", "〇", "", "", "", "", "", "", "", "", ""] },
                  { name: "株式会社アルム", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  { name: "株式会社イーエムシステムズ", vals: ["〇", "", "", "", "", "", "〇", "", "", "", "", ""] },
                  { name: "イームス・ロボティクス株式会社", vals: ["", "", "", "", "", "", "", "", "", "", "〇", ""] },
                  { name: "株式会社イプロス", vals: ["", "", "", "", "", "", "", "", "", "", "〇", ""] },
                  {
                    name: "H.U.グループホールディングス株式会社",
                    vals: ["", "〇", "〇", "〇", "", "", "", "", "", "", "", ""],
                  },
                  { name: "株式会社エクセルエイド", vals: ["", "", "", "", "", "", "〇", "", "", "", "", ""] },
                  { name: "株式会社エスアールエル", vals: ["", "〇", "〇", "", "", "", "", "", "", "", "", ""] },
                  { name: "NEC", vals: ["", "", "", "", "", "", "", "", "", "〇", "", ""] },
                  {
                    name: "株式会社エヌ・ティ・ティ・データ",
                    vals: ["", "", "", "", "", "", "〇", "〇", "", "", "", ""],
                  },
                  { name: "株式会社LSIメディエンス", vals: ["", "〇", "〇", "", "", "", "", "", "", "", "", ""] },
                  { name: "大塚製薬株式会社", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  {
                    name: "キヤノンメディカルシステムズ株式会社",
                    vals: ["", "", "", "", "", "", "", "", "", "", "", "〇"],
                  },
                  { name: "株式会社グッドサイクルシステム", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  { name: "株式会社ケアレックス", vals: ["", "", "", "", "", "", "〇", "", "", "", "", ""] },
                  { name: "株式会社健診オンライン", vals: ["〇", "", "", "", "", "", "〇", "", "", "", "", ""] },
                  { name: "コニカミノルタ株式会社", vals: ["", "", "", "〇", "", "", "", "", "", "", "", ""] },
                  {
                    name: "株式会社サンテメディカルサービス",
                    vals: ["", "", "", "", "", "", "〇", "", "", "", "", ""],
                  },
                  { name: "Sansan株式会社", vals: ["〇", "", "", "", "", "", "", "", "", "", "", ""] },
                  { name: "株式会社CSI", vals: ["", "", "", "", "〇", "〇", "", "", "", "", "", ""] },
                  { name: "株式会社島津製作所", vals: ["", "", "", "", "", "", "", "", "", "", "", "〇"] },
                  {
                    name: "ジャパン・メディカル・カンパニー",
                    vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""],
                  },
                  { name: "株式会社タニタ", vals: ["", "△", "△", "", "", "", "", "", "", "", "", ""] },
                  { name: "ディーメック株式会社", vals: ["", "", "", "", "", "", "", "", "", "〇", "", ""] },
                  { name: "テクマトリックス株式会社", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  { name: "株式会社DNPハイパーテック", vals: ["", "", "", "", "", "", "〇", "", "", "", "", ""] },
                  { name: "株式会社ドクターネット", vals: ["", "", "", "", "", "〇", "", "", "", "", "", ""] },
                  { name: "株式会社ドクターキューブ", vals: ["", "", "", "〇", "", "", "", "", "", "", "", ""] },
                  { name: "凸版印刷株式会社", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  { name: "株式会社ドリームラボ", vals: ["", "", "", "", "", "〇", "", "", "", "", "", ""] },
                  { name: "日本光電工業株式会社", vals: ["", "△", "△", "", "", "", "", "", "", "", "", ""] },
                  { name: "日本情報クリエイト株式会社", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  { name: "富士フイルム株式会社", vals: ["", "", "", "〇", "", "", "", "", "", "", "", ""] },
                  { name: "フクダ電子株式会社", vals: ["", "〇", "〇", "", "", "", "", "", "", "", "", ""] },
                  {
                    name: "株式会社フジメディカルサービス",
                    vals: ["〇", "", "", "", "", "", "〇", "〇", "", "", "", ""],
                  },
                  {
                    name: "株式会社メディアコンテンツファクトリー",
                    vals: ["", "", "", "", "", "", "〇", "", "", "", "", ""],
                  },
                  { name: "株式会社メディカルノート", vals: ["", "", "", "", "", "", "", "", "〇", "", "", ""] },
                  { name: "株式会社メディックメディア", vals: ["", "", "", "", "", "", "", "", "", "", "〇", ""] },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-[#0f172a]">{row.name}</td>
                    {row.vals.map((val, i) => (
                      <td key={i} className="border border-gray-300 px-2 py-2 text-center">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              FAQ
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">
              DAYS-Daidai-に関する「よくあるご質問」
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
              導入に関して不安な点は直接営業担当がお答えします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "動作環境", href: "/faq/environment" },
              { title: "機能", href: "/faq/features" },
              { title: "連携", href: "/faq/integration" },
              { title: "導入", href: "/faq/implementation" },
              { title: "サポート", href: "/faq/support" },
              { title: "セキュリティ", href: "/faq/security" },
              { title: "運営会社", href: "/faq/company" },
              { title: "その他ご利用ガイド", href: "/faq/guide" },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <div className="h-20 border-2 border-[#0ea5e9] bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer">
                  <span className="text-base font-medium text-[#0ea5e9]">{item.title}</span>
                  <ArrowRight className="h-4 w-4 text-[#0ea5e9] transform rotate-90" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Multilingual Section */}
      <section id="multilingual" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            多言語
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">多言語対応について</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed mb-12">
            "日本式"の健診は、海外でも高品質な医療サービスとして高く評価されています。DAYS-Daidai-は日本式健診を海外でも提供できるよう、多言語対応・ローカライズ・検査機器連携などを総合的にサポートします。
          </p>

          {/* Cards for multilingual support features */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: 多言語対応 */}
            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">多言語対応</h3>
              <p className="text-gray-600 leading-relaxed">
                英語の帳票は標準提供、国内で展開しているクラウド型健診システムの機能はそのままに、さまざまな言語へ翻訳・ローカライズが可能です。
              </p>
            </Card>

            {/* Card 2: メディカルツーリズム対応 */}
            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">メディカルツーリズム対応</h3>
              <p className="text-gray-600 leading-relaxed">
                海外からの受診者に対し、健診結果を対応言語で自動出力できます。翻訳作業をなくし、事務負担とコストを大幅に削減します。
              </p>
            </Card>

            {/* Card 3: 海外進出支援 */}
            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">海外進出支援（国内医療機関向け）</h3>
              <p className="text-gray-600 leading-relaxed">
                日本の医療機関が海外に進出する際も、現地言語に対応した健診システムを導入することで、スムーズな運用とスタッフ教育が可能です。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border border-gray-300 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              {/* 左側：新着情報タイトル */}
              <div className="flex-shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">新着情報</h2>
              </div>

              {/* 右側：ニュースリスト */}
              <div className="flex-1 space-y-4 md:space-y-6">
                {latestNews.map((news) => (
                  <Link key={news.id} href={`/news/${news.slug}`}>
                    <div className="py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                          <span className="text-sm text-gray-600 whitespace-nowrap">{news.date}</span>
                          <span className="text-sm md:text-base text-[#0f172a]">{news.title}</span>
                        </div>
                        <div className="hidden md:block flex-shrink-0">
                          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#0ea5e9]"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* moreボタン */}
                <div className="pt-4">
                  <Link href="/news">
                    <button className="w-full bg-black text-white py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                      more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">今すぐ始めませんか？</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            お問い合わせで、貴院に最適なプランをご提案いたします。
            <br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex justify-center">
            <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-6 text-lg">
                お問い合わせ <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Image src="/images/daysio-logo.png" alt="DAYSIO" width={150} height={40} className="h-10 w-auto" />
              </div>
              <p className="text-sm text-gray-600">
                医療機関の健診業務を
                <br />
                DX化でカンタン・正確・スマートに
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0f172a] mb-4">サービス</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#features" className="hover:text-[#0f172a]">
                    機能・料金
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#0f172a]">
                    自社関連商品
                  </Link>
                </li>
                <li>
                  <Link href="#integration" className="hover:text-[#0f172a]">
                    他システム連携
                  </Link>
                </li>
                <li>
                  <Link href="#multilingual" className="hover:text-[#0f172a]">
                    多言語
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0f172a] mb-4">サポート</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#faq" className="hover:text-[#0f172a]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="hover:text-[#0f172a]">
                    新着情報
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.daysio.co.jp/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0f172a]"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0f172a] mb-4">会社情報</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="https://www.daysio.co.jp/#company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0f172a]"
                  >
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.daysio.co.jp/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0f172a]"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 DAYSIO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
