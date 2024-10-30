import Locators_map_logo from '../assets/logo_and_branding/locators-map-logo.webp'

import './components.css'

function navBar(){
    return(
        <>
            <nav className="navbar">
                    <div className="navbrand"><img src={Locators_map_logo} alt="navbrand"/></div>
                        <div className="navlinks">
                            <ul>
                                <li><a href={'/'}>home</a></li>
                                <li><a href={'/locators-map'}>locators map</a></li>
                                <li><a href={'/division-profiles'}>division profiles</a></li>
                                <li><a href={'/inquiries'}>inquiries</a></li>
                                <li><a href={'/contact-us'}>contact us</a></li>
                            </ul>
                    </div>
            </nav>
        </>
        
    )
}

export default navBar;