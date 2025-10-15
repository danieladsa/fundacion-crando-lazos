import { Card } from "@/components/ui/card"
import { Shield, Users, Heart, FileText } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">Nuestra Historia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Comprometidos con la Protección de la Niñez
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Fundación Creando Lazos es una institución acreditada por el{" "}
                <strong className="text-foreground">
                  Servicio de Protección Especializada a la Niñez y Adolescencia
                </strong>{" "}
                que nace en el año 2024 en la comuna de Quilpué.
              </p>
              <p className="text-lg">
                Surgimos de la reunión de tres profesionales que se desempeñaron en distintos cargos dentro de otra
                organización similar, uniendo nuestra experiencia y compromiso para crear un impacto positivo en nuestra
                comunidad.
              </p>
              <p className="text-lg">
                En primera instancia, Creando Lazos se ha comprometido a respetar fiel y cabalmente los derechos
                establecidos en la <strong className="text-foreground">Convención de los Derechos del Niño</strong>, así
                como a tomar acciones preventivas y correctivas respecto de la comisión de delitos que afecten a los
                niños, niñas y adolescentes.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              <Image
                src="/images/design-mode/logo.png"
                alt="Servicio Nacional de Protección Especializada"
                width={200}
                height={200}
                className="h-32 w-32 object-contain"
              />
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <a href="/documents/Conformación institución.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Conformación institución
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">Documentos oficiales disponibles</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 border-l-4 border-l-primary bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Protección Especializada</h3>
                  <p className="text-card-foreground/70 leading-relaxed">
                    Servicios acreditados para la protección integral de niños, niñas y adolescentes en situación de
                    vulnerabilidad.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Trabajo Comunitario</h3>
                  <p className="text-card-foreground/70 leading-relaxed">
                    Colaboramos con familias, grupos y comunidades para generar oportunidades de desarrollo y progreso
                    social.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Compromiso Social</h3>
                  <p className="text-card-foreground/70 leading-relaxed">
                    Trabajamos por una sociedad íntegra, igualitaria, equitativa y democrática para todos los niños y
                    niñas.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
