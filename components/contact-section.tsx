"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">Contáctanos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            ¿Necesitas Ayuda o Información?
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card">
            <form
              action="https://formspree.io/f/mqaywezn"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name">Nombre completo</label>
                <Input id="name" name="name" type="text" required placeholder="Tu nombre" />
              </div>

              <div>
                <label htmlFor="email">Correo electrónico</label>
                <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
              </div>

              <div>
                <label htmlFor="phone">Teléfono</label>
                <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" />
              </div>

              <div>
                <label htmlFor="message">Mensaje</label>
                <Textarea id="message" name="message" required placeholder="Tu mensaje..." rows={5} />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-5 w-5 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </Card>

          <div className="space-y-6 px-4 sm:px-0">
            <Card className="p-6 sm:p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">Ubicación</h3>
                  <p className="text-card-foreground/70 leading-relaxed">
                    Esmeralda 1554
                    <br />
                    Quilpué, Región de Valparaíso
                    <br />
                    Chile
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">Correo Electrónico</h3>
                  <a
                    href="mailto:contacto@creandolazos.cl"
                    className="text-card-foreground/70 hover:text-primary transition-colors break-words"
                  >
                    contacto@creandolazos.cl
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">Teléfono</h3>
                  <a href="tel:+56912345678" className="text-card-foreground/70 hover:text-primary transition-colors">
                    +56979658348
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
