"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import DaysDaidaiHeader from "@/components/days-daidai-header"
import DaysDaidaiFooter from "@/components/days-daidai-footer"

export default function EnvironmentFAQ() {
  const faqs = [
    {
      question: "サービスを利用する為のハードウェアの条件は何でしょうか？",
      answer: "Google chromeが動作するパソコン・タブレットが必要となります。",
    },
    {
      question: "OSの指定はありますか？",
      answer: "Windows11 以降 及び MacOSX v10.11 (El Capitan) 以降 は検証済みです。",
    },
    {
      question: "タブレットは利用可能ですか？",
      answer:
        "Google chromeが動作する・SSL証明書インポートが可能なデバイスであれば、問題ございません。（iPadは、解像度及び帳票出力の動作検証外です）",
    },
    {
      question: "ネットワーク環境に指定はありますか？",
      answer:
        "インターネット接続が可能な環境であれば、ご利用頂けます。\n電子カルテPCでご利用希望の場合は、ご利用中の電子カルテサポートベンダー様へご相談ください。",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DaysDaidaiHeader />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/products/days-daidai#faq" className="inline-flex items-center text-[#0ea5e9] hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          FAQに戻る
        </Link>

        <div className="mb-8">
          <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            動作環境
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">動作環境に関するFAQ</h1>
          <p className="text-gray-600">DAYS-Daidai-の動作環境に関するよくあるご質問とその回答をご紹介します。</p>
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

      <DaysDaidaiFooter />
    </div>
  )
}
