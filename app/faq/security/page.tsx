"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SecurityFAQ() {
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
            セキュリティ
          </span>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">セキュリティに関するFAQ</h1>
          <p className="text-gray-600">DAYS-Daidai-のセキュリティに関するよくあるご質問とその回答をご紹介します。</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="mb-4">
              <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded mb-2">Q</span>
              <h3 className="text-lg font-semibold text-[#1e3a5f] ml-2 inline">セキュリティが心配なのですが。</h3>
            </div>
            <div className="ml-2 pl-4 border-l-2 border-gray-200">
              <span className="inline-block bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded mb-2">A</span>
              <div className="text-gray-700 leading-relaxed ml-2">KDDIのデータセンターを使用してます。</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="mb-4">
              <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded mb-2">Q</span>
              <h3 className="text-lg font-semibold text-[#1e3a5f] ml-2 inline">ガイドラインには準拠してますか？</h3>
            </div>
            <div className="ml-2 pl-4 border-l-2 border-gray-200">
              <span className="inline-block bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded mb-2">A</span>
              <div className="text-gray-700 leading-relaxed space-y-2 ml-2">
                <p>3省2ガイドラインに準拠しています。</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <a
                      href="https://www.mhlw.go.jp/stf/shingi/0000516275.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 underline"
                    >
                      厚労省「医療情報システムの安全管理に関するガイドライン 第5.1版」
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.meti.go.jp/policy/mono_info_service/healthcare/teikyou_guideline.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 underline"
                    >
                      総務省・経済産業省「医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン（第1版）」
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
