import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/priyanshu-raghuvanshi-6631161aa/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/PriyanshuRaghuvanshi' target="_blank"><FaGithub/></a>
        <a href='https://leetcode.com/Priyanshu_Raghuvanshi/' target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials