"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import DaysDaidaiHeader from "@/components/days-daidai-header"
import DaysDaidaiFooter from "@/components/days-daidai-footer"

export default function FeaturesFAQ() {
  const faqs = [
    {
      question: "どのような健診に対応していますか？",
      answer:
        "安心サポートプランは、人間ドック・法定健診・雇入健診に加えて様式6号・特定健診向け帳票がご利用頂けます。提供コースも「特定健診・特定健診（後期高齢）協会けんぽ一般・付加・子宮頸がん単独受診」をご利用頂けます。",
    },
    {
      question: "初期のコース内容を、クリニックの実施する検査組み合わせに編集可能ですか？",
      answer:
        "可能です。詳細は「DAYS-Daidai-」の操作ガイド（DAYS-Daidai-画面右上の「？」アイコンからアクセス可能）内にある、動画マニュアルをご覧ください。\n※編集後、編集前の状態に戻したい場合は、初期出荷状態となってしまいます。",
    },
    {
      question: "スマート健診クラウドのレイアウトにない帳票は、対応可能ですか？",
      answer:
        "提出先へレイアウト変更して問題ないかをご確認ください。変更が受け付けられなかった場合は、ひな型を送付頂き確認後、対応可能な場合は別途費用でカスタマイズ対応となります。",
    },
    {
      question: "出力できる帳票のレイアウトを確認したいのですが、サンプルはもらえますか？",
      answer: "会員登録後、「マイページ＞資料関連」ページより帳票のサンプルをご確認頂けます。",
    },
    {
      question: "画像付き健康診断結果報告書とは、どのようなオプションでしょうか？",
      answer:
        "健康診断結果報告書に画像データを表記させる、オプション機能です。画像検査のキー画像をdrag-and-dropして、健康診断結果報告書に画像の添付が可能となります。",
    },
    {
      question: "特定健康診査 請求データ作成とは、どのようなオプションでしょうか？",
      answer:
        "特定健康診査（厚生労働省が定める特定健康診査[メタボリックシンドローム健診]）を受診した健診結果と請求料金を、支払基金・国保連合会へ提出するデータとして、DAYS-Daidai-で作成するオプションです。\nデータフォーマットは、厚生労働省の指定仕様となります。\nDAYS-Daidai-でこのデータを作成するには、市町村（自治体）とユーザーが締結した「契約内容」を、対象受診者が健診の予約をDAYS-Daidai-で登録する前にセッティングする必要があります。\nこちらのオプションをお申込みのユーザー様には、クラウドサポートにてお問い合わせフォローいたします。\n尚、こちらの機能は、請求先が市町村となる「自治体のオリジナル健診」への対応ではありませんので、ご留意ください。\n契約内容についてご不明な場合は、自治体もしくは医師会へ事前にご確認ください。\nデータの詳細は、社会保険診療報酬支払基金のサイトをご確認ください。",
    },
    {
      question: "協会けんぽ報告データ作成とは、どのようなオプションでしょうか？",
      answer:
        "協会けんぽ健診（生活習慣病予防健診）を受診した健診結果を、協会けんぽ指定ツールへ読み込む為のデータについて、DAYS-Daidai-で作成するオプションです。\nデータフォーマットは、協会けんぽの指定仕様となります。\nDAYS-Daidai-でこのデータを作成するには、協会けんぽとユーザーが締結した「契約内容」を、対象受診者が健診の予約をDAYS-Daidai-で登録する前にセッティングする必要があります。\nこちらのオプションをお申込みのユーザー様には、クラウドサポートにてお問い合わせフォローいたします。\n尚、こちらのデータは「請求データ」ではなく、「報告データ」です。\nデータの詳細は、協会けんぽのサイトをご確認ください。",
    },
    {
      question: "特定健診・協会けんぽ以外にデータ提出したい場合は、対応可能ですか？",
      answer:
        "対応可能です。どちらの提出先かご連絡の上、サンプルファイルや仕様書をご提供下さい。別途費用で、カスタマイズ対応となります。",
    },
    {
      question: "独自の基準値を設定可能ですか？",
      answer:
        "標準は、日本人間ドック学会に準拠しております。変更希望の検査項目・基準値を送付頂ければ、別途費用でカスタマイズ対応となります。弊社標準のコースと基準値については、以下から「コースと基準値一覧表」をダウンロードしていただく事で確認可能です。\nマイページ ＞ 資料関連 ＞ DAYS-Daidai-スタートアップキット",
    },
    {
      question: "現在利用中の健診システムから、データ移行は可能でしょうか？",
      answer:
        "使用中の健診システムから、データ出力可能かご確認ください。出力可能な場合は、サンプルデータをご提供頂き別途費用で受診者・団体・過去測定値を移行します。",
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
            機能
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">機能に関するFAQ</h1>
          <p className="text-gray-600">DAYS-Daidai-の機能に関するよくあるご質問とその回答をご紹介します。</p>
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
