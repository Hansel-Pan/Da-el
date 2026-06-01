import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#mission', label: 'Filosofía' },
    { href: '#values', label: 'Valores' },
    { href: '#collection', label: 'Colección' },
    { href: '#contact', label: 'Contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-da-white/80 backdrop-blur-md border-b border-da-beige">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-lg sm:text-xl tracking-[0.3em] text-da-black">DA'EL</a>

        <button
          className="sm:hidden p-2 text-da-black"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex gap-8 text-sm tracking-widest uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-da-pink transition-colors">{l.label}</a>
          ))}
        </div>
      </div>

      {open && (
        <div className="sm:hidden bg-da-white border-b border-da-beige px-5 pb-5 pt-2 flex flex-col gap-4 text-sm tracking-widest uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-da-pink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
