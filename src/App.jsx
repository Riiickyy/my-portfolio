import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechStrip from './components/TechStrip.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Testimonials from './components/Testimonials.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectModal from './components/ProjectModal.jsx'

export default function App() {
  // The project or case study currently shown in the modal (null = closed)
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <Projects onOpen={setSelected} />
        <CaseStudies onOpen={setSelected} />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </>
  )
}
