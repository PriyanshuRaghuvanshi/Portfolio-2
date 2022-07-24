import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsTrophy} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]=useState("#")
  return (
   <nav>
    <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === "#"? 'active':''}><AiOutlineHome/></a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === "#about"? 'active':''} ><AiOutlineUser/></a>
    <a href='#services'  onClick={()=>setActiveNav('#services')} className={activeNav === "#services"? 'active':''}><BiBook/></a>
    <a href='#portfolio'  onClick={()=>setActiveNav('#portfolio')} className={activeNav === "#portfolio"? 'active':''}><AiOutlineFundProjectionScreen/></a>
    <a href='#testimonials'  onClick={()=>setActiveNav('#testimonials')} className={activeNav === "#testimonials"? 'active':''}><BsTrophy/></a>
    <a href='#contact'  onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact"? 'active':''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav