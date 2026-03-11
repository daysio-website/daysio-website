"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interests: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, value],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((item) => item !== value),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "送信に失敗しました。")
      }

      setSubmitStatus("success")

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-780899147/qzU8CLaa5tYbEMumrvQC",
          email: formData.email,
        })
      }

      // フォームをリセット
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        interests: [],
        message: "",
      })
      setAgreedToPrivacy(false)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "送信中にエラーが発生しました。")
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lp-name">お名前 *</Label>
                    <Input
                      id="lp-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="山田 太郎"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lp-company">施設名 *</Label>
                    <Input
                      id="lp-company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="〇〇クリニック・〇〇病院"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lp-email">メールアドレス *</Label>
                    <Input
                      id="lp-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@clinic.jp"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lp-phone">電話番号 *</Label>
                    <Input
                      id="lp-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03-1234-5678"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Label className="font-semibold">ご希望の内容にチェックを入れてください</Label>
                  <div className="space-y-2">
                    {["機能に関して質問したい(電話orビデオ通話)", "デモをしてほしい(ビデオ通話)", "その他"].map(
                      (option) => (
                        <div key={option} className="flex items-center space-x-2 p-2 bg-muted/50 rounded border">
                          <Checkbox
                            id={`lp-${option}`}
                            checked={formData.interests.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                            disabled={isSubmitting}
                            className="border-2 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor={`lp-${option}`} className="text-sm font-normal cursor-pointer flex-1">
                            {option}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="lp-message">自由記入欄</Label>
                  <Textarea
                    id="lp-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="ご質問やご要望がございましたら、こちらにご記入ください。"
                    rows={3}
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    送信が完了しました。担当者より折り返しご連絡いたします。
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded border">
                  <Checkbox
                    id="lp-privacy-policy"
                    checked={agreedToPrivacy}
                    onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                    disabled={isSubmitting}
                    className="border-2 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="lp-privacy-policy" className="text-sm font-normal cursor-pointer flex-1">
                    <a href="/privacy-policy" target="_blank" className="text-primary underline hover:text-primary/80">
                      プライバシーポリシー
                    </a>
                    に同意して送信する *
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7c] text-white"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.company ||
                    !formData.email ||
                    !formData.phone ||
                    !agreedToPrivacy
                  }
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
