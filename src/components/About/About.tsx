import './about.scss'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const About = () => {
  return (
    <div className='about'>
      <motion.div className="about-container" variants={variants} initial="initial" whileInView="animate">
        <div className="text-container">
          <h2>Hi! I'm Lanz,</h2>
          <p>I'm a Computer Science graduate from University of Saint La Salle with a passion for programming and tenacity to learn. I have experience in front end and back end development using technologies like <span className='tech'>React, Node and Go</span>. Always eager to learn new things, solve problems and adapt to any circumstance.</p>
        </div>
        <div className="img-container">
          <img src="/hero.jpg" alt="" />
        </div>
      </motion.div>
    </div>
  )
}

export default About