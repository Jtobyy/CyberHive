import logo from '../assets/logo.svg';
import fb_ic from '../assets/fb_ic.svg';
import tw_ic from '../assets/tw_ic.svg';
import ig_ic from '../assets/ig_ic.svg';
import yt_ic from '../assets/yt_ic.svg';

import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer className="footer w-100 py-3 container-fluid border-bottom border-secondary" style={{ paddingBottom: '100px',}}>
            <div className="px-md-5 d-flex flex-row justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} width="200" className="footer-logo" alt="logo" loading="lazy"/>
                    </Link>    
                    <div className='footer-icons'>
                        <a className="fb py-1 ms-2 ms-md-0 me-4" href="#">
                            <img src={fb_ic} loading="lazy"/>
                        </a>
                        <a className="tw py-1 me-4" href="#">
                            <img src={tw_ic} loading="lazy"/>
                        </a>
                        <a className="ig py-1 me-4" href="#">
                            <img src={ig_ic} loading="lazy"/>
                        </a>
                        <a className="yt py-1 me-4" href="#">
                            <img src={yt_ic} loading="lazy"/>
                        </a>
                    </div>
            </div>
            <div className="footer-links row align-items-start justify-content-start py-3 my-3" style={{borderTop: '1px solid white', borderBottom: '1px solid white' }} >
                <div className="ps-md-5 ms-md-3 col-md-3 col-6 d-flex flex-column ">
                    <h5 className="p-0 mt-md-0" style={{color: '#FF499E'}}>About Us</h5>
                    <Link to="/" className="py-1 m-0">Policy Properties</Link>
                    <Link to="/" className="py-1 m-0">Pricing</Link>
                    <Link to="/" className="py-1 m-0">Mission & vision statements</Link>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column ">
                    <h5 className="p-0 mt-md-0" style={{color: '#FF499E'}}>Learn More</h5>
                    <Link to="/" className="py-1 m-0">How Cyberhive works</Link>
                    <Link to="/" className="py-1 m-0">FAQs</Link>
                    <Link to="/" className="py-1 m-0">Stories and testimonies</Link>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 className="p-0 mt-md-0" style={{color: '#FF499E'}}>Resources</h5> 
                    <Link to="/" className="py-1 m-0">Help Center</Link>
                    <Link to="/" className="py-1 m-0">Blog</Link>
                    <Link to="/" className="py-1 m-0">Mentors & Guides</Link>
                    
                </div>
            </div>  
            <p className="small ps-md-5">
                &copy; 2023 Cyberhive. All rights reserved
            </p>

        </footer>
    )
    
}