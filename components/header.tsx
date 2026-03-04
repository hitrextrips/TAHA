"use client"

import { Phone, Clock, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const PHONE_NUMBER = "tel:+32474439553"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-lg">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2 text-sm font-medium md:justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Urgence 24h/7j</span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Phone className="h-4 w-4" />
            <span>+32 474 43 95 53</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="TAHA Logo" width={100} height={100} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight">TAHA</span>
            <span className="text-xs leading-tight text-muted-foreground">{"Depannage & Remorquage"}</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#services" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#pourquoi" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">
            Pourquoi nous
          </Link>
          <Link href="#contact" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">
            Contact
          </Link>
          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Appeler maintenant
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-secondary-foreground/10 bg-secondary px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-secondary-foreground/80"
            >
              Services
            </Link>
            <Link
              href="#pourquoi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-secondary-foreground/80"
            >
              Pourquoi nous
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-secondary-foreground/80"
            >
              Contact
            </Link>
            <a
              href={PHONE_NUMBER}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
