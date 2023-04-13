import logo from '../assets/logo.svg';
import fb_ic from '../assets/fb_ic.svg';
import tw_ic from '../assets/tw_ic.svg';
import ig_ic from '../assets/ig_ic.svg';
import yt_ic from '../assets/yt_ic.svg';


export default function Footer() {
    return(
        <footer className="footer w-100 py-3 container-fluid border-bottom border-secondary" style={{ paddingBottom: '100px',}}>
            <div className="px-md-5 d-flex flex-row justify-content-between align-items-center">
                    <img src={logo} width="200" className="footer-logo" alt="logo" loading="lazy"/>
                    <div className='footer-icons'>
                        <a className="fb py-1 ms-2 ms-md-0 me-4" href="https://www.facebook.com/Cyberstickio-100203956085984/">
                            <img src={fb_ic} loading="lazy"/>
                        </a>
                        <a className="tw py-1 me-4" href="https://www.twitter.com/Cyberstick_io">
                            <img src={tw_ic} loading="lazy"/>
                        </a>
                        <a className="ig py-1 me-4" href="https://www.instagram.com/cyberstick.io/">
                            <img src={ig_ic} loading="lazy"/>
                        </a>
                        <a className="yt py-1 me-4" href="https://youtube.com/channel/UCAvjUB_HpH77JcBvEKfhZFA">
                            <img src={yt_ic} loading="lazy"/>
                        </a>
                    </div>
            </div>
            <div className="footer-links row align-items-start justify-content-start py-3 my-3" style={{borderTop: '1px solid white', borderBottom: '1px solid white' }} >
                <div className="ps-md-5 ms-md-3 col-md-3 col-6 d-flex flex-column ">
                    <h5 className="p-0 mt-md-0" style={{color: '#FF499E'}}>About Us</h5>
                    <a href="https://tech4mationltd-0.odoo.com/cyberbuy" className="py-1 m-0">Policy Properties</a>
                    <a href="#" className="py-1 m-0">Pricing</a>
                    <a href="https://cyberfix.cybervilla.io" className="py-1 m-0">Mission & vision statements</a>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column ">
                    <h5 className="p-0 mt-md-0" style={{color: '#FF499E'}}>Learn More</h5>
                    <a href="#!" className="py-1 m-0">How Cyberhive works</a>
                    <a href="#!" className="py-1 m-0">FAQs</a>
                    <a href="#!" className="py-1 m-0">Stories and testimonies</a>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 className="p-0 mt-md-0" style={{color: '#FF499E'}}>Resources</h5> 
                    <a href="#!" className="py-1 m-0">Help Center</a>
                    <a href="#!" className="py-1 m-0">Blog</a>
                    <a href="#!" className="py-1 m-0">Mentors & Guides</a>
                    
                </div>
            </div>  
            <p className="small ps-md-5">
                &copy; 2023 Cyberhive. All rights reserved
            </p>

        </footer>
    )
    
}