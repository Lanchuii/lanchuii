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
            <IoLogoGithub />
            <IoLogoLinkedin />
          </div>
          <h1>Lanz Montelibano</h1>
          <h2>Software Developer</h2>
          <div className="buttons">
          <a className='about-link' href='#About'><button onClick={()=>setSelected(1)}>About me</button></a>
          <a className='project-link' href='#Projects'><button onClick={()=>setSelected(2)} className='stuff'>Check out my Stuff</button></a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero