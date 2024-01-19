import { motion } from 'framer-motion'
import './projects.scss'

interface Props {
  projectTitle: string
  projectImage: string
  projectDescription: string
  projectTech: string[]
  projectGithub: string
  projectLive: string
}

const Projects = ({ projectTitle, projectImage, projectDescription, projectTech, projectGithub, projectLive }: Props) => {
  const containerStyle = {
    background: `url('${projectImage}') no-repeat center / cover`,
  };

  return (
    <section className='projects' id='Projects'>
      <motion.div
        className="project-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
        <div className="img-container" style={containerStyle}>
        </div>
        <motion.div className="project-info">
          <h1>{projectTitle}</h1>
          <div className="tech">
            {projectTech.map((tech, i) => (
              <motion.img
                src={tech}
                alt=""
                key={i}
                initial={{ opacity: 0, translateY: -40 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
          </div>
          <p>{projectDescription}</p>
          <div className="project-links">
            <motion.button whileHover={{ scale: 1.1 }}>
              <a href={projectLive} target="_blank" rel="noopener noreferrer">Visit live Site</a>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <a href={projectGithub} target="_blank" rel="noopener noreferrer">View Code</a>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects