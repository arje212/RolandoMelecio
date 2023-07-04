import React from 'react'
import Header from './components/header/Header'
import Nav from "./components/nav/Nav"
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Works1 from "./components/works/Works1"


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Works1 />
        <Service />
        <Contact />
        <Footer />

        

    </>
  )
}

export default App