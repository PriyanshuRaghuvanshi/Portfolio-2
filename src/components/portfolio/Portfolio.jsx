import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/neon_eth1.jpg'
import IMG2 from '../../assets/blur_crypto.jpg'
import IMG3 from '../../assets/text-go.jpg'
import IMG4 from '../../assets/portfolio6.jpg'
import IMG5 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/er.png'


const data=[
  {
    id:1,
    image: IMG1,
    title:'Matrakshan: Voting Dapp',
    github:'https://github.com/PriyanshuRaghuvanshi/Matrakshan-Voting-Dapp',
    demo:'https://github.com/PriyanshuRaghuvanshi/Matrakshan-Voting-Dapp'
  },
  {
    id:2,
    image: IMG2,
    title:'Krypt: Ethereum Transfer Dapp ',
    github:'https://github.com/PriyanshuRaghuvanshi/Blockchain-Ethereum-transfer-Dapp',
    demo:'https://krypto-blockchain-web3.netlify.app/'
  },
  {
    id:3,
    image: IMG3,
    title:'Text-GO: Text Utility app',
    github:'https://github.com/PriyanshuRaghuvanshi/TextGo-Create-react-app',
    demo:'https://textgo-reactapp.herokuapp.com/'
  },
  {
    id:4,
    image: IMG4,
    title:'E-commerce page:Responsive',
    github:'https://github.com/PriyanshuRaghuvanshi/responsiveShoppingPageLayout',
    demo:'https://priyanshuraghuvanshi.github.io/responsiveShoppingPageLayout/'
  },
  {
    id:5,
    image: IMG5,
    title:'Portfolio-1',
    github:'https://github.com/PriyanshuRaghuvanshi/Portfolio',
    demo:'https://priyanshuraghuvanshi.github.io/Portfolio/'
  },
  {
    id:6,
    image: IMG6,
    title:'Not Available',
    github:'',
    demo:''
  }

]



const Portfolio = () => {
  return (
    <section id='portfolio' className='project'>
      <h5>My Receent Work</h5>
      <h2>Projects</h2>
         
      <div className='container portfolio__container'>
          {
            data.map(({id,image,title,github,demo})=>{
              return(
                
          <article key={id} className='portfolio__item'>
             <div className='portfolio__item-image'>
                   <img src={image} alt={title} />
             </div>
             <h3>{title}</h3>
             <div className='portfolio__item-cta'>
              <a href={github} className='btn'>Github</a>
             <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
            </article>
              )
            })
          }



      </div>
    </section>
  ) 
}

export default Portfolio