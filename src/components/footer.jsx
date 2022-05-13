import React from "react";

const Footer = () =>{

    return (
        <div>
        <footer className='footer'>
        <a href='joseg1224@hotmail.com' className='footer__link'>joseg1224@hotmail.com</a>
        <ul className='social-list'>
        <li className='social-list__item'><a className='social-list__link' href='https://github.com/jozzol'>
            <i class="fa-brands fa-github"></i>
          </a></li>
          <li className='social-list__item'><a className='social-list__link' href='https://www.linkedin.com/in/jose-guillermo-garcia-serrano-dev/'>
            <i class="fa-brands fa-linkedin"></i>
          </a></li>
          <li className='social-list__item'>
              {/* whatsapp link */}
            <a
                href="https://wa.me/573012287866"
                className='social-list__link'
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
          </li>
        </ul>

        </footer>
        
        </div>
        
    )
}

export default Footer;