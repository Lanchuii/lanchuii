import { motion } from 'framer-motion'

interface Props {
  navItems: string[]
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 40,
    opacity: 0
  }
}

const Links = ({navItems, setOpenSidebar} : Props) => { 
  return (
    <motion.div className='links' variants={variants}>
      {navItems.map(item=>(
        <motion.a 
          href={`#${item}`} 
          key={item} 
          variants={itemVariants} 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.95}}
          onClick={()=>setOpenSidebar(prev=>!prev)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links