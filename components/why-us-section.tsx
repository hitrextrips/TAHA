import { Clock, Shield, MapPin, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Jour et nuit, weekends et jours feries, nous sommes toujours prets a intervenir.",
  },
  {
    icon: MapPin,
    title: "Intervention locale rapide",
    description: "Bases a Seraing, nous couvrons Liege et toute la region en un temps record.",
  },
  {
    icon: Shield,
    title: "Service professionnel",
    description: "Equipe qualifiee et equipement moderne pour un service de qualite.",
  },
  {
    icon: ThumbsUp,
    title: "Tarifs transparents",
    description: "Pas de surprises : nos tarifs sont clairs et communiques avant toute intervention.",
  },
]

export function WhyUsSection() {
  return (
    <section id="pourquoi" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            Pourquoi nous choisir
          </span>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-secondary-foreground text-balance md:text-5xl">
            {"La confiance avant tout"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary-foreground/60">
            {"Des centaines d'automobilistes nous font confiance a Liege et Seraing."}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-8 text-center transition-all hover:border-primary/30 hover:bg-secondary-foreground/10"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-secondary-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary-foreground/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
