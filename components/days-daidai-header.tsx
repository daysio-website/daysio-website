"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function DaysDaidaiHeader() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showIntegrationDropdown, setShowIntegrationDropdown] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image src="/images/daysio-logo.png" alt="DAYSIO" width={160} height={50} className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/products/days-daidai#about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            DAYS-Daidai-とは
          </a>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              href="/products/days-daidai#features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              機能・料金
            </Link>
            {showDropdown && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    href="/pricing"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                  >
                    各プランの詳細はこちら
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <Link
              href="/products/days-daidai#products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              自社関連製品
            </Link>
            {showProductsDropdown && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    href="/products/kenshin-plus"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                  >
                    KenshinPlus
                  </Link>
                  <Link
                    href="/products/nijiken-tracker"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                  >
                    NIJIKEN Tracker
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowIntegrationDropdown(true)}
            onMouseLeave={() => setShowIntegrationDropdown(false)}
          >
            <Link
              href="/products/days-daidai#integration"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              他システム連携
            </Link>
            {showIntegrationDropdown && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    href="/integrations"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0ea5e9] transition-colors"
                  >
                    連携イメージはこちら
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/products/days-daidai#faq"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </Link>

          <Link
            href="/products/days-daidai#multilingual"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            多言語
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
              ログイン
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
              お問い合わせ
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default DaysDaidaiHeader
