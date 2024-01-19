import { motion } from "framer-motion"

interface Props {
  selection: number
  setSelection: React.Dispatch<React.SetStateAction<number>>
}

const ToolSelector = ({selection, setSelection}: Props) => {
  return (
    <div className="tool-selector">
      <motion.button 
        className="select-btn" 
        onClick={()=>setSelection(0)}
        whileHover={{scale: 1}}
        whileTap={{scale: 0.9}}
        animate={{
          opacity: selection === 0 ? 1 : 0.5,
          scale: selection === 0 ? 1 : 0.9
        }}
      >
        Frontend
      </motion.button>
      <div className="separator">|</div>
      <motion.button 
        className="select-btn" 
        onClick={()=>setSelection(1)}
        whileHover={{scale: 1}}
        whileTap={{scale: 0.9}}
        animate={{
          opacity: selection === 1 ? 1 : 0.5,
          scale: selection === 1 ? 1 : 0.9
        }}
      >
        Backend
      </motion.button>
    </div>
  )
}

export default ToolSelector