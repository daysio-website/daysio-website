import { Button } from "@/components/ui/button"

export function MidCTA() {
  return (
    <section className="bg-[#1e3a5f] py-10 sm:py-14 px-4">
      <div className="container max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <p className="text-sm sm:text-base font-medium text-blue-200 tracking-wide">
          550以上の医療施設が選んだクラウド健診システム
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          初期費用0円・最短1週間で
          <br />
          導入できます
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-amber-400 hover:bg-amber-300 text-[#1e3a5f] font-bold text-base sm:text-lg px-8 py-6 rounded-xl shadow-lg"
        >
          <a href="#contact">無料相談はこちら →</a>
        </Button>
        <p className="text-xs text-blue-300">
          相談・資料請求は完全無料。しつこい営業は一切ありません。
        </p>
      </div>
    </section>
  )
}
