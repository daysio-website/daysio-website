"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CompanyFAQPage() {
  const faqs = [
    {
      question: "株式会社ＤＡＹＳＩＯとはどのような会社ですか。",
      answer:
        "株式会社DAYSIOは、医療・介護向けシステムの開発・運用・販売を行うヘルスケアIT企業です。\n東証プライム上場企業である株式会社エムティーアイのグループ会社で、\n今後はエムティーアイが提供する各種ヘルスケアサービスと DAYS-Daidai- を連携させ、より便利で統合的なサービス提供を進めていきます。",
    },
    {
      question: "他にどのようなサービスがありますか。",
      answer: "",
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
            運営会社
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">運営会社に関するFAQ</h1>
          <p className="text-gray-600">株式会社DAYSIOについてのよくあるご質問とその回答をご紹介します。</p>
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
                <div className="text-gray-700 leading-relaxed whitespace-pre-line ml-2">
                  {index === 1 ? (
                    <>
                      健診データ収集アプリ「
                      <Link href="/products/kenshin-plus" className="text-[#0ea5e9] hover:underline">
                        KENSHIN Plus
                      </Link>
                      」や、再検査・二次検査フォローアップ業務を支援する「
                      <Link href="/products/nijiken-tracker" className="text-[#0ea5e9] hover:underline">
                        NIJIKEN Tracker
                      </Link>
                      」など、関連製品を提供しています。
                    </>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
