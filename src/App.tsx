import './app.scss'
import { useState } from 'react'
import ProjectData from "./shared/projectData"
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Tools from './components/Tools/Tools'

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
        {ProjectData.map((project, i) => (
          <Projects
            key={i}
            projectTitle={project.title}
            projectImage={project.image}
            projectDescription={project.description}
            projectTech={project.tech}
            projectGithub={project.githubLink}
            projectLive={project.liveLink}
          />
        ))}
      <section id="Tools">
        <Tools />
      </section>
    </div>
  )
}

export default App
