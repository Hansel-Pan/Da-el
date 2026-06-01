import { useState, useEffect, useCallback, useRef } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const length = images.length
  const touchX = useRef(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length)
  }, [length])

  useEffect(() => {
    if (isPaused || length <= 1) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [isPaused, length, next])

  const handleTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchX.current === null) return
    const diff = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    touchX.current = null
  }

  if (length === 0) {
    return (
      <div className="aspect-[4/5] bg-da-beige rounded-sm flex items-center justify-center">
        <p className="text-xs tracking-widest uppercase text-da-brown/40">Sin imágenes</p>
      </div>
    )
  }

  return (
    <div
      className="relative aspect-[4/5] bg-da-beige rounded-sm overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, index) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
        >
          {img.src ? (
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              draggable="false"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-da-brown/40 p-8">
              <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs tracking-widest uppercase mb-1">{img.title}</span>
              <span className="text-[10px] tracking-wider text-da-brown/30">{img.description}</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-da-black/40 to-transparent p-4 sm:p-6 pt-8 sm:pt-12">
            <p className="text-da-white text-xs sm:text-sm font-serif">{img.title}</p>
            <p className="text-da-beige/70 text-[10px] sm:text-xs font-light">{img.description}</p>
          </div>
        </div>
      ))}

      {length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-da-white/80 backdrop-blur-sm flex items-center justify-center text-da-black opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-da-white"
            aria-label="Anterior"
          >
            <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-da-white/80 backdrop-blur-sm flex items-center justify-center text-da-black opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-da-white"
            aria-label="Siguiente"
          >
            <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === current
                  ? 'bg-da-white w-4 sm:w-6'
                  : 'bg-da-white/50 hover:bg-da-white/80 w-1.5 sm:w-2'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
