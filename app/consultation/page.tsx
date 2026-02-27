"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
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
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        interests: [],
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "送信中にエラーが発生しました。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">導入をご検討の方</CardTitle>
              <CardDescription className="space-y-2">
                <div>DAYS-Daidaiの導入に関するご相談やデモのご依頼を承っております。</div>
                <div>下記フォームにご記入の上、送信してください。</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      氏名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      placeholder="山田 太郎"
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      会社名(施設名) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      required
                      placeholder="○○病院"
                      className="bg-white border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      メールアドレス <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      placeholder="example@hospital.com"
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      電話番号 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                      placeholder="03-1234-5678"
                      className="bg-white border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-semibold">★ご希望の内容にチェックを入れてください★</Label>
                  <div className="space-y-3">
                    {["機能に関して質問したい(電話orビデオ通話)", "デモをしてほしい(ビデオ通話)", "その他"].map(
                      (option) => (
                        <div key={option} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
                          <Checkbox
                            id={option}
                            checked={formData.interests.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                            className="border-2 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor={option} className="text-sm font-normal cursor-pointer flex-1">
                            {option}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">自由記入欄</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="ご質問やご要望がございましたら、こちらにご記入ください。"
                    rows={4}
                    className="bg-white border-gray-300"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    送信が完了しました。担当者より折り返しご連絡いたします。
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border">
                  <Checkbox
                    id="privacy-policy"
                    checked={agreedToPrivacy}
                    onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                    className="border-2 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="privacy-policy" className="text-sm font-normal cursor-pointer flex-1">
                    <a href="/privacy-policy" target="_blank" className="text-primary underline hover:text-primary/80">
                      プライバシーポリシー
                    </a>
                    に同意して送信する <span className="text-red-500">*</span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.company ||
                    !formData.email ||
                    !formData.phone ||
                    !agreedToPrivacy
                  }
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
