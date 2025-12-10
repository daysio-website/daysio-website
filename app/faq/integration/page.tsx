"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function IntegrationFAQ() {
  const faqs = [
    {
      question: "「外部連携」とは、どのような事が出来ますか？",
      answer:
        "「受診者属性（氏名や住所などの基本情報）」や「検査結果データ（血液検査などの外注検査結果）」など、お使い頂いている電子カルテなどのシステムや検査会社様と連携し、1項目ごと手入力せずに「インポートする」ことが出来る機能です。各種機能（連携機能）を提供しているパートナー企業様との多数の連携実績がございますので、詳細は「連携イメージ」や「連携パートナー一覧」をご覧ください。",
    },
    {
      question: "血圧計や身長体重計などの測定値データの取込は可能ですか？",
      answer: "別途データ収集アプリとの連携で、対応可能です。連携希望のメーカー名・機器名をご連絡ください。",
    },
    {
      question: "WEB予約システムからの予約データの取込は可能ですか？",
      answer:
        "可能です。ただし、予約システム側に、コースIDや団体情報などの追加項目を含めて頂く必要がございます。\n\n参考実績製品：株式会社ジェネシス「GRAN」",
    },
    {
      question: "どこの検査会社でも取り込みできますか？",
      answer:
        "対応可能です。検査会社名とご担当者様名・連絡先をご連絡ください。※実績のない検査会社の場合は、追加の準備期間が発生する可能性はございます。",
    },
    {
      question: "どこのレセコン・電子カルテメーカーでも、患者データのインポートできますか？",
      answer:
        "対応可能です。レセコン/電子カルテメーカー名とご担当者様名・連絡先をご連絡ください。実績のないメーカーの場合は、追加の準備期間が発生する可能性はございます。",
    },
    {
      question: "問診インポートは、どのようにデータ取込できますか？",
      answer:
        "弊社標準仕様のデータ形式で取り込みします。参考実績として、以下の取込実績がございます。\n\n・スキャン取り込み\n・iPad問診アプリ\n・WEB問診\n\n参考事例として、株式会社メディカルゲートウェイジャパン様の「BEAR-D」による実績がございます。また、WEB問診のみの場合は、Google Formの取込実績もございます。Google Formの場合は、フォームをお客様にてご準備いただく形となります。",
    },
    {
      question: "検査システムとの連携は可能ですか？",
      answer:
        "弊社標準仕様のデータをご提供頂ければ、対応可能です。仕様変更となる場合は、別途費用でカスタマイズ対応となります。",
    },
    {
      question: "画像管理システム（PACS）との連携は可能ですか？",
      answer:
        "対応可能です。PACSメーカー様のメーカー名とご担当者様名・連絡先をご連絡ください。実績のないメーカーの場合は、追加の準備期間が発生する可能性はございます。",
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
            連携
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">連携に関するFAQ</h1>
          <p className="text-gray-600">DAYS-Daidai-の連携機能に関するよくあるご質問とその回答をご紹介します。</p>
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
