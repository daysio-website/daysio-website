import DaysDaidaiHeader from "@/components/days-daidai-header"
import DaysDaidaiFooter from "@/components/days-daidai-footer"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <DaysDaidaiHeader />

      {/* Integration Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              連携イメージ
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">DAYS-Daidai-の連携機能</h2>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              DAYS-Daidai-の連携機能では、受診者属性の取込や、健診結果の出力が出来ます。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/6dC7gB_kSgY?autoplay=1&mute=1&loop=1&playlist=6dC7gB_kSgY"
                title="DAYS-Daidai- 連携イメージ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <DaysDaidaiFooter />
    </div>
  )
}
