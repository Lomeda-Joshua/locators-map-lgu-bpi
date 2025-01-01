import './divisionInfo.css'

function divisionInfoCard(props){

    return(
        <div className="info_card">
            
            <div className="background_image"></div>

            <div className="info_header">
                <h1>Bpi section logo</h1>

                <div className="title_description">
                    <h2>Division title</h2>
                    <p>Division Description</p>
                </div>

            </div>



            <h2>Website</h2>
            <p>Link to website</p>


            <h2>Services</h2>
            <p>Services logo and brand</p>

            <h2>Mission</h2>
            <p>Desciption MIssion</p>

            <h2>Vision</h2>
            <p>Desciption Vision</p>

            <h2>Mandate</h2>
            <p>Desciption Mandate</p>

        </div>
    )
}

export default divisionInfoCard