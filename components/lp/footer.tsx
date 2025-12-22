export function LPFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">DAYS -Daidai-</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">クラウド型健診システムで業務効率化を実現</p>
          </div>
          <div className="flex items-center justify-center">
            <nav className="flex flex-row gap-3 sm:gap-6">
              <a
                href="https://www.daysio.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                会社概要
              </a>
              <a
                href="https://www.daysio.co.jp/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                プライバシーポリシー
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">© 2025 株式会社DAYSIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
