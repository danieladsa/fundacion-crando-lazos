import Image from "next/image"
import { Heart, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-fundacion.png"
                alt="Fundación Creando Lazos"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              {/* </CHANGE> */}
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Fundación</span>
                <span className="text-lg font-bold leading-tight">Creando Lazos</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Comprometidos con la protección y el desarrollo integral de niños, niñas y adolescentes en Quilpué.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#objetivos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Objetivos
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Documentos Oficiales</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/documents/2.0 MPD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Manual de Prevención del Delito</span>
                </a>
              </li>
               <li>
                <a
                  href="/documents/Modelo prevención del delito.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Modelo Prevención del Delito</span>
                </a>
              </li>
              <li>
                <a
                  href="/documents/Organigrama.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Organigrama</span>
                </a>
              </li>
              <li>
                <a
                  href="/documents/Conformación institución.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Conformación institución</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-semibold">Dirección:</span>
                <span>Esmeralda 1554, Quilpué</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:contacto@creandolazos.cl" className="hover:text-primary-foreground transition-colors">
                  direccion@fundacioncreandolazos.cl 
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Teléfono:</span>
                <a href="tel:+56912345678" className="hover:text-primary-foreground transition-colors">
                  +56979658348
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Acreditación</h3>
            <Image
              src="/images/design-mode/logo.png"
              alt="Servicio Nacional de Protección Especializada"
              width={150}
              height={150}
              className="h-24 w-24 object-contain mb-4"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Fundación acreditada por el Servicio de Protección Especializada a la Niñez y Adolescencia
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © 2025 Fundación Creando Lazos. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 fill-accent text-accent" />
              <span>en Quilpué, Chile</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
