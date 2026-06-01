import Carousel from './Carousel'
import collectionData from '../data/collection.json'
import img1 from '../assets/corset-silvi.jpeg'
import img2 from '../assets/panty-elle.jpeg'
import img3 from '../assets/vam-short.jpeg'

const imageMap = [img1, img2, img3]

export default function Collection() {
  const images = collectionData.images.map((item, i) => ({
    ...item,
    src: imageMap[i] || '',
  }))

  return (
    <section id="collection" className="py-16 sm:py-28 px-5 sm:px-6 bg-da-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-da-pink mb-3 sm:mb-4">Colección</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-da-black text-center mb-2 sm:mb-4">
          {collectionData.collection}
        </h2>
        <p className="text-center font-sans text-[10px] sm:text-sm tracking-[0.25em] uppercase text-da-brown mb-8 sm:mb-12">
          {collectionData.theme}
        </p>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <Carousel images={images} />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-da-pink mb-4 sm:mb-6 italic">
              &ldquo;{collectionData.tagline}&rdquo;
            </p>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-da-brown font-light">
              {collectionData.description}
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-block bg-da-black text-da-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase hover:bg-da-pink transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
