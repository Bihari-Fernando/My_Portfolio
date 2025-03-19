import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {


  return (
    <>
      <SpeedInsights />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
