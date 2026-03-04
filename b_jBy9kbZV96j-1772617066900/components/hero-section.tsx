import { Phone, MapPin, Shield } from "lucide-react"
import Image from "next/image"

const PHONE_NUMBER = "tel:+32474439553"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-towing.jpg"
          alt="Service de remorquage professionnel"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
            <Shield className="h-4 w-4" />
            Disponible 24h/24, 7j/7
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl">
            {"Depannage et Remorquage "}
            <span className="text-primary">{"Rapide"}</span>
            {" a Liege"}
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-secondary-foreground/70 text-pretty md:text-xl">
            {"Intervention professionnelle pour voitures et motos. Disponible 24h/24 a Liege, Seraing et les environs."}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_NUMBER}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:brightness-110 active:scale-95"
            >
              <Phone className="h-5 w-5" />
              Appeler maintenant
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-secondary-foreground/20 px-8 py-4 text-lg font-semibold text-secondary-foreground transition-all hover:border-primary hover:text-primary"
            >
              Nos services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-secondary-foreground/60">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {"Liege & Seraing"}
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              Service professionnel
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Intervention rapide
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
