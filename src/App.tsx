import './app.scss'
import { useState } from 'react'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

const App = () => {
  const [selected, setSelected] = useState<any>()

  return (
    <div>
      <section id="Home">
        <Navbar
          selected={selected}
          setSelected={setSelected}
        />
        <Hero 
          setSelected={setSelected}
        />
      </section>
      <section id="About" >
        <About 
        />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Tools">Tools</section>
      <section id="contact">Contact me</section>
    </div>
  )
}

export default App
