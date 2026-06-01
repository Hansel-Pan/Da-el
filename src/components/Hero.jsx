export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-da-beige px-5 sm:px-6 pt-20 sm:pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-sans text-[10px] sm:text-sm tracking-[0.35em] uppercase text-da-brown mb-5 sm:mb-8">
          Lencería Consciente
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold text-da-black leading-none tracking-[-0.02em] sm:tracking-[-0.03em] mb-6 sm:mb-10">
          DA'EL
        </h1>
        <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-da-brown max-w-2xl mx-auto mb-8 sm:mb-12 font-light px-2 sm:px-0">
          Bienvenida a un espacio donde el diseño íntimo se convierte en una experiencia de autodescubrimiento, amor propio y expresión personal.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <a
            href="#collection"
            className="inline-block bg-da-black text-da-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase hover:bg-da-brown transition-colors"
          >
            Ver Colección
          </a>
          <a
            href="#contact"
            className="inline-block border border-da-brown text-da-brown px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase hover:bg-da-brown hover:text-da-white transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
