"use client"
import Image from "next/image"
import type React from "react"

import Link from "next/link"

export function DaysDaidaiFooter() {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    console.log("[v0] DaysDaidai Footer - Clicking section:", sectionId)

    const element = document.getElementById(sectionId)
    console.log("[v0] Element found:", element ? "YES" : "NO")

    if (element) {
      console.log("[v0] Element position:", element.getBoundingClientRect())
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      console.log("[v0] Scroll initiated")
    } else {
      const allIds = Array.from(document.querySelectorAll("[id]")).map((el) => el.id)
      console.log("[v0] All available IDs on page:", allIds)
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Link href="https://www.daysio.co.jp/">
                <Image src="/daysio-logo.png" alt="DAYSIO" width={150} height={40} className="h-10 w-auto" />
              </Link>
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
                <a
                  href="#features"
                  onClick={(e) => handleSectionClick(e, "features")}
                  className="hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  機能・料金
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleSectionClick(e, "products")}
                  className="hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  自社関連商品
                </a>
              </li>
              <li>
                <a
                  href="#integration"
                  onClick={(e) => handleSectionClick(e, "integration")}
                  className="hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  他システム連携
                </a>
              </li>
              <li>
                <a
                  href="#multilingual"
                  onClick={(e) => handleSectionClick(e, "multilingual")}
                  className="hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  多言語
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0f172a] mb-4">サポート</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSectionClick(e, "faq")}
                  className="hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  FAQ
                </a>
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
  )
}

export default DaysDaidaiFooter
