import React from 'react'
import "./service.css"
import { BsUiChecks } from 'react-icons/bs'

const Service = () => {
  return (
    <section id='service'>
    <h5>Services That I Provide</h5>
    <div className='service__head'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
          <li>
            <BsUiChecks className='service__list-icon' />
            <p>sfdsdfgdsgdfghfhfgh</p>
          </li>
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Service