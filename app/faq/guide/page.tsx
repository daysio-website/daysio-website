import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import DaysDaidaiHeader from "@/components/days-daidai-header"
import DaysDaidaiFooter from "@/components/days-daidai-footer"

export default function GuideFAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DaysDaidaiHeader />

      <header className="bg-[#1e3a5f] text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/products/days-daidai#faq" className="inline-flex items-center text-sm mb-4 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            FAQに戻る
          </Link>
          <h1 className="text-4xl font-bold mb-4">その他ご利用ガイド</h1>
          <p className="text-lg text-gray-200">DAYS-Daidai-のご利用に関する重要事項をご確認ください。</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">著作権について</h2>
            <p className="text-gray-700">
              システムに掲載されている文章、ロゴ、写真、映像などの著作権は、すべて当社に帰属します。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">会員資格</h2>
            <p className="text-gray-700">
              会員登録ができる方は、医師、薬剤師、看護師、医療事務職員など医療関係者に限られるものとし、同一病院・クリニックでの会員登録は１アカウントとさせて頂きます。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">プランの申し込みについて</h2>
            <p className="text-gray-700 mb-3">
              購入申込の手続はご使用いただくサービス、カスタマイズの内容により、2週間ほどかかる場合があります。
            </p>
            <p className="text-gray-700 mb-3">
              手続が完了した時点でスタートキットをお送りします。スタートキットを設定の上、スマート健診クラウド
              DAYS-Daidai-のご利用ご使用を開始してください。
            </p>
            <p className="text-gray-700">スタートキットは初回購入時のみお送りさせていただきます。</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">お支払いについて</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>お支払い方法は、クレジットカード決済、口座振替がご利用いただけます</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>月額利用料はご使用月ごとに前払でお支払ください</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>お申込み月を含めて、最大２ヶ月間の準備期間を設けております</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>準備期間経過後に、お申し込みの初期費用及び月額利用料が請求開始となります</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">定額お支払いについて</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  スマート健診クラウド
                  DAYS-Daidai-の月額利用料は、一回の購入申し込みにより翌月以降も自動的に購入が継続されます
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>各プランを解約されるまでは、継続してクラウドサービスをご使用いただけます</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>申込月・解約月ともに月額利用料の日割りはありません</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">口座振替によるお支払いについて</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  口座振替依頼書は「 マイページ＞資料関連
                  」ページよりダウンロードし、必要事項をご記入の上、プランご購入後2週間以内にご郵送ください　※プラン利用開始につきましては、弊社にて口座振替依頼書を受領・確認後にご案内させていただきます
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  口座振替依頼書を弊社にて受領後、口座振替手続き完了までに1～2ヶ月程度かかるため、初回引落時に累計分を合わせて請求させていただきます
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>口座振替の場合には事務手数料（税込み330円）をご負担いただきます</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>事務手数料は毎月の月額利用料と合わせてお引き落しさせていただきます</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">クレジットカードによるお支払いについて</h2>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  クレジットカード会社が料金を弊社に立替払いし、クレジットカード会社からお客さまに請求するお支払い方法です
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>カード会社の定める約定決済日に自動振替されるためお支払い日が一定となります</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  翌月の月額利用料の引き落としはカードの決済日となります。詳しくは各カード会社にお問合せください
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>カード会社の定めるポイントサービスをお受けいただけます</span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3 mt-6">
              クレジットカードによるお支払いにあたってのご留意事項
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  クレジットカードの審査時において、お取扱いできない場合があります
                  <br />
                  ※その際はお取扱いできない旨をご通知するとともに、他のお支払い方法でお願いいたします
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>カード番号等を変更された場合は、別途お手続きが必要となります</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>カード会社からのご請求日およびカード利用明細のお届け時期はカード会社によって異なります</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">請求書について</h2>
            <p className="text-gray-700 mb-2">
              マイページ内の「 マイページ＞請求書／ご注文履歴
              」から、毎月のお支払いの請求書をダウンロードすることができます。
            </p>
            <p className="text-gray-700">※印刷が必要な場合は、ご利用の閲覧ソフトの印刷機能をご活用ください</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">プランの解約に関して</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4 text-center">
                解約スケジュール（例：9月末日で解約する場合）
              </h3>
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1 text-center">
                  <div className="bg-blue-500 text-white rounded-lg py-3 px-4 mb-2 font-bold">7月10日まで</div>
                  <p className="text-sm text-gray-700">解約申込</p>
                </div>
                <div className="flex-shrink-0 px-4">
                  <div className="border-t-2 border-blue-300 w-12"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-blue-400 text-white rounded-lg py-3 px-4 mb-2 font-bold">8月末日</div>
                  <p className="text-sm text-gray-700">
                    最後のお支払い
                    <br />
                    （9月分の料金）
                  </p>
                </div>
                <div className="flex-shrink-0 px-4">
                  <div className="border-t-2 border-blue-300 w-12"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-red-500 text-white rounded-lg py-3 px-4 mb-2 font-bold">9月末日</div>
                  <p className="text-sm text-gray-700">解約完了</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>重要：</strong>月額利用料は前払いです。解約を希望される場合は、解約希望月の
                <strong>2ヶ月前の10日まで</strong>にご連絡ください。
              </p>
            </div>
            <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">解約時の注意事項</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  各プランを解約される場合はお問い合わせページより解約希望の旨ご連絡ください。改めて解約申込ページをご案内します
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>解約の申請を受領した時点で弊社より確認のご連絡をさせていただきます</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  オプションにつきましては、システムの仕組上、解約できないものもございますので予めご了承をお願います
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>オプション解約をご希望の場合は、別途お問い合わせ下さい</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">退会について</h2>
            <p className="text-gray-700">
              プランを解約し、本サービス及びサイトから退会をご希望の方は、プランの解約の際に合わせて退会希望の旨お伝えください。
            </p>
          </div>
        </div>
      </main>

      <DaysDaidaiFooter />
    </div>
  )
}
