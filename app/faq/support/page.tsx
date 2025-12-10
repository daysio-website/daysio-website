"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SupportFAQPage() {
  const faqs = [
    {
      question: "サポートの営業時間は何時から何時までですか？",
      answer:
        "平日（月～金）9：00～12：00　13：00～17：00となります。※（土・日・祝日、年末年始休業など弊社休業日を除く）\n\nなお、ユーザーサポートは有料プランのお客様のみご利用頂けます。",
    },
    {
      question: "サポート方法は、どのようなサービスですか？",
      answer: "有料プランのお客様へ「メール・電話」によるサポートを行っております。",
    },
    {
      question: "DAYS-Daidai-へログインが出来ない。",
      answer:
        "ログインが出来ない場合には以下2点をご確認お願いいたします。\n\n１．ログインIDとパスワードに入力ミスが無いかの確認\n半角スペースなどのご入力、大文字と小文字の間違いなど、が増えております。\n\n２．健診システムDAYS-Daidai- SSL電子証明書の有効期限の確認\nSSL電子証明書の有効期限更新用の証明書は、以下からダウンロード可能です。\nマイページ ＞ 資料関連 ＞ DAYS-Daidai-スタートアップキット",
    },
    {
      question: "操作方法がわからないので教えて欲しい。",
      answer:
        "操作方法につきましては「DAYS-Daidai-」の操作ガイドをご覧ください。\n※DAYS-Daidai-画面右上の「？」アイコンからアクセス可能\n\n※「メール・電話」によるユーザーサポートは有料プランのお客様のみ対象",
    },
    {
      question: "特定健診の法改正や人間ドック学会の改訂など制度改正の対応はどうなりますか？",
      answer: "制度改正対応による検査項目の追加・基準値変更などは変更内容をサービスとして提供します。",
    },
    {
      question: "医療機関名や法人名を変更できますか？",
      answer:
        "医療機関名や法人名の変更につきましては、お客様にて【SKCマイページ-会員情報編集】から、会員情報を正しい内容にご修正いただき、お問い合わせフォームより、ご連絡お願い申し上げます。\n\n会員情報編集の完了後、DAYS-Daidai- の医療機関名を変更させていただきます。",
    },
    {
      question: "判定基準値の変更はできますか？",
      answer:
        "DAYS-Daidai- は、「日本人間ドック・予防医療学会」に準拠した健康診断の判定基準値（ABCDE）を搭載しております。\n\n検査会社の基準値と相違があり、診療（治療）の基準値へ合わせるなど、ご変更が必要な場合は、変更（カスタマイズ）内容により別途費用がかかる場合がございます。\n\nご変更が必要な場合は、具体的な変更内容を弊社サポートまでご連絡くださいませ。",
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
            サポート
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">サポートに関するFAQ</h1>
          <p className="text-gray-600">DAYS-Daidai-のサポートに関するよくあるご質問とその回答をご紹介します。</p>
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
