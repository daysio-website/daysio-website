"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Image src="/daysio-logo.png" alt="DAYSIO" width={160} height={50} className="h-10 w-auto" />
        </div>
        
        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            サービス
          </a>
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            機能
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            導入事例
          </a>
          <a href="#company" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            会社概要
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            お問い合わせ
          </a>
          <a href="#news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            お知らせ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <a href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
              ログイン
            </a>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/consultation">無料相談</Link>
          </Button>
          
          {/* ハンバーガーメニューボタン */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col py-4 px-4">
            <a 
              href="#services" 
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border"
              onClick={closeMenu}
            >
              サービス
            </a>
            <a 
              href="#features" 
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border"
              onClick={closeMenu}
            >
              機能
            </a>
            <a 
              href="#testimonials" 
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border"
              onClick={closeMenu}
            >
              導入事例
            </a>
            <a 
              href="#company" 
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border"
              onClick={closeMenu}
            >
              会社概要
            </a>
            <a 
              href="#contact" 
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border"
              onClick={closeMenu}
            >
              お問い合わせ
            </a>
            <a 
              href="#news" 
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border"
              onClick={closeMenu}
            >
              お知らせ
            </a>
            
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" asChild className="w-full">
                <a href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
                  ログイン
                </a>
              </Button>
              <Button asChild className="w-full">
                <Link href="/consultation" onClick={closeMenu}>無料相談</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
