import Link from "next/link"
import { getNewsItems } from "@/lib/news-data"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "新着情報 | DAYSIO",
  description: "DAYS-Daidaiの最新情報をお知らせします",
  alternates: {
    canonical: "https://www.daysio.co.jp/news",
  },
}

export default function NewsPage() {
  const allNews = getNewsItems()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* News List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#0f172a] mb-4">新着情報</h1>
            <p className="text-gray-600">DAYS-Daidai-の最新情報をお知らせします</p>
          </div>

          <div className="space-y-6">
            {allNews.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 flex-1">
                      <span className="text-sm text-gray-600 whitespace-nowrap">{news.date}</span>
                      <h2 className="text-lg font-medium text-[#0f172a]">{news.title}</h2>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#0ea5e9]"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
