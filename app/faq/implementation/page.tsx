"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ImplementationFAQ() {
  const faqs = [
    {
      question: "費用感や購入方法(何を買えば良いのか)が、わかりません。",
      answer:
        "お問い合わせから無料デモのアポイントをお取りください。その際、現在の利用環境や、希望内容をヒアリングし、何が必要か、何が不要か、担当営業がシュミレーション、その場でお見積もりを出すことが可能です。",
    },
    {
      question: "稼働までにどのくらいの時間がかかりますか？",
      answer:
        "クラウド環境は受注後、最短で3営業日でご提供いたします。インポート系オプションがある場合はデータ出力側の準備期間に起因されますので、データ提供元へお客様ご自身でご確認ください。グローバルプランはお客様ごとの初期設定に時間を要するため、２ヶ月ほど期間がかかります。",
    },
    {
      question: "導入・初期設定ができるか不安です。",
      answer:
        "「DAYS-Daidai-」の操作ガイド（DAYS-Daidai-画面右上の「？」アイコンからアクセス可能）に、動画マニュアルをご用意しておりますので、ご安心ください。\n\n※安心サポート・グローバルプラン（有料）をご利用中のお客様で、導入や初期設定に関する個別サポートが必要な場合は、別途「操作レクチャー」をご購入いただく必要があります。",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/products/days-daidai#faq" className="inline-flex items-center text-[#0ea5e9] hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          FAQに戻る
        </Link>

        <div className="mb-8">
          <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            導入
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">導入に関するFAQ</h1>
          <p className="text-gray-600">DAYS-Daidai-の導入に関するよくあるご質問とその回答をご紹介します。</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="mb-4">
                <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded mb-2">Q</span>
                <h3 className="text-lg font-semibold text-[#1e3a5f] ml-2 inline">{faq.question}</h3>
              </div>
              <div className="ml-2 pl-4 border-l-2 border-gray-200">
                <span className="inline-block bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded mb-2">A</span>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line ml-2">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
