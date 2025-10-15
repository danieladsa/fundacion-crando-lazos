"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-fundacion.png"
              alt="Fundación Creando Lazos"
              width={60}
              height={60}
              className="h-14 w-14 sm:h-16 sm:w-16"
            />
            {/* </CHANGE> */}
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-primary leading-tight">Fundación</span>
              <span className="text-lg sm:text-xl font-bold text-primary leading-tight">Creando Lazos</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("objetivos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Objetivos
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Equipo
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border/40">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("objetivos")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Objetivos
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Equipo
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contacto
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
