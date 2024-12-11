import { Card } from "react-bootstrap";
import {CardBody} from "react-bootstrap";
import {CardTitle} from "react-bootstrap";
import Optima_Logo from "./assets/Optima-Logo.jpg";
import ExperienceCard from "./ExperienceCard";
import './Experience.css';

function Experience() {
    return(
        <div id="experience">
            <h1 id="experience-title">Experience</h1>
            <ExperienceCard
                imgSource={Optima_Logo}
                jobTitle="Fullstack Developer - Intern"
                companyName="Optima Technology"
                typeEmpl="Internship"
                period="March 2023 - April 2023"/>
        </div>
    );
}

export default Experience;