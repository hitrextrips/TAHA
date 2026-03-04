"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

const PHONE_NUMBER = "tel:+32474439553"

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-4 transition-all duration-300 md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <a
        href={PHONE_NUMBER}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 text-lg font-bold text-primary-foreground shadow-2xl transition-all active:scale-95"
        aria-label="Appeler TAHA Depannage"
      >
        <Phone className="h-6 w-6 animate-pulse" />
        Appeler maintenant
      </a>
    </div>
  )
}
