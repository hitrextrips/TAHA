import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
               <Image src="/logo.jpeg" alt="TAHA Logo" width={100} height={100} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">TAHA</span>
                <span className="text-xs leading-tight text-secondary-foreground/50">{"Depannage & Remorquage"}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondary-foreground/60">
              {"Service de depannage et remorquage professionnel a Liege et Seraing. Disponible 24h/24, 7j/7."}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+32474439553"
                className="flex items-center gap-3 text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +32 474 43 95 53
              </a>
              <a
                href="mailto:tachrift83@gmail.com"
                className="flex items-center gap-3 text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                tachrift83@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Rue Waleffe 55, 4101 Seraing, Belgique</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="#services" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                Nos services
              </Link>
              <Link href="#pourquoi" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                Pourquoi nous choisir
              </Link>
              <Link href="#contact" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-secondary-foreground/40 md:flex-row">
          <p>{"© 2026 TAHA Depannage et Remorquage. Tous droits reserves."}</p>
          <p>{"TVA : BE1034.759.970"}</p>
        </div>
      </div>
    </footer>
  )
}
