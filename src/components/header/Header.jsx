import React from 'react'
import "./header.css"
import CTA from './CTA'
//import ME from "../../assests/melecio.jpg"
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      
        <h3>I'm</h3>
        <h1>Rolando M. Melecio Jr</h1>
        <h5>A Web</h5>
        
        <TypeAnimation 
      sequence={[         
        'Developer',
        2000,
        'Designer',
        2000,
        'Front End',
        2000,
      ]}
      wrapper="span"
      speed={5}
      style={{ fontSize: '80px', display: 'inline-block' }}
      repeat={Infinity}
    />
       
       <CTA />
        <HeaderSocials />
      </div>
     
    </header>
  )
}

export default Header