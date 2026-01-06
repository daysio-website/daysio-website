"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    console.log("[v0] Attempting to scroll to section:", sectionId)

    const element = document.getElementById(sectionId)

    if (element) {
      console.log("[v0] Element found, scrolling...")
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      console.error("[v0] Section not found:", sectionId)
      console.log(
        "[v0] Available IDs:",
        Array.from(document.querySelectorAll("[id]")).map((el) => el.id),
      )
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image src="/daysio-logo-white.png" alt="DAYSIO" width={120} height={40} className="h-8 w-auto" />
              </Link>
            </div>
            <p className="text-sm opacity-90 text-pretty">
              医療機関の健康診断業務を革新する、次世代システムソリューション。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScrollToSection(e, "features")}
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                >
                  機能・料金
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, "services")}
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                >
                  自社健康商品
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScrollToSection(e, "features")}
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                >
                  他システム連携
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScrollToSection(e, "features")}
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                >
                  多言語
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">導入事例</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScrollToSection(e, "testimonials")}
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                >
                  導入医療施設からの声
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="#company"
                  onClick={(e) => handleScrollToSection(e, "company")}
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                >
                  会社概要
                </a>
              </li>
              <li>
                <Link href="/consultation" className="hover:opacity-100 transition-opacity">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">© 2025 株式会社DAYSIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
