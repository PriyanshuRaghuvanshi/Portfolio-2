import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services' className='skill'>
      <h5>What I Know</h5>
      <h2>Skills</h2>
       
        <div className='container services__container'>
          <article className='service'>
            <div className='service__head'>
              <h3>Programming</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>JAVA</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>C/C++</p>
              </li><li>
                <BiCheck className='service__list-icon'/>
                <p>Solidity</p>
              </li>
            </ul>
          </article>

          <article className='service'>
            <div className='service__head'>
              <h3>Web/Daap Development </h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>React.js</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>HTML5/CSS3</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Bootstrap</p>
              </li><li>
                <BiCheck className='service__list-icon'/>
                <p>Tailwind CSS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Truffle.js</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Ganache</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>JSX</p>
              </li>
            </ul>
          </article>

          <article className='service'>
            <div className='service__head'>
              <h3>Others</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Git</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>MetaMask</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Adobe Premiere pro</p>
              </li><li>
                <BiCheck className='service__list-icon'/>
                <p>Adobe Ligthroom/Photoshop</p>
              </li>
            </ul>
          </article>

          



        </div>
    </section>
  )
}

export default Services