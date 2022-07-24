import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
// import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
const App = () => {
  return (
   <div className='main'>
   
   <Header/>
   <Nav/>
   <About/>
    <Services/>
   <Portfolio/>
   {/* <Experience/> */}
  
  
   <Testimonials/>
   <Contact/>
   <Footer/>
  </div>
  )
 }

export default App