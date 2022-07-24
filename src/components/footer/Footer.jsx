import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
     <a href='#' className='footer__logo'>Priyanshu's Portfolio</a>

     <ul className='permalinks'>
         <li><a href='#'>Home</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#services'>Skills</a></li>
         <li><a href='#portfolio'>Projects</a></li>
         <li><a href='#testimonials'>Internships/Achievments</a></li>
         <li><a href='#contact'>Contact</a></li>
     </ul>

     <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/priyanshu-raghuvanshi-6631161aa/"><AiFillLinkedin/></a>
      <a href="https://www.instagram.com/priyanshu_pr7/?hl=en"><FiInstagram/></a>
      
     </div>
         
    </footer>
  )
}

export default Footer