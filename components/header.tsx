import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Image src="/daysio-logo.png" alt="DAYSIO" width={160} height={50} className="h-10 w-auto" />
        </div>

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
          <Button variant="outline" asChild>
            <a href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
              ログイン
            </a>
          </Button>
          <Button asChild>
            <Link href="/consultation">無料相談</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
