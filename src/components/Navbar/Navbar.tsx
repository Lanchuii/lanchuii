import './navbar.scss'
import { motion, Variants } from 'framer-motion'
import NavItem from './NavItem'

const navItems = ["Home", "About", "Projects", "Tools"]

const variants: Variants = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  },
}

interface Props {
  selected: any
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

const Navbar = ({selected, setSelected}: Props) => {

  return (
    <div className="navbar">
      <motion.h2 variants={variants} initial='initial' animate='animate'>Lanchuii</motion.h2>
      <motion.div className='nav-items' variants={variants} initial='initial' animate='animate'>
        {navItems.map((item, i) => (
          <NavItem 
            key={i}
            text={item}
            selected={selected === i}
            onClick={()=>setSelected(i)}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Navbar