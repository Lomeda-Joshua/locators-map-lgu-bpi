import { useEffect } from 'react'

import NavBar from '../components/navBar'
import Footer from '../components/footer'

import Bpi_logo from '../assets/logo_and_branding/bpi logo.png'

import Aed from '../assets/logo_divisions/aed-NBG-01.png'
import Nsqcs from '../assets/logo_divisions/NSQCS NBG 1.png';
import Ppssd from '../assets/logo_divisions/PPSSD NBG 1.png';
import Cpmd from '../assets/logo_divisions/CPMD-NBG-1.png';
import Nsic from '../assets/logo_divisions/NSIC NBG 1.png';
import Npqsd from '../assets/logo_divisions/NPQSD NBG 1.png';
import Crpsd from '../assets/logo_divisions/CRPSD Logo 1 White Circle.png';

import DivisionInfo from '../components/divisionInfoCard';
import DivisionData from '../dataJs/profile_data';


import './pages.css'



function DataCard( { id,handleClick } ){

    return(
        <>
            <div className="getter" onClick={handleClick}>
                <h1>Hello</h1>
                <p>{id}</p>    
            </div>
            
        </>
    )
}


export default function divisionProfiles(){

    function getData(){
        console.log("clicked");
    }



    return(
        <>
            <NavBar />
                <div className="container_banner">
                    <div className="division_image_holder">
                        <img src={Bpi_logo} alt="" />
                    </div>

                    <div className="container_banner_holder">
                        <h2 className="title_banner">division profiles</h2>
                        <h4 className="title_sub">information about the divisions and their services available</h4>
                    </div>
                </div>

                <div className="container_profile_card">

                    <div className="profile_card" >
                        <img className="bpi_division_logo" src={Aed} alt="" />
                        <h3 className="title_profile">AED</h3>
                    </div>

                    <div className="profile_card"  >
                        <img className="bpi_division_logo" src={Nsqcs} alt="" />
                        <h3 className="title_profile">NSQCS</h3>
                    </div>

                    <div className="profile_card">
                        <img className="bpi_division_logo" src={Ppssd} alt="" />
                        <h3 className="title_profile">PPSSD</h3>
                    </div>

                    <div className="profile_card">
                        <img className="bpi_division_logo" src={Cpmd} alt="" />
                        <h3 className="title_profile">CPMD</h3>
                    </div>

                    <div className="profile_card">
                        <img className="bpi_division_logo" src={Nsic} alt="" />
                        <h3 className="title_profile">NSIC</h3>
                    </div>

                    <div className="profile_card">
                        <img id="npqsd" className="bpi_division_logo" src={Npqsd} alt="" />
                        <h3 className="title_profile">NPQSD</h3>
                    </div>

                    <div className="profile_card">
                        <img className="bpi_division_logo" src={Crpsd} alt="" />
                        <h3 className="title_profile">CRPSD</h3>
                    </div>

                </div>


                <div className="container_banner">
                        <h1 id="shower" style={{ display:"none" }}>Sample show</h1>
                        {/* <DivisionInfo /> */}
                        
                        <DataCard id={1} onClick={getData}/>
                </div>
           

            <Footer />
        </>
    )

}

