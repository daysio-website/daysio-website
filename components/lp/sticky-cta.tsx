"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [nearContact, setNearContact] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
      const contact = document.getElementById("contact")
      if (contact) {
        const rect = contact.getBoundingClientRect()
        setNearContact(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible || nearContact) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur border-t border-border shadow-lg md:hidden">
      <Button
        asChild
        size="lg"
        className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7c] text-white font-bold text-base"
      >
        <a href="#contact">無料相談はこちら →</a>
      </Button>
    </div>
  )
}
