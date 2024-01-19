import { useState } from "react"
import './tools.scss'
import toolData from "../../shared/toolData"
import ToolSelector from "./ToolSelector"
import ToolContainer from "./ToolContainer"

const Tools = () => {
const [selection, setSelection] = useState<number>(0)

  return (
    <div className="tools">
      <div className="title">
      </div>
      <div className="tool-wrapper">
        <ToolSelector selection={selection} setSelection={setSelection} />
        <ToolContainer key={selection} tools={toolData[selection].tools} />
      </div>
    </div>
  )
}

export default Tools