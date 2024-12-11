import WellcodeRO from './assets/Wellcode_RO.png';
import ASE_Logo from './assets/Logo_ASE.png';
import Logo_ICHB from './assets/Logo-ICHB.png';
import EducationCard from './EducationCard';
import './Education.css';

function Education() {
    return(
        <div>
            <div id="education">
                <h1 id="education-title">Education</h1>
                <EducationCard
                    imgSource={WellcodeRO} 
                    nameInstitution='WellCode RO'
                    location='Remote' 
                    schoolProgram='Programming Course' 
                    profile='Computer Science' 
                    period='December 2021 - December 2024' />
                <br/>
                <EducationCard
                    imgSource={ASE_Logo} 
                    nameInstitution='Bucharest University of Economic Studies'
                    location='Bucharest, Romania' 
                    schoolProgram="Bachelor's Degree" 
                    profile='Computer Science' 
                    period='December 2021 - December 2024' />
                <br/>
                <EducationCard
                    imgSource={Logo_ICHB} 
                    nameInstitution='International Computer High School of Bucharest'
                    location='Bucharest, Romania' 
                    schoolProgram='High School' 
                    profile='Computer Science' 
                    period='September 2017 - June 2021' />
            </div>
        </div>
    );
}

export default Education;