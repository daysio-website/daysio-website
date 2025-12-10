import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function DaysDaidaiHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <a href="https://www.daysio.co.jp/">
            <Image src="/daysio-logo.png" alt="DAYSIO" width={160} height={50} className="h-10 w-auto" />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/products/days-daidai"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            DAYS-Daidai-とは
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            機能・料金
          </Link>
          <Link
            href="/products/days-daidai#related-products"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            自社関連製品
          </Link>
          <Link
            href="/integrations"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            他システム連携
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
