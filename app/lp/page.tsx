export const metadata = {
  title: "LP TEST PAGE | DAYS-Daidai",
  description: "テストページ",
}

export default function LPPage() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">これはLPページです</h1>
        <p className="text-xl mb-4">URLパス: /lp</p>
        <p className="text-lg mb-4">このページが表示されていれば、LPルーティングは正しく動作しています。</p>
        <div className="bg-amber-100 p-4 rounded border-2 border-amber-500">
          <p className="font-semibold">もしメインサイトが表示されている場合:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>ブラウザのキャッシュをクリアしてください</li>
            <li>ハードリロード（Ctrl+Shift+R / Cmd+Shift+R）を試してください</li>
            <li>パブリッシュ後の本番環境で確認してください</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
