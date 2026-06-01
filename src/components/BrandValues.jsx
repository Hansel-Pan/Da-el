const values = [
  { num: "01", title: "Cercanía con la mujer", desc: "Creemos en una relación auténtica y cercana, donde cada mujer se sienta escuchada, comprendida y representada." },
  { num: "02", title: "Honestidad", desc: "Transparencia en cada proceso, desde la selección de materiales hasta la comunicación con nuestra comunidad." },
  { num: "03", title: "Calidad y cuidado en los detalles", desc: "Cada costura, cada tejido y cada acabado son el resultado de un compromiso inquebrantable con la excelencia." },
  { num: "04", title: "Respeto por la individualidad", desc: "Celebramos la diversidad de cuerpos, gustos e historias. Cada mujer es única y su lencería también debería serlo." },
  { num: "05", title: "Compromiso", desc: "Compromiso con nuestras mujeres, con el medio ambiente y con la construcción de una moda más consciente y humana." },
]

export default function BrandValues() {
  return (
    <section id="values" className="py-16 sm:py-28 px-5 sm:px-6 bg-da-beige">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-da-pink mb-3 sm:mb-4">Nuestra esencia</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-da-black text-center mb-10 sm:mb-16">Valores de Marca</h2>
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {values.map((item) => (
            <div key={item.num} className="flex gap-4 sm:gap-6 items-start group">
              <span className="font-serif text-2xl sm:text-4xl text-da-pink/30 font-bold min-w-[2.5rem] sm:min-w-[4rem]">{item.num}</span>
              <div className="border-b border-da-pink/20 pb-5 sm:pb-8 w-full group-last:border-b-0">
                <h3 className="font-serif text-base sm:text-xl text-da-black mb-1 sm:mb-2">{item.title}</h3>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-da-brown font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-da-white p-6 sm:p-10 rounded-sm text-center max-w-2xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-da-pink mb-3 sm:mb-4">Propuesta de Valor</p>
          <p className="font-serif text-base sm:text-lg md:text-xl text-da-black leading-relaxed italic">
            &ldquo;Lencería de lujo accesible que combina diseño romántico y comodidad real, creada para que te sientas segura, auténtica y en conexión contigo misma, para sentirte realmente tú.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
