import ProjectData from "../../../shared/projectData"
import ProjectItem from "./ProjectItem"
import { motion } from "framer-motion"

const ProjectView = () => {

  return (
    <motion.div className="project-view">
      {ProjectData.map((data, i) => (
        <ProjectItem 
          key={i}
          projectTitle={data.title}
          projectImage={data.image}
          projectDescription={data.description}
          projectTech={data.tech}
          projectGithub={data.githubLink}
          projectLive={data.liveLink}
        />
      ))}
    </motion.div>
  )
}

export default ProjectView