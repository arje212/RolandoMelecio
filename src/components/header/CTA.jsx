import React from 'react'
import CV from "../../assests/melecio.pdf"

const CTA = () => {
  return (
    <div className='new'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA