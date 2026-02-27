"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "送信に失敗しました。")
      }

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
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました。")
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
                  <div className="text-green-600 text-sm">送信が完了しました。お問い合わせありがとうございます。</div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">{errorMessage || "送信に失敗しました。もう一度お試しください。"}</div>
                )}

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
                  <Checkbox
                    id="privacy-policy-contact"
                    checked={agreedToPrivacy}
                    onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                    className="border-2 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="privacy-policy-contact" className="text-sm font-normal cursor-pointer flex-1">
                    <a href="/privacy-policy" target="_blank" className="text-primary underline hover:text-primary/80">
                      プライバシーポリシー
                    </a>
                    に同意して送信する <span className="text-red-500">*</span>
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700" disabled={isSubmitting || !agreedToPrivacy}>
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
