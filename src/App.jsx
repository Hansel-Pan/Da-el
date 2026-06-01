import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import MissionVision from './components/MissionVision'
import BrandValues from './components/BrandValues'
import Collection from './components/Collection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-da-brown bg-da-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <MissionVision />
      <BrandValues />
      <Collection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
