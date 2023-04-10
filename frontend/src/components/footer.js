import logo from '../assets/logo.svg';


export default function Footer() {
    return(
        <footer class="footer w-100 py-md-5 pt-1 px-md-5 px-3 container-fluid border-bottom border-secondary" style={{ paddingBottom: '100px',}}>
            <div class="row py-5 align-items-start justify-content-between">
                <div class="col-md-3 d-flex flex-column ps-md-5">
                    <img src={logo} width="130" classname="footer-logo" alt="logo" loading="lazy"/>
                    <div class="mt-md-4 mt-2 mb-4">
                        <a class="fb py-1 ms-2 ms-md-0 me-4" href="https://www.facebook.com/Cyberstickio-100203956085984/">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_fb.svg" loading="lazy"/>
                        </a>
                        <a class="tw py-1 me-4" href="https://www.twitter.com/Cyberstick_io">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_tw.svg" loading="lazy"/>
                        </a>
                        <a class="ig py-1 me-4" href="https://www.instagram.com/cyberstick.io/">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_ig.svg" loading="lazy"/>
                        </a>
                        <a class="yt py-1 me-4" href="https://youtube.com/channel/UCAvjUB_HpH77JcBvEKfhZFA">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_yt.svg" loading="lazy"/>
                        </a>
                    </div>
                    
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 class="p-0 mt-md-0 text-white">About Us</h5>
                    <a href="https://tech4mationltd-0.odoo.com/cyberbuy" class="py-1 m-0">Policy Properties</a>
                    <a href="#" class="py-1 m-0">Pricing</a>
                    <a href="https://cyberfix.cybervilla.io" class="py-1 m-0">Mission & vision statements</a>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 class="p-0 mt-md-0 text-white">Learn More</h5>
                    <a href="#!" class="py-1 m-0">How Cyberhive works</a>
                    <a href="#!" class="py-1 m-0">FAQs</a>
                    <a href="#!" class="py-1 m-0">Stories and testimonies</a>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 class="p-0 mt-md-0 text-white">Resources</h5> 
                    <a href="#!" class="py-1 m-0">Help Center</a>
                    <a href="#!" class="py-1 m-0">Blog</a>
                    <a href="#!" class="py-1 m-0">Mentors & Guides</a>
                    
                </div>
            </div>  
            <p classname="small">
                2023 Cyberhive. All rights reserved
            </p>

        </footer>
    )
    
}