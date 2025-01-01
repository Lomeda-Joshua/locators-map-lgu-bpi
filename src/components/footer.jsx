import Locators_Map_Logo_White from '../assets/logo_and_branding/locators-map-logo-white.webp'

function footer(){
    return(
        <>
            <footer>
                <div className="section_conteiner_footer">

                    <div className="footer_container">
                        <img src={Locators_Map_Logo_White} alt="locators-map-logo-white" />
                        <h2>the bureau and the department</h2>
                        <ul>
                            <li><a href="https://buplant.da.gov.ph/">bureau of plant industry</a></li>
                            <li><a href="https://www.da.gov.ph/">departmen of agriculture</a></li>
                            <li><a href="#">information and computer section</a></li>
                        </ul>
                    </div>

                    <div className="footer_container">
                        <h2>page information</h2>
                        <ul>
                            <li><a href="#">transparency seal</a></li>
                            <li><a href="#">bureau of directory</a></li>
                            <li><a href="#">division pages</a></li>
                        </ul>
                    </div>

                </div>
            

                <div className="credits">
                    <p>the central office locators map is made and published by the information and computer section | department of agriculture - bureau of plant industry</p>
                </div>

            </footer>
        </>
    )
}

export default footer