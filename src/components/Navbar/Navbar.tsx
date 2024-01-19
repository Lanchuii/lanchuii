import './navbar.scss'
import { motion, Variants } from 'framer-motion'
import NavItem from './NavItem'
import Sidebar from './Sidebar';

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

const Navbar = ({ selected, setSelected }: Props) => {

  return (
    <motion.div className="navbar" variants={variants} initial='initial' animate='animate'>
      <motion.h2>Lanchuii</motion.h2>
      <motion.div className='nav-items'>
        {navItems.map((item, i) => (
          <NavItem
            key={i}
            text={item}
            selected={selected === i}
            onClick={() => setSelected(i)}
          />
        ))}
      </motion.div>
      <Sidebar navItems={navItems} />
    </motion.div>
  )
}

export default Navbar