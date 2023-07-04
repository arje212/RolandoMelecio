import React from 'react'
import './nav.css'
import {TbHomeHand} from "react-icons/tb"
import {SiAboutdotme} from "react-icons/si"
import {BsPersonWorkspace} from "react-icons/bs"
import {RiCustomerService2Line} from "react-icons/ri"
import {IoIosContacts} from "react-icons/io"
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#j' onClick={() => setActiveNav("#j")} className={activeNav === "#j" ? "active" : ""}><TbHomeHand/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><SiAboutdotme/></a>
      <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsPersonWorkspace/></a>
      <a href='#service' onClick={() => setActiveNav("#service")} className={activeNav === "#service" ? "active" : ""}><RiCustomerService2Line/></a>
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><IoIosContacts/></a>
    </nav>
  )
}

export default Nav