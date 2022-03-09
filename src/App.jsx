import React from "react"
import changeColor from "./changeColor"

export default function App() {
  return (
    <div id="circle" className="green-circle" onClick={changeColor} role="button" tabIndex={0}>click on me</div>
  )
}

