"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // メール本文を作成
    const emailBody =
      `【お名前】\n${formData.name}\n\n` +
      `【施設名・組織名】\n${formData.organization}\n\n` +
      `【メールアドレス】\n${formData.email}\n\n` +
      `【電話番号】\n${formData.phone || "未入力"}\n\n` +
      `【お問い合わせ内容】\n${formData.message || "未入力"}`

    // 件名とメール本文をURLエンコード
    const subject = encodeURIComponent("【DAYSIO】お問い合わせ")
    const body = encodeURIComponent(emailBody)

    // mailtoリンクを作成
    const mailtoLink = `mailto:info@daysio.co.jp?subject=${subject}&body=${body}`

    // メールクライアントを開く
    window.location.href = mailtoLink

    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "conversion", {
        send_to: "AW-780899147/qzU8CLaa5tYbEMumrvQC",
      })
    }

    // フォームをリセット
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      })
    }, 1000)
  }

  const handleCopy = async () => {
    const emailContent =
      `【お名前】\n${formData.name}\n\n` +
      `【施設名・組織名】\n${formData.organization}\n\n` +
      `【メールアドレス】\n${formData.email}\n\n` +
      `【電話番号】\n${formData.phone || "未入力"}\n\n` +
      `【お問い合わせ内容】\n${formData.message || "未入力"}`

    try {
      await navigator.clipboard.writeText(emailContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
    setFormData({
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
    })
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
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7c] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">お問い合わせ内容の確認</DialogTitle>
            <DialogDescription>
              以下の内容で受け付けました。info@daysio.co.jp へメールをお送りください。
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-muted-foreground">送信先</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText("info@daysio.co.jp")
                  }}
                >
                  コピー
                </Button>
              </div>
              <p className="text-lg font-mono">info@daysio.co.jp</p>
            </div>
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-muted-foreground">メール本文</p>
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  {copied ? "コピー済み ✓" : "コピー"}
                </Button>
              </div>
              <div className="text-sm space-y-2 whitespace-pre-wrap font-mono bg-background p-3 rounded border">
                <p>
                  <strong>【お名前】</strong>
                </p>
                <p>{formData.name}</p>
                <p className="pt-2">
                  <strong>【施設名・組織名】</strong>
                </p>
                <p>{formData.organization}</p>
                <p className="pt-2">
                  <strong>【メールアドレス】</strong>
                </p>
                <p>{formData.email}</p>
                <p className="pt-2">
                  <strong>【電話番号】</strong>
                </p>
                <p>{formData.phone || "未入力"}</p>
                <p className="pt-2">
                  <strong>【お問い合わせ内容】</strong>
                </p>
                <p>{formData.message || "未入力"}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1" onClick={handleCloseModal}>
                閉じる
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
