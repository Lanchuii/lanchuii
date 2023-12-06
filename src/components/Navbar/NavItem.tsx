import { motion } from 'framer-motion'

interface Props {
  text: string
  selected: any
  onClick: ()=>void
}

const NavItem = ({text, selected, onClick}: Props) => {
  return (
    <motion.a
      href={`#${text}`}
      className='nav-item'
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      animate={{ opacity: selected ? 1 : .5}}
    >
      {text}
      {selected && (
      <motion.div
        className="underline" 
        layoutId="underline" 
      />
    )}
    </motion.a>
  )
}

export default NavItem