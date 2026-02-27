"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

async function hashEmail(email: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(email.toLowerCase().trim())
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

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
        body: JSON.stringify({
          name: formData.name,
          facility: formData.organization,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "送信に失敗しました。")
      }

      setSubmitStatus("success")

      if (typeof window !== "undefined" && (window as any).gtag) {
        hashEmail(formData.email).then((hashedEmail) => {
          ;(window as any).gtag("event", "conversion", {
            send_to: "AW-780899147/qzU8CLaa5tYbEMumrvQC",
            email: hashedEmail,
          })
        })
      }

      // フォームをリセット
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      })
      setAgreedToPrivacy(false)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-2 pb-10 sm:pt-4 sm:pb-16 scroll-mt-20">
      <div className="container max-w-5xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                まずは
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">無料相談</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-300 -z-0"></span>
                </span>
                から
                <br />
                始めませんか？
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                健診業務の効率化について、専門スタッフが丁寧にご説明いたします。お気軽にお問い合わせください。
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  1
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">お問い合わせ</h3>
                  <p className="text-sm text-muted-foreground">フォームからお気軽にご連絡ください</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  2
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">ヒアリング</h3>
                  <p className="text-sm text-muted-foreground">現状の課題やご要望をお聞かせください</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  3
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">デモ・ご提案</h3>
                  <p className="text-sm text-muted-foreground">実際の画面をご覧いただきながらご説明します</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">お名前 *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="山田 太郎"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="organization">施設名 *</Label>
                  <Input
                    id="organization"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="〇〇クリニック・〇〇病院"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">メールアドレス *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@clinic.jp"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">電話番号</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="03-1234-5678"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="ご質問やご要望をお聞かせください"
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-sm">送信が完了しました。お問い合わせありがとうございます。</div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">{errorMessage || "送信に失敗しました。もう一度お試しください。"}</div>
                )}

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
                  <Checkbox
                    id="privacy-policy-lp"
                    checked={agreedToPrivacy}
                    onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                    className="border-2 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="privacy-policy-lp" className="text-sm font-normal cursor-pointer flex-1">
                    <a href="/privacy-policy" target="_blank" className="text-primary underline hover:text-primary/80">
                      プライバシーポリシー
                    </a>
                    に同意して送信する <span className="text-red-500">*</span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7c] text-white"
                  disabled={isSubmitting || !agreedToPrivacy}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
