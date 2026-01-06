"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    facility: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const mailtoLink = `mailto:info@daysio.co.jp?subject=お問い合わせ_DAYSIO_info&body=お名前: ${formData.name}%0D%0A施設名: ${formData.facility}%0D%0Aメールアドレス: ${formData.email}%0D%0A電話番号: ${formData.phone}%0D%0A%0D%0Aお問い合わせ内容:%0D%0A${formData.message}`

      window.open(mailtoLink, "_blank")
      setSubmitStatus("success")

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-780899147/qzU8CLaa5tYbEMumrvQC",
          email: formData.email, // 拡張コンバージョン用にメールアドレスをハッシュ化して送信
        })
      }

      // フォームをリセット
      setFormData({
        name: "",
        facility: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">お気軽にお問い合わせください</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            専門スタッフが貴院のニーズに合わせた最適なソリューションをご提案いたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-2 border-dashed border-muted-foreground/30 flex flex-col justify-center min-h-[500px]">
            <CardHeader className="text-center">
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>下記フォームよりお気軽にお問い合わせください。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="お名前"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-300"
                  />
                  <Input
                    name="facility"
                    placeholder="施設名"
                    value={formData.facility}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                </div>
                <Input
                  name="email"
                  placeholder="メールアドレス"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300"
                />
                <Input
                  name="phone"
                  placeholder="電話番号"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300"
                />
                <Textarea
                  name="message"
                  placeholder="お問い合わせ内容"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300"
                />

                {submitStatus === "success" && (
                  <div className="text-green-600 text-sm">メールアプリが開きます。送信を完了してください。</div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">送信に失敗しました。もう一度お試しください。</div>
                )}

                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700" disabled={isSubmitting}>
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold mb-3">本社アクセス</h4>
              <div className="space-y-3">
                <div className="text-muted-foreground">
                  <div className="font-medium">本社所在地</div>
                  <div>東京都豊島区南池袋2-30-12 BITビル</div>
                </div>
                <Button asChild className="w-full bg-slate-800 hover:bg-slate-700">
                  <a
                    href="https://www.google.com/maps/search/東京都豊島区南池袋2丁目30-12+BITビル/@35.7280,139.7108,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Mapで開く
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ先</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">本社</div>
                  <div className="text-muted-foreground">〒171-0022</div>
                  <div className="text-muted-foreground">東京都豊島区南池袋2-30-12 BITビル</div>
                  <div className="text-muted-foreground">TEL: 03-3985-9256</div>
                  <div className="text-muted-foreground">FAX: 03-3985-9268</div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 text-white border-slate-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">無料デモ実施中</h4>
                <p className="text-sm mb-4 opacity-90">
                  実際のシステムをご体験いただけます。お気軽にお申し込みください。
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0"
                  asChild
                >
                  <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                    デモを申し込む
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
