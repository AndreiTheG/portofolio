import './Contact.css'
import ContactForm from './ContactForm';

function Contact() {

    return(
        <div>
            <div id="contact">
                <h1 id="contact-title" style={{display: 'flex', justifyContent: 'center', color: '#D356C2'}}>Contact</h1>
                <br/>
                <ContactForm/>
                <br/>
                <div id="profiles">
                    <a href='https://www.linkedin.com/in/andrei-gheorghe-0b643bb3/'>
                        <img id="linkedin" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'>
                        </img>
                    </a>
                    <a href='https://github.com/AndreiTheG'>
                        <img id="github" src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'>
                        </img>
                    </a>
                    <a href='https://www.hackerrank.com/profile/andrei_alexandr9'>
                        <img id="hackerrank" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png'>
                        </img>
                    </a>
                    <a href='https://leetcode.com/u/Andralex2001/'>
                        <img id="leetcode" src='https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png'>
                        </img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;