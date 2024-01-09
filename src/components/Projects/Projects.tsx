import ProjectView from './ProjectView/ProjectView'
import './projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Check out my stuff!</h1>
      <div className="project-container">
        <ProjectView />
      </div>
    </div>
  )
}

export default Projects