"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto">
        <a href="https://www.daysio.co.jp/" className="flex items-center">
          <Image src="/daysio-logo.png" alt="DAYSIO" width={160} height={50} className="h-10 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-2">
          <span className="text-sm text-muted-foreground">クラウド型健診システムと言えば・・・</span>
          <span className="text-2xl font-bold text-foreground">DAYS -Daidai-</span>
        </div>
        <span className="lg:hidden text-2xl font-bold text-foreground">DAYS -Daidai-</span>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {"活用シーン"}
          </a>
          <a
            href="#benefits"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {"選ばれる理由"}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            お問い合わせ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="px-8 min-w-max bg-[#1e3a5f] hover:bg-[#2c4f7c] text-white">
            <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
              無料相談
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export { Header as LPHeader }
