import profile from '../images/profile.jpg';
import '../App.css';
import React, { useState } from "react";
import weatherapp from '../images/weatherapp.png'
import ecommerce from '../images/ecommerce2.png'
import blog from '../images/gatsby1.png'
import doctor from '../images/doctorpage.png'

const Home = () =>{
    const [navbarOpen, setNavbarOpen] = useState(false)

    return(
    <div className={`App ${navbarOpen ? 'nav-open': ""}`}>
      <header className="header">
        {/* <div className='logo'>
          <img src={logo}  alt="" />
        </div> */}



        {/* <button className='nav-toggle' aria-label='toggle-navigation' onClick={toggleClass}>
          <span className='hamburger'></span>
        </button>
        <nav className="nav">
          <ul className='nav__list' onClick={closeMenu}>
            <li className='nav__item'><a href="#home" className='nav__link'>Home</a></li>
            <li className='nav__item'><a href="#services" className='nav__link'>Services</a></li>
            <li className='nav__item'><a href="#about" className='nav__link'>About</a></li>
            <li className='nav__item'><a href="#work" className='nav__link'>My Work</a></li>
          </ul>
        </nav> */}
      </header>

      <section className='intro' id="home">
        <h1 className='section__title section__title--intro'>
          Hi, Im <strong>Jose Garcia</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>Front-end dev</p>
        <img src={profile} alt='foto de perfil' className='intro__img'/>
      </section>

      <section className='my__services' id='services'>
        <h2 className='section__title section__title--services'>My services</h2>
        <div className='services'>
          <div className='service'> 
          <div className='service-title'>
            <h3>Custom simple websites</h3>

          </div>
            <p>I can help you create a custom website for your business, that will allow you to capture more customers and show off your services.</p>
          </div>
          {/* <div className='service'>
          <div className='service-title'> */}
            {/* <h3>Integrate payments/ecommerce</h3>

          </div> 
            <p>Can help you integrate payment systems into your website, which will allow your clients to pay you while in your website.</p>
          </div> */}
          <div className='service'> 
          <div className='service-title'>
            <h3>Custom functionalities</h3>

          </div>
            <p>Do you have a particular idea or functionality for your website?, let me know and I will work to make it possible.</p>
          </div>
        </div>
        <a href="#work" >
          <button className='btn'>
            My work
          </button>
        </a>
          
      </section>

      <section className='about-me' id='about'>
        <h2 className='section__title section__title--about'>Who I am</h2>
        <p className='section__subtitle section__subtitle--about'>Web developer</p>

        <div className='section__about-me__body'>
          <p>Frontend developer with training in web development and business administration. Experience working on NodeJs, React, Redux, SQL among other technologies. I am looking for new challenges where I can add value with my knowledge in development and administration. </p>
        </div>

      </section>

      <section className='my-work' id='work'>
        <h2 className='section__title'>My work</h2>
        <p className='section__subtitle--work'>Click to look up proyects I have worked on in github</p>
      <div className='portfolio'>

      <div class="max-w-sm rounded overflow-hidden shadow-lg px-6">
        <img class="w-full h-1/2" src={weatherapp} alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Weather Dashboard</div>
        <p class="text-gray-700 text-base">
        Weather app, connects to the weather API an brings information from various cities
        </p>
      </div>
      <div class="px-6 pt-0 pb-0 flex">
        <a href='https://github.com/jozzol/weather-dashboard' className='portfolio__item'>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github repository</span>
        </a>
        <a href='https://jozzol.github.io/weather-dashboard/' className='portfolio__item'>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Live demo</span>
        </a>
      </div>
      </div>

      
      <div class="max-w-sm rounded overflow-hidden shadow-lg px-6">
        <img class="w-full h-1/2" src={ecommerce} alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Ecommerce website</div>
        <p class="text-gray-700 text-base">
        Ecommerce website, worked in a group of 7 using agile methologies, it has a functioning backend and frontend, allows people to buy different products and for the admins to create or update information
        </p>
      </div>
      <div class="px-6 pt-0 pb-0 flex">
        <a href='https://github.com/Gross-Franco/E-Commerce' className='portfolio__item'>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github repository</span>
        </a>        
      </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg px-6">
        <img class="w-full h-1/2" src={doctor} alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Business page</div>
        <p class="text-gray-700 text-base">
        Business page built for a doctor, contains their information and links to different pages with their treatment information.
        </p>
      </div>
      <div class="px-6 pt-0 pb-0 flex">
        <a href='https://github.com/jozzol/doctorpage' className='portfolio__item'>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github repository</span>
        </a>
        <a href='https://jozzol.github.io/doctorpage/' className='portfolio__item'>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Live demo</span>
        </a>        
      </div>
      </div>

          {/* <a href='#' className='portfolio__item'>
            <img src='' alt='' className='portfolio__img'/>
          </a> */}

        </div>
      </section> 

      
    </div>
    )
}

export default Home;