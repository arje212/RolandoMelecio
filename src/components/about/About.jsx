import React from 'react'
import "./about.css"
import ME from "../../assests/rb.png"

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="About Me" className='img'/>
          </div>
        </div>
        <p>
          I'm Rolando M. Melecio Jr., and I'm looking for a job and an opportunity that will allow me to continue my education.
          I want to improve and broaden my knowledge of web and software development. to be able to assist the organization in reaching
          its goals through service and accountability. to offer my full-time services
          </p>
      </div>
      
      
      
      </section>
  )
}

export default About