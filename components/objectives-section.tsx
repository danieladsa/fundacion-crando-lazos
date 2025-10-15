import { Card } from "@/components/ui/card"
import { Target, GraduationCap, HeartPulse, Scale } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      icon: Target,
      title: "Protección de Derechos",
      description: "Garantizar el respeto y cumplimiento de los derechos fundamentales de la niñez.",
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Promover el acceso a educación de calidad y oportunidades de aprendizaje.",
    },
    {
      icon: HeartPulse,
      title: "Salud",
      description: "Asegurar el bienestar físico y mental de niños, niñas y adolescentes.",
    },
    {
      icon: Scale,
      title: "Derechos Humanos",
      description: "Defender y promover los derechos humanos en todas nuestras acciones.",
    },
  ]

  return (
    <section id="objetivos" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-semibold text-sm">Nuestros Objetivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
            Generando Impacto de Vida
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            Otorgando nuevas oportunidades para el desarrollo y progreso social de familias, grupos y comunidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-t-primary"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{objective.title}</h3>
                  <p className="text-sm text-card-foreground/70 leading-relaxed">{objective.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
