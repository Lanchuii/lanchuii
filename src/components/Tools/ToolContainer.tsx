import { motion } from "framer-motion"

interface Props {
  tools: techData[]
}

interface techData {
  name: string
  img: string
}

const ToolContainer = ({ tools }: Props) => {
  return (
    <div className="tool-container">
      {tools.map((tools, i) => (
        <motion.div
          key={i}
          className="tool-item"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <img src={tools.img} alt="" />
          <h4>{tools.name}</h4>
        </motion.div>
      ))}
    </div>
  )
}

export default ToolContainer