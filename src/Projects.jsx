import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return(
        <div>
            <div id="projects">
                <h1 id="projects-title">Projects</h1>
                 <div className='project-list' >
                    <div className='projects-row'> 
                        <ProjectCard title='Web Apps Cinephiles'
                            description='I created a web application in which a user can enter to a film page and offer a rating, send comments and save a film to his watchlist page. Besides, ...'
                            fullDescription='I created a web application in which a user can enter to a film page and offer a rating, send comments and save a film to his watchlist page. Besides, I implemented chat functionality in which the users can communicate with each other in real-time offering them the possibility to form friendships. I used the Spring Boot framework for the backend and PostgreSQL for the database.'
                            technologies={['Java', 'Spring Boot', 'Hibernate', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PostgreSQL']}
                            link='https://github.com/AndreiTheG/WebAppCinephiles'/>
                        <br/>
                        <ProjectCard title='Presidential Election'
                            description='I created a project in which a user has the right to log in or register to the main page of the Presidential Election. After the user gets access, ...'
                            fullDescription='I created a project in which a user has the right to log in or register to the main page of the Presidential Election. After the user gets access, he will see the top of the candidates by the number of votes. The user can apply for the presidency or can vote for one of the candidates. Also, the user can visit his profile page with his data and description. It can edit its description at any time. Besides, if the user is one of the candidates, has the right to visit the profile pages of others.'
                            technologies={['Java', 'Spring Boot', 'Hibernate', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PostgreSQL']}
                            link='https://github.com/AndreiTheG/PresidentialElection'/>
                        <br/>
                        <ProjectCard title='Typing speed'
                            description='I created a mini-game which is based on the Typing speed game and has the same functionalities and rules. We can ...'
                            fullDescription='I created a mini-game which is based on the Typing speed game and has the same functionalities and rules. We can write some words inside of an input and the color of each letter from the text becomes green if we write the current correct letter or red if we write the wrong letter. I used HTML and JavaScript languages in Visual Studio Code.'
                            technologies={['HTML', 'Bootstrap', 'JavaScript']}
                            link='https://github.com/AndreiTheG/Typing-speed'/>
                    </div> 
                    <div className='projects-row'>
                        <ProjectCard title='Dinosaur Runner'
                            description='I created a mini-game which is based on the Dinosaur Runner game and has the same functionalities and rules. We can ...'
                            fullDescription='I created a mini-game which is based on the Dinosaur Runner game and has the same functionalities and rules. We can press the key \"Space\" so the dinosaur will jump over the object and we can see the score after the player loses. I used HTML and JavaScript languages in Visual Studio Code.'
                            technologies={['HTML', 'Bootstrap', 'JavaScript']}
                            link='https://github.com/AndreiTheG/DinosaurRunner'/>
                        <br/>
                        <ProjectCard title='Airplane Fighter'
                            description='I created a mini-game which is based on the Airplane Fighter game and has the same functionalities and rules. We can press ...'
                            fullDescription='I created a mini-game which is based on the Airplane Fighter game and has the same functionalities and rules. We can press the keys \"Home\" and \"End\" to move the plane to the left, respectively, right and press the key \"Enter\" to shoot projectiles at the falling objects. I used HTML and JavaScript languages in Visual Studio Code.'
                            technologies={['HTML', 'Bootstrap', 'JavaScript']}
                            link='https://github.com/AndreiTheG/AirplaneFighterBonus1'/>
                        <br/>
                        <ProjectCard title='Snake'
                            description='I created a mini-game which is based on the Snake game and has the same functionalities and rules. We can press ...'
                            fullDescription='I created a mini-game which is based on the Snake game and has the same functionalities and rules. We can press the keys \"Arrow Up\", \"Arrow Down\", \"Arrow Left\" and \"Arrow Right\" to move the snake to all four directions mentioned earlier. When the snake eats the fruit, the score will increase and if the snake hits itself or by the wall, the game will finish and the player will play a new game. I used HTML and JavaScript languages for the structure and functionalities of the game and Bootstrap framework for styling in Visual Studio Code.'
                            technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap']}
                            link='https://github.com/AndreiTheG/Snake'
                        /> 
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default Projects;