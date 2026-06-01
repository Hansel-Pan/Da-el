export default function MissionVision() {
  return (
    <section id="mission" className="py-16 sm:py-28 px-5 sm:px-6 bg-da-brown">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-da-beige/70 mb-3 sm:mb-4">Filosofía</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-da-white text-center mb-10 sm:mb-16">Misión & Visión</h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
          <div className="bg-da-white/10 backdrop-blur-sm p-6 sm:p-10 rounded-sm">
            <h3 className="font-serif text-xl sm:text-2xl text-da-white mb-4 sm:mb-6">Misión</h3>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-da-beige/90 font-light">
              Consolidarnos como una marca referente en lencería consciente, transformando la manera en que las mujeres perciben y usan estas prendas: pasando de la validación externa al empoderamiento personal. Aspiramos a impactar positivamente su relación con su cuerpo, posicionando la comodidad, la libertad y la expresión individual como pilares de la belleza femenina.
            </p>
          </div>
          <div className="bg-da-white/10 backdrop-blur-sm p-6 sm:p-10 rounded-sm">
            <h3 className="font-serif text-xl sm:text-2xl text-da-white mb-4 sm:mb-6">Visión</h3>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-da-beige/90 font-light">
              Ser una marca reconocida por redefinir la lencería femenina, donde la comodidad, la sensualidad y la autenticidad coexisten en equilibrio. Buscamos inspirar a las mujeres a reconectar con su cuerpo desde el amor propio, promoviendo una visión de la belleza más libre, consciente y personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
