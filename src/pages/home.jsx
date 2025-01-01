import NavBar from '../components/navBar'
import Footer from '../components/footer'

import Bpi_logo from '../assets/logo_and_branding/bpi logo.png'
import Locators_map_brochure from '../assets/clip_art/locators_map_brochure_map.webp'
import Certification from '../assets/clip_art/certification.webp'
import Event_white from '../assets/clip_art/event-white.webp'
import Training from '../assets/clip_art/training-icon.webp'

import Manila_map from '../assets/vector_map/manila-map-design.png'
import Admin_building_1 from '../assets/images/admin-building-1.webp'
import Admin_building_2 from '../assets/images/admin-building-2.webp'
import Front_gate from '../assets/images/front-gate-2.webp'

import Pamphlet_questionMark from '../assets/isometric_assets/isometric pamphlet.png'
import Pamphlet_building from '../assets/isometric_assets/ict_building.webp'

import Locators_map_logo from '../assets/logo_and_branding/locators-map-logo.png';
import Bpi_compound from '../assets/vector_map/locatos_map_compound.png';

import Pamphlet from '../assets/clip_art/pamphlet_point.webp';
import Map_hexa_piece from '../assets/clip_art/directions_map.webp';
import Mobile_map from '../assets/clip_art/mobile_map.webp';

import Map_info_sec from '../assets/clip_art/pamphlet and info sec.webp';

import './pages.css'

function home(){
    return(
        <>
            <NavBar />
            
                <div className="backdrop_skew"></div>

                <div className="hero_banner_section">
                    <div className="hero_section">

                        <div className="hero_left">
                            <img src={Bpi_logo} alt="bpi-logo" />
                            <h2>Welcome to</h2>
                            <h2>bureau of plant industry</h2>
                            <a href={'/locators-map'}>check the map</a>
                        </div>

                        <div className="hero_right">

                            <div className="image_holder">
                                <img src={Locators_map_brochure} />    
                            </div>
                            
                            <h3>where are you heading today?</h3>

                            <div className="hero_link_badges">
                                <div className="badges">
                                    <img src={Certification} alt="certification-icon" />
                                    <p>certifications</p>
                                </div>

                                <div className="badges">
                                    <img src={Event_white} alt="event-icon" />
                                    <p>events</p>
                                </div>

                                <div className="badges">
                                    <img src={Training} alt="training-icon" />
                                    <p>trainings</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="section" id="section_color">

                    <h2>location of the office</h2>

                    <div className="image_holder">
                        <img className="map_manila" src={Manila_map} alt="map-of-manila" />
                    </div>
                    
                    <div className="section_container_location">
                        <div className="container">
                            <img className="admin_building" src={Admin_building_1} alt="admin-building" />
                            <h3 className="location_header">the bureau of plant industry</h3>
                            <p>is situated at 692 San Andres Street, Malate, Manila. This strategic location in the capital city of the Philippines places the BPI in a central and accessible position.</p>
                        </div>
                
                        <div className="container">
                            <img src={Front_gate} alt="front-gate" />
                            <h3 className="location_header">role of the bureau</h3>
                            <p>As an essential government agency, the BPI plays a vital role in the country's agricultural and plant-related initiatives. Its presence in Manila ensures that it is well-connected to government offices, research institutions, and industry stakeholders. </p>
                        </div>
                
                        <div className="container">  
                            <img src={Admin_building_2} alt="admin-building-2" />
                            <h3 className="location_header">address of the bureau</h3>
                            <p className="address_text">BUREAU OF PLANT INDUSTRY, 692 SAN ANDRES ST., MALATE, MANILA, NATIONAL CAPITAL REGION, PHILIPPINES, 1004</p>    
                        </div>
                    </div>

                </div>

                <div className="section">

                    <h2>customer inquiries</h2>

                    <div className="section_container_customer_inquiry_s1">
                        <img src={Pamphlet_questionMark} alt="pamphlet-icon" />
                        <div className="container_search">
                            <h3>where can we point you to our office today?</h3>
                            <input placeholder="enter event or place" />
                        </div>
                        
                    </div>

                    <div className="section_container_customer_inquiry_s2">
                        <div className="container_faq">
                            <h2 className="faq_header">frequently asked questions</h2>
                            <p>Hover over the list to check</p>
                            <ul>
                                <li><a href="#">where are the training held in bpi?</a></li>
                                <li><a href="#">does bpi held kadiwa stores?</a></li>
                                <li><a href="#">where are the hydrophonics training being held?</a></li>
                                <li><a href="#">where can i get free seeds?</a></li>
                                <li><a href="#">where can i get my plant quarantine permit?</a></li>
                            </ul>
                        </div>
                        <img src={Pamphlet_building} alt="vector-map" />
                    </div>

                </div>

                <div className="section" id="section_color">
                    <h2>about the locators map</h2>

                    <div className="about_hero_banner">
                        <div className="text_header">
                            <img src={Locators_map_logo} alt="locators-map-logo" />
                            <h3 className="text_header_h3">visit the central office with a guide</h3>
                        </div>
                        <img src={Bpi_compound} alt="bpi-compound" />
                    </div>
                    

                    <div className="section_about_para">

                        <div className="about_container">
                            <div className="image_holder">
                                <img src={Pamphlet} alt="pamphlet" />
                            </div>
                            <h3>Overview</h3>
                            <p className="about_locators_p">The BPI Central Office locators map is a visual representation that pinpoints specific locations, offering an overview of various points of interest within the two BPI compounds. </p>
                        </div>

                        <div className="about_container">
                            <div className="image_holder">
                                <img src={Map_hexa_piece} alt="locator-map" />
                            </div>
                            <h3>Map highlights</h3>
                            <p className="about_locators_p">The map highlights key offices and areas, such as the bureau divisions, and administration offices , providing visitors and users with a convenient reference to navigate the BPI Central Office. </p>
                        </div>

                        <div className="about_container">
                            <div className="image_holder">
                                <img src={Mobile_map} alt="mobile-map" />
                            </div>
                            <h3>Web access and IEC</h3>
                            <p className="about_locators_p">The maps serve as valuable tool both the website and the tri-fold IEC for seeking essential services, offering a user-friendly and informative images and descriptions to easily identify and locate specific destinations within the map and compounds.</p>
                        </div>
                        
                    </div>

                </div>

                <div className="section">

                    <h2>locators map iec</h2>
                    <p className="locators_iec_para">grab a copy of the locators map brochure at the information and computer section</p>

                    <div className="image_holder">
                        <img className="map_iec_art" src={Map_info_sec} alt="map_info_sec" />
                    </div>

                </div>

            <Footer />
        </>
    )
}

export default home