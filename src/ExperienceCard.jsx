import './Experience.css';

function ExperienceCard({imgSource, jobTitle, companyName, typeEmpl, period}) {
    return(
        <div className="experience-card">
            <img src={imgSource} id="logo-img"/>
            <div className="description">
                <h2 id="job-description">{jobTitle}</h2>
                <div style={{display: "flex"}}>
                    <h4 id="company-name">{companyName}</h4>
                    <h4 id="employment-type">{typeEmpl}</h4>
                </div>
                <h4 id="period-of-work">{period}</h4>
            </div>
        </div>
    );
}

export default ExperienceCard;