import React from 'react'
import "./experience.css"
import {ImCheckmark2} from "react-icons/im"
import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {FaBootstrap} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {LiaNode} from "react-icons/lia"
import {SiMongodb} from "react-icons/si"
import {SiPhp} from "react-icons/si"
import {TbBrandMysql} from "react-icons/tb"
import {SiPython} from "react-icons/si"
import {SiConstruct3} from "react-icons/si"
import {SiVisualstudio} from "react-icons/si"
import {SiArduino} from "react-icons/si"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience

      <div className='container experience__container'>
        <div className='experience__frondend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiHtml5 />
                <h4>HTML</h4>
              </h4>
              <small className='text-light'>Experience</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiCss3 />
                <h4>CSS</h4>
              </h4>
              <small className='text-light'>Experience</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <FaBootstrap />
                <h4>BOOTSTRAP</h4>
              </h4>
              <small className='text-light'>Practicing</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiJavascript />
                <h4>JAVASCRIPT</h4>
              </h4>
              <small className='text-light'>Practicing</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiTailwindcss />
                <h4>TAILWIND</h4>
              </h4>
              <small className='text-light'>Practicing</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <FaReact />
                <h4>REACT.JS</h4>
              </h4>
              <small className='text-light'>Practicing</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
          </div>
        </div>
        
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <LiaNode />
                <h4>NODE.JS</h4>
              </h4>
              <small className='text-light'>Practicing</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiMongodb />
                <h4>MONGODB</h4>
              </h4>
              <small className='text-light'>No Experience</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiPhp />
                <h4>PHP</h4>
              </h4>
              <small className='text-light'>No Experience</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
              <TbBrandMysql />
              <h4>MYSQL</h4>
              </h4>
              <small className='text-light'>Practicing</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
            <article className='experience__details'>
              <ImCheckmark2 className='experience__details-icon' />
              <div>
              <h4>
                <SiPython />
                <h4>PYTHON</h4>
              </h4>
              <small className='text-light'>No Experience</small>
              <a href="#contact" className='btn btn-primary'>See Works</a>
              </div>
            </article>
          </div>
        </div>
        </div>
        <div className='container experience__container1'>
        <div className='experience__game'>
        <h3>Game Development</h3>
          <div className='experience__content1'>
            <article className='experience__details1'>
              <div>
              <h4>
                <SiConstruct3 />
                <h4>CONSTRUCT</h4>
              </h4>
              <small className='text-light'>Experience</small>
              </div>
              <a href="#contact" className='btn btn-primary'>See Works</a>
            </article>
            </div>
            </div>
            <div className='experience__Window-app'>
        <h3>Window Form Application</h3>
          <div className='experience__content1'>
            <article className='experience__details1'>
              <div>
              <h4>
                <SiVisualstudio />
                <h4>VISUAL BASIC</h4>
              </h4>
              <small className='text-light'>Experience</small>
              </div>
              <a href="#contact" className='btn btn-primary'>See Works</a>
            </article>
            </div>
            </div>
            </div>
            <div className='container experience__container2'>
        <div className='experience__game'>
        <h3>Robotics</h3>
          <div className='experience__content2'>
            <article className='experience__details2'>
              <div>
              <h4>
                <SiArduino />
                <h4>ARDUINO</h4>
              </h4>
              <small className='text-light'>Experience</small>
              </div>
              <a href="#contact" className='btn btn-primary'>See Works</a>
            </article>
            </div>
            </div>
            </div>
      </h2>
    </section>
  )
}

export default Experience