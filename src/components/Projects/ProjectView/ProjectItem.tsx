import { motion } from "framer-motion"
import { useState } from "react"

interface Props {
  projectTitle: string
  projectImage: string
  projectDescription: string
  projectTech: string[]
  projectGithub: string
  projectLive: string
}

const fadeOutAnimation = {
  opacity: 0,
  transition: {
    duration: 0.2, // Adjust the duration as needed
  },
};

const ProjectItem = ({ projectTitle, projectImage, projectDescription, projectTech, projectGithub, projectLive }: Props) => {
  const [trigger, setTrigger] = useState<boolean>(false)
  return (
    <motion.div className="project-item">
      {trigger ? (
        <motion.div
          onClick={() => setTrigger(!trigger)}
          className="description"
          whileTap={fadeOutAnimation}
        >
          <p>{projectDescription}</p>
        </motion.div>
      ) : (
        <motion.div
          onClick={() => setTrigger(!trigger)}
          whileTap={fadeOutAnimation}
        >
          <motion.div className="img-container">
            <img className="project-image" src={projectImage} alt=""/>
          </motion.div>
          <h2>{projectTitle}</h2>
          <div className="tech">
            {projectTech.map((tech, i) => (
              <img key={i} src={tech} alt="" />
            ))}
          </div>
        </motion.div>
      )}
      <div className="project-links">
        <motion.button whileHover={{ scale: 1.1 }}><a href={projectLive} target="_blank" rel="noopener noreferrer">Visit live Site</a></motion.button>
        <motion.button whileHover={{ scale: 1.1 }}><a href={projectGithub} target="_blank" rel="noopener noreferrer">View Code</a></motion.button>
      </div>
    </motion.div>
  )
}

export default ProjectItem