import { Phone } from "lucide-react"

const PHONE_NUMBER = "tel:+32474439553"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-black tracking-tight text-primary-foreground text-balance md:text-5xl">
          {"En panne ? Appelez-nous maintenant !"}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          {"Notre equipe est prete a intervenir 24h/24 a Liege, Seraing et dans toute la region."}
        </p>
        <a
          href={PHONE_NUMBER}
          className="inline-flex items-center gap-3 rounded-xl bg-secondary px-10 py-5 text-xl font-bold text-secondary-foreground shadow-2xl transition-all hover:brightness-110 active:scale-95"
        >
          <Phone className="h-6 w-6" />
          +32 474 43 95 53
        </a>
      </div>
    </section>
  )
}
