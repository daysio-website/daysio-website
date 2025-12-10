import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getNewsBySlug, getNewsItems } from "@/lib/news-data"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export async function generateStaticParams() {
  const news = getNewsItems()
  return news.map((item) => ({
    slug: item.slug,
  }))
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug)

  if (!news) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* News Detail */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/news" className="inline-flex items-center text-sm text-gray-600 hover:text-[#0f172a] mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            新着情報一覧に戻る
          </Link>

          <article className="bg-white border border-gray-200 rounded-lg p-12">
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-4">{news.date}</p>
              <h1 className="text-3xl font-bold text-[#0f172a] mb-6">{news.title}</h1>
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
