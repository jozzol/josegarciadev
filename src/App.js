import logo from './images/logo.png';
import profile from './images/profile.jpg';
import './App.css';
import React, { useState } from "react";
import weatherapp from './images/weatherapp.png'
import ecommerce from './images/ecommerce2.png'
import blog from './images/gatsby1.png'

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggleClass = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div className={`App ${navbarOpen ? 'nav-open': ""}`}>
      <header className="header">
        <div className='logo'>
          <img src={logo}  alt="" />
        </div>
        <button className='nav-toggle' aria-label='toggle-navigation' onClick={toggleClass}>
          <span className='hamburger'></span>
        </button>
        <nav className="nav">
          <ul className='nav__list' onClick={closeMenu}>
            <li className='nav__item'><a href="#home" className='nav__link'>Home</a></li>
            <li className='nav__item'><a href="#services" className='nav__link'>Services</a></li>
            <li className='nav__item'><a href="#about" className='nav__link'>About</a></li>
            <li className='nav__item'><a href="#work" className='nav__link'>My Work</a></li>
          </ul>
        </nav>
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
            <h3>Custom simple websites</h3>
            <p>I can help you create a custom website for your business, that will allow you to capture more customers and show off your services</p>
          </div>
          <div className='service'> 
            <h3>integrate payments/ecommerce</h3>
            <p>can help you integrate payment systems into your website, which will allow your clients to pay you while in your website</p>
          </div>
          <div className='service'> 
            <h3>custom functionalities</h3>
            <p>Do you have a particular idea or functionality for your website?, let me know and I will work to make it possible</p>
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
          <a href='https://github.com/jozzol/weather-dashboard' className='portfolio__item'>
            <p>Weather-app</p>
            <img src={weatherapp} alt='' className='portfolio__img'/>
          </a>
          <a href='https://github.com/Gross-Franco/E-Commerce' className='portfolio__item'>
          <p>E-commerce</p>
            <img src={ecommerce} alt='' className='portfolio__img'/>
          </a>
          <a href='https://github.com/jozzol/firstGatsby' className='portfolio__item'>
          <p>Blog page</p>
            <img src={blog} alt='' className='portfolio__img'/>
          </a>
          {/* <a href='#' className='portfolio__item'>
            <img src='' alt='' className='portfolio__img'/>
          </a>
          <a href='#' className='portfolio__item'>
            <img src='' alt='' className='portfolio__img'/>
          </a> */}

        </div>
      </section> 

      <footer className='footer'>
        <a href='joseg1224@hotmail.com' className='footer__link'>joseg1224@hotmail.com</a>
        <ul className='social-list'>
          <li className='social-list__item'><a className='social-list__link' href='https://github.com/jozzol'>
            <i class="fa-brands fa-github"></i>
          </a></li>
          <li className='social-list__item'><a className='social-list__link' href='https://www.linkedin.com/in/jose-guillermo-garcia-serrano-dev/'>
            <i class="fa-brands fa-linkedin"></i>
          </a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
