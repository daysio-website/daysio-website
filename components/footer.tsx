import Image from "next/image"
import Link from "next/link"

export function Footer() {
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
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  包括的な健康診断ソリューション
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  医療現場に最適化された先進機能
                </Link>
              </li>
              <li>
                <Link href="/products/days-daidai" className="hover:opacity-100 transition-opacity text-white">
                  DAYS-Daidai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">導入事例</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  導入医療施設からの声
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:opacity-100 transition-opacity">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
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
