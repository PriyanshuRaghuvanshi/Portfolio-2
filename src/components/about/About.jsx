import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {Gi3DGlasses} from 'react-icons/gi'
const About = () => {
  return (
    <section id='about' className='abme'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About_image"/>
          </div>
        </div>
         <div className='about__content'>
         {/* comment */}
          <div className='about__cards'>
            <article className='about__card'>
              <Gi3DGlasses className='about_icon'/>
              <h5> Java 8</h5>
              <small>5-star HackerRank</small>
            </article>
            <article className='about__card'>
              <Gi3DGlasses className='about_icon'/>
              <h5>DSA</h5>
              <small>100+ problems leetcode</small>
            </article>
            <article className='about__card'>
              <Gi3DGlasses className='about_icon'/>
              <h5>React.js</h5>
              <small>Internships(1)+projects(3)</small>
            </article>
          </div>

          <p>I'm a final year Computer Science undergraduate at RKGIT Ghaziabad. Being a technology enthusiast, I love exploring new technologies and leveraging them to solve real-life problems to improve the quality of human life.  Apart from this, I love to participate in various contests/Hackathons.
I also develop React.js -based web applications and Dapps. My proficient languages are Java and Javascript.</p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div> 
        </div> 
    </section>
  )
}

export default About