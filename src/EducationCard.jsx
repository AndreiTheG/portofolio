import './Education.css';

function EducationCard({imgSource, nameInstitution, location, schoolProgram, profile, period}) {
    return(
        <div className='education-card'>
            <img src={imgSource} id="Img_Logo"/>
            <div className="description">
                <h2 id="institution-name">{nameInstitution}</h2>
                <h4 id="location">{location}</h4>
                <div style={{display: "flex"}}>
                    <h4 id="school-program">{schoolProgram}</h4>
                    <h4 id="profile">{profile}</h4>
                </div>
                <h4  id="period-of-work">{period}</h4>
            </div>
        </div>
    );
}

export default EducationCard;