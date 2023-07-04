import React from 'react'
import {LuLinkedin} from 'react-icons/lu'
import {PiGithubLogoFill} from "react-icons/pi"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' rel="noreferrer" target='_blank'><LuLinkedin/></a>
        <a href='https://github.com/arje212' rel="noreferrer" target='_blank'><PiGithubLogoFill/></a>
     </div>
  )
}

export default HeaderSocials