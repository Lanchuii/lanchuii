import ProjectView from './ProjectView'
import './projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="project-container">
        <div className="project-list">
          <h1>My Projects</h1>
          <div className=''>
            <p>1. Worship Scheduler</p>
            <p>2. Coding in Bacolod</p>
            <p>3. Expense Tracker</p>
          </div>
        </div>
        <ProjectView />
      </div>
    </div>
  )
}

export default Projects