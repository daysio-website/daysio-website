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
          <a href="https://www.daysio.co.jp/">
            <Image src="/daysio-logo.png" alt="DAYSIO" width={160} height={50} className="h-10 w-auto" />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            DAYS-Daidai-とは
          </a>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a
              href="#features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              機能・料金
            </a>
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
            <a
              href="#products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              自社関連製品
            </a>
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
            <a
              href="#integration"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              他システム連携
            </a>
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

          <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            FAQ
          </a>

          <a href="#multilingual" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            多言語
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <a href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
              会員ページログイン
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
              無料相談
            </a>
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
