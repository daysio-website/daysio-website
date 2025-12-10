import Image from "next/image"
import Link from "next/link"

export function DaysDaidaiFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image src="/images/daysio-logo.png" alt="DAYSIO" width={150} height={40} className="h-10 w-auto" />
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
                <Link href="/products/days-daidai#features" className="hover:text-[#0f172a]">
                  機能・料金
                </Link>
              </li>
              <li>
                <Link href="/products/days-daidai#products" className="hover:text-[#0f172a]">
                  自社関連商品
                </Link>
              </li>
              <li>
                <Link href="/products/days-daidai#integration" className="hover:text-[#0f172a]">
                  他システム連携
                </Link>
              </li>
              <li>
                <Link href="/products/days-daidai#multilingual" className="hover:text-[#0f172a]">
                  多言語
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0f172a] mb-4">サポート</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/products/days-daidai#faq" className="hover:text-[#0f172a]">
                  FAQ
                </Link>
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
