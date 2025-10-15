export function TeamSection() {
  const team = [
    {
      name: "Marcela Bustamante Ríos",
      role: "Presidente de Directorio",
      profession: "Administradora Pública",
      initials: "MB",
      color: "#ff9c39", // Using foundation orange color
    },
    {
      name: "Valentina Larraín Carvajal",
      role: "Tesorera de Directorio",
      profession: "Trabajadora Social",
      initials: "VL",
      color: "#7C9C7F", // Using foundation green color
    },
    {
      name: "Kristhel Flores Cuevas",
      role: "Secretaria de Directorio",
      profession: "Terapeuta Ocupacional",
      initials: "KF",
      color: "#4786B8", // Using foundation blue color
    },
  ]

  return (
    <section id="equipo" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent-foreground font-semibold text-sm">Nuestro Equipo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Directorio Fundación Creando Lazos
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            Profesionales comprometidos con la protección y el desarrollo integral de niños, niñas y adolescentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-border"
            >
              <div className="flex items-center justify-center py-12 bg-gradient-to-br from-muted to-muted/50">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
              </div>
              <div className="p-6 bg-background text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.role}</p>
                <p className="text-foreground/70">{member.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
