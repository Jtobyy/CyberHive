import $ from 'jquery';

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

// import ic_call from '../assets/call.svg';
// import ic_mail from '../assets/ic_mail.svg';
import { Stack, Button } from '@mui/material';
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
                  <img src={logo} width="200"  alt="" />
                </Link>
                <div className="navbar-toggler" onClick={() => toggleNavbar()} type="button" data-bs-target="#headerNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="toggle-line t1 mb-1"></div>
                    <div className="toggle-line t2 mb-1"></div>
                    <div className="toggle-line t3 mb-1"></div>
                </div>


                <div class="collapse navbar-collapse " id="headerNavbar">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3 active " id="nav-item1" >
                            <Link to="/dashboard"
                                className="nav-link" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Courses</Link>
                    </li>
                    <li className="nav-item me-3" id="nav-item2">
                            <HashLink className="nav-link" to="/#blog" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Blogs</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item3">
                            <Link  to="/dashboard" className="nav-link" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Resources</Link>
                        </li>
                        
                        <li className="nav-item me-3 " id="nav-item4">
                            <Link className="nav-link" to="/pricing" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Pricing</Link>
                        </li>
                  </ul>
                    <Stack direction='row' spacing={2}>
                      <Link to="/auth" state={{ page: 'login'}}>
                        <Button sx={{borderRadius: '5px', border: 'solid 1px #FF499E'}} >Log in</Button>  
                      </Link>
                      
                      <Link to="/auth" state={{ page: 'signup'}}>
                        <Button sx={{borderRadius: '5px', backgroundColor: '#FF499E'}}>Create account</Button>
                      </Link>
                  </Stack>
                </div>
              </div>
            </nav>
        </header>
    )
}