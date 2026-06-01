import michelImg from '../assets/imagen-michel-1.jpeg'

export default function AboutMe() {
  return (
    <section id="about" className="py-16 sm:py-28 px-5 sm:px-6 bg-da-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="aspect-[3/4] rounded-sm overflow-hidden order-2 md:order-1">
          <img src={michelImg} alt="Michel Saab" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-da-pink mb-3 sm:mb-4">Sobre la fundadora</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-da-black mb-1 sm:mb-2 leading-tight">Michel Saab</h2>
          <p className="font-sans text-[10px] sm:text-sm tracking-widest uppercase text-da-brown mb-5 sm:mb-8">Tecnóloga en Gestión de la Moda</p>
          <div className="w-12 sm:w-16 h-px bg-da-pink mb-5 sm:mb-8"></div>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-da-brown mb-6 sm:mb-8 font-light">
            Transformo ideas en funcionalidad: precisión, detalle y compromiso en cada proceso que realizo, creando resultados de calidad que realmente cumplen su propósito.
          </p>
          <div className="bg-da-beige p-5 sm:p-8 rounded-sm mb-6 sm:mb-8">
            <h3 className="font-serif text-base sm:text-lg text-da-black mb-3 sm:mb-4">Formación</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-da-brown font-light">
              {[
                "Bachiller Técnico Comercial — I.E Nuestra Señora del Pilar",
                "Tecnología en Gestión de la Moda — UTS",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-da-pink rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg text-da-black mb-3 sm:mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {["Adaptabilidad", "Confección", "Proactividad", "Patronaje", "Resolución de problemas"].map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] sm:text-xs tracking-widest uppercase px-3 sm:px-4 py-1.5 sm:py-2 border border-da-pink/40 text-da-pink rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
