import './hero.scss'
import { motion } from 'framer-motion'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

const Hero = ({setSelected}: Props) => {

  return (
    <motion.div className='hero'>
      <div className='wrapper'>
        <motion.div className="img-container" initial={{x: -400, opacity:0}} animate={{x: 0, opacity:1}} transition={{duration:1}}>
          <img src="/hero.jpg" alt="" />
        </motion.div>
        <motion.div className="text-container" initial={{x: 400, opacity:0}} animate={{x: 0, opacity:1}} transition={{duration:1}}>
          <div className="logos">
            <button className='profile-icon'><a href="https://github.com/Lanchuii" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a></button>
            <button className='profile-icon'><a href="https://www.linkedin.com/in/lanz-montelibano-82ab87241/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a></button>
          </div>
          <h1>Lanz Montelibano</h1>
          <h2>Software Developer</h2>
          <div className="buttons">
          <a className='about-link' href='#About'><motion.button onClick={()=>setSelected(1)} whileHover={{scale: 1.1}} whileTap={{scale:0.9}}>About me</motion.button></a>
          <a className='project-link' href='#Projects'><motion.button onClick={()=>setSelected(2)} className='stuff' whileHover={{scale: 1.1}} whileTap={{scale:0.9}}>Check out my Stuff</motion.button></a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero