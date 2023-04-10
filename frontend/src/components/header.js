import $ from 'jquery';

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

// import ic_call from '../assets/call.svg';
// import ic_mail from '../assets/ic_mail.svg';

import logo from '../assets/logo.svg';


export default function Header() {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const toggleNavbar = () => {
      if (navbarToggle) $('#headerNavbar').addClass('collapse')
      else $('#headerNavbar').removeClass('collapse')

      setNavbarToggle(!navbarToggle)
    }


    return (
        <header className ="header fixed-top">
            <ul className='d-flex small flex-row justify-content-end mb-0 py-2' 
            style={{ backgroundColor: '#1D1D1D', paddingRight: '100px' }}>
              {/* <li className="me-5"><img src={ic_call} width={12} className='me-2' /><a href="#">0700cybervilla</a></li>  
              <li><a href="#"><img src={ic_mail} width={12} className='me-2' />support@cybervilla.io</a></li> */}
            </ul>  
            <nav className="navbar mt-0 py-2 px-md-5 px-0 navbar-expand-lg">
              <div className="container-fluid px-3">
                <Link className="navbar-brand" to="/">
                  <img src={logo} width="130"  alt="" />
                </Link>
                <div className="navbar-toggler" onClick={() => toggleNavbar()} type="button" data-bs-target="#headerNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="toggle-line t1 mb-1"></div>
                    <div className="toggle-line t2 mb-1"></div>
                    <div className="toggle-line t3 mb-1"></div>
                </div>


                <div class="collapse navbar-collapse " id="headerNavbar">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3 active " id="nav-item1" >
                            <a href="https://tech4mationltd-0.odoo.com/cyberbuy"
                                className="nav-link" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Courses</a>
                    </li>
                    <li className="nav-item me-3" id="nav-item2">
                            <HashLink className="nav-link" to="/#about-us" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Blogs</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item3">
                            <a  href="https://tech4mationltd-0.odoo.com/shop" className="nav-link" to="/#what-we-do" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Resources</a>
                        </li>
                        
                        <li className="nav-item me-3 " id="nav-item4">
                            <a className="nav-link" href="https://cyberfix.cybervilla.io" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Pricing</a>
                        </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>
    )
}