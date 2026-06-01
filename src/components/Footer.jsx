export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-5 sm:px-6 bg-da-black border-t border-da-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="font-serif text-base sm:text-lg tracking-[0.3em] text-da-white">DA'EL</p>
        <p className="font-sans text-[10px] sm:text-xs text-da-beige/50 tracking-widest uppercase text-center sm:text-left">
          &copy; {new Date().getFullYear()} Da'EL. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
