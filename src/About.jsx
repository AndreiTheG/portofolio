import Nav from "./Nav";
import './About.css';
import Profile from "./assets/profile_photo.jpeg";

function About() {
    return(
        <div id="about">
            <h1 id="about-me">About me</h1>
            <div className="information">
                <img src={Profile} id="image-profile" alt="Profile image"/>
                <div>
                    <p id="detailed-presentation">
                        Hello, everyone! My name is Andrei Gheorghe, and I am an ambitious, dedicated, friendly and cheerful person. 
                        I have discovered my passion to programming since 9th grade, which is why I'd decided to pursue my career as a software developer. 
                        I have recently graduated from Economic Informatics college from Bucharest University of Economic Studies where 
                        I have studied both Computer Science and Economics. During that I time, I also did Programming course from Wellcode RO 
                        where I solved over 200 algorithmic problems in C++ and Java, and under their guidance, I also created my own personal projects 
                        using Java, Spring Boot, PostgreSQL and basic web technologies like HTML, CSS and JavaScript. During my free time, I like to continue 
                        learning new technologies and try to make my own apps. I also love to take a walk outside in the city with my friends and also relax 
                        in the parks. Additionally, I enjoy reading and drawing, both of these skills helping me to come up with good and creative ideas when 
                        it comes to designing the functionalities and user interfaces of the apps that could become handy in the further future.
                        I believe that my passion, dedication and contributions will serve me in my career and I enjoy growing in the field of software development.
                    </p>
                    <p>This is my resume: <a id="resume-link" style={{ color: '#D356C2', fontWeight: 'bolder'}} href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:363bd89b-5a1a-434c-ad66-310da4203ce5?filetype=application%2Fpdf&viewer%21megaVerb=group-discover">Resume</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;