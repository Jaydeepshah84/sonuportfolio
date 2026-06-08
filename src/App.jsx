import { useEffect } from 'react'
import { initSmoothScroll, destroySmoothScroll, ScrollTrigger } from './lib/smoothScroll'

import Sprite from './components/Sprite'
import Background from './components/Background'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Quote from './components/Quote'
import Interests from './components/Interests'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = initSmoothScroll()
    // Make sure ScrollTrigger measures correctly after the first paint.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => {
      cancelAnimationFrame(id)
      destroySmoothScroll(lenis)
    }
  }, [])

  return (
    <>
      <Sprite />
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Process />
        <Skills />
        <Tools />
        <Achievements />
        <Testimonials />
        <Quote />
        <Interests />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
