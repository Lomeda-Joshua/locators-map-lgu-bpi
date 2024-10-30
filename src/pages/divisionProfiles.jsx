import NavBar from '../components/navBar'
import Footer from '../components/footer'

import Bpi_logo from '../assets/logo_and_branding/bpi logo.png'

import './pages.css'

function divisionProfiles(){
    return(
        <>
            <NavBar />

                <div className="container">
                    <div className="image_holder">
                        <img src={Bpi_logo} alt="" />
                    </div>
                    <h2>division profiles</h2>
                    <h4>information about the divisions and their services available</h4>
                </div>
           

            <Footer />
        </>
    )
}

export default divisionProfiles