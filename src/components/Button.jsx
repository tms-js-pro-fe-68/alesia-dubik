import React, {useState} from "react"
import huck from "./huck"

export default function Button(){
  const [color, setColor] = useState('blue');

  function changeColor() {
    return setColor((prevColor) => (prevColor === 'blue' ? 'green' : 'blue'));
  }
  
  return (
    <div className="circle" style={{background: color}} onClick={() =>{
      changeColor()
      huck()
    }} role="button" tabIndex={0}>click on me</div>
  )
}