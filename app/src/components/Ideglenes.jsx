import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import Regiszt from './regiszt'
import Regsiker from './Regsiker.jsx'


const Ideiglenes = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function Submitform() {
    setIsSubmitted(true)
  }
  return (
    <div>
    {!isSubmitted ? <Regiszt Submitform = {Submitform} /> : <Regsiker /> }
    </div>
  )
}

export default Ideiglenes