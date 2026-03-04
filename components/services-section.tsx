import { Truck, Battery, KeyRound, ArrowRightLeft } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Truck,
    title: "Remorquage toutes distances",
    description:
      "Transport de votre vehicule, qu'il soit en panne ou accidente, vers la destination de votre choix. Service disponible pour courtes et longues distances.",
    image: "/images/service-towing.jpg",
  },
  {
    icon: Battery,
    title: "Depannage batterie",
    description:
      "Demarrage de votre vehicule en cas de batterie a plat. Diagnostic rapide et remplacement si necessaire.",
    image: "/images/service-battery.jpg",
  },
  {
    icon: KeyRound,
    title: "Ouverture de porte",
    description:
      "Cles oubliees dans la voiture ? Notre equipe intervient rapidement pour ouvrir votre vehicule sans dommage.",
    image: "/images/service-lockout.jpg",
  },
  {
    icon: ArrowRightLeft,
    title: "Transport de vehicules",
    description:
      "Transport securise de voitures et motos pour demenagement, achat ou vente de vehicule. Service sur mesure.",
    image: "/images/service-transport.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            Nos services
          </span>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground text-balance md:text-5xl">
            {"Une solution pour chaque situation"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {"Que vous soyez en panne, accidente ou que vous ayez besoin de transporter un vehicule, nous sommes la pour vous aider."}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/40" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
