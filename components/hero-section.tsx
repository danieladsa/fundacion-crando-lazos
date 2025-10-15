"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo-hero-gITvtkxLeJkg7H67CJOlvIc2oYh0KN.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-8 w-8 text-[#ff9c39] fill-[#ff9c39]" />
            <span className="text-primary-foreground/90 font-medium text-lg">
              Protegiendo el futuro de nuestra comunidad
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
            Creando Lazos para un Futuro Mejor
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/95 mb-8 leading-relaxed text-pretty">
            Fundación acreditada dedicada a la protección especializada de niños, niñas y adolescentes en Quilpué,
            Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#ff9c39] text-white hover:bg-[#ff9c39]/90 text-lg px-8 font-semibold"
            >
              Contáctanos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("nosotros")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-[#7C9C7F] text-white border-[#7C9C7F] hover:bg-[#7C9C7F]/90 text-lg px-8 font-semibold"
            >
              Conoce más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
