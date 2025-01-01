import Aed_brand from '../assets/logo_divisions/aed-NBG-01.png'
import Aed_background from '../assets/images/aed_building.jpg'

import './components.css'


function divisionProfilesCard(props){

    console.log(props.logo)

    return(
        <>
            <div className="profile_card">
                <img className="profile_background_image" src={Aed_background} />
                <h3 className="title_profile">{props.name}</h3>
                <img className="bpi_division_logo" src={props.logo} alt="" />
            </div>
        </>
    )
}

export default divisionProfilesCard