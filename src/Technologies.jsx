import './Technologies.css';
import CPlusPlus from './assets/CPlusPlus_Logo.png';
import Java from './assets/Java_Logo.png';
import JavaScript from './assets/JavaScript_Logo.png';
import CSharp from './assets/CSharp_Logo.png';
import HTML_Logo  from './assets/HTML5_Logo.png';
import CSS_Logo from './assets/CSS3_Logo.png';
import Bootstrap_Logo from './assets/Bootstrap_Logo.png';
import DotNET from './assets/Microsoft_.NET_logo.png';
import Angular from './assets/Angular_Logo.png';
import SpringBoot from './assets/Spring_Boot.png';
import PostgreSQL from './assets/PostgreSQL_Logo.png';
import Thymeleaf from './assets/thymeleaf.png';
import Hibernate from './assets/Hibernate_Logo.png';
import Microsoft_SQL_Server_Logo from './assets/Microsoft_SQL_Server_Logo.png';
import Visual_Studio_Code from './assets/Visual_Studio_Code.png';
import Visual_Studio from './assets/Visual_Studio_2022.png';
import Code_Blocks from './assets/Code_Blocks_logo.jpg';
import Intellij_IDEA from './assets/Intellij_IDEA_Icon.png';
import Figma_Logo from './assets/Figma-Logo.png';

function Technologies() {

    return(
        <div className='technologies-presentation'>
            <h1 id="technologies">Technologies</h1>
            <div className='tools-logos'>
                <h2>Languages, libraries and tools</h2>
                <div className='technologies-part1'>
                    <img src={CPlusPlus} alt="C++ Logo" id="CPlusPlus"/>
                    <img src={Java} alt="Java Logo" id="Java"/>
                    <img src={JavaScript} alt="JavaScript Logo" id="JavaScript"/>
                    <img src={CSharp} alt="CSharp Logo" id="CSharp"/>
                    <img src={HTML_Logo} alt="HTML5 Logo" id="HTML5"/>
                    <img src={CSS_Logo} alt="CSS3 Logo" id="CSS3"/>
                    <img src={Bootstrap_Logo} alt="Bootstrap Logo" id="Bootstrap"/>
                </div>
                <br/>
                <div className='technologies-part2'>
                    <img src={DotNET} alt="DotNet Logo" id="DotNet"/>
                    <img src={Angular} alt="Angular Logo" id="Angular"/>
                    <img src={SpringBoot} alt="SpringBoot Logo" id="SpringBoot"/>
                    <img src={PostgreSQL} alt="PostgreSQL Logo" id="PostgreSQL"/>
                    <img src={Thymeleaf} alt="Thymeleaf Logo" id="Thymeleaf"/>
                    <img src={Hibernate} alt="Hibernate Logo" id="Hibernate"/>
                    <img src={Microsoft_SQL_Server_Logo} alt="Microsoft SQL Server Logo" id="SQLServer"/>
                </div>
            </div>
            <div className='list-of-ides-and-techs'>
                <h2>Technologies</h2>
                <div className='tech-logos'>
                    <img src={Visual_Studio_Code} alt="Visual Studio Code Logo" id="Visual-Studio-Code"/>
                    <img src={Visual_Studio} alt="Visual Studio Logo" id="Visual-Studio"/>
                    <img src={Code_Blocks} alt="Code Blocks Logo" id="Code-Blocks"/>
                    <img src={Intellij_IDEA} alt="Intellij IDEA Logo" id="Intellij-IDEA"/>
                    <img src={Figma_Logo} alt="Figma Logo Logo" id="Figma-Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Technologies;