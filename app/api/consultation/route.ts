import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, interests, message } = body

    // バリデーション
    if (!name || !company || !email || !phone) {
      return NextResponse.json({ error: "必須項目が入力されていません。" }, { status: 400 })
    }

    const subject = `導入検討_DAYSIO_${interests.join("・")}`
    const textBody = `
【お問い合わせ内容】

氏名: ${name}
会社名(施設名): ${company}
メールアドレス: ${email}
電話番号: ${phone}

ご希望の内容:
${interests.map((interest: string) => `・${interest}`).join("\n")}

自由記入欄:
${message || "なし"}
    `.trim()

    // Resend APIでメール送信
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("[v0] RESEND_API_KEY is not set")
      return NextResponse.json({ error: "メール送信の設定が完了していません。" }, { status: 500 })
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DAYSIO お問い合わせ <onboarding@resend.dev>",
        to: ["ec-support@kenshin-cloud.com"],
        reply_to: email,
        subject: subject,
        text: textBody,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json()
      console.error("[v0] Resend API error:", errorData)
      return NextResponse.json({ error: "メール送信に失敗しました。" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "送信が完了しました。" })
  } catch (error) {
    console.error("[v0] Consultation form error:", error)
    return NextResponse.json({ error: "送信中にエラーが発生しました。" }, { status: 500 })
  }
}
