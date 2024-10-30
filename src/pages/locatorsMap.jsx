import NavBar from '../components/navBar'
import Footer from '../components/footer'

import Locators_map from '../assets/vector_map/map_bpi.webp'
import './pages.css'

function locatorsMap(){

    function helloWorld(){
        
    }

    return(
        <>
            <NavBar />


                <div className="ppssd"></div>
                
                <div className="map_holder">
                    <img className="locators_map" src = {Locators_map} />
                </div>
                
            <Footer />
        </>
    )
}

export default locatorsMap