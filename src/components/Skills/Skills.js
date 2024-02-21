import Subheading from '../Subheading/Subheading';
import './Skills.css';
import { BsPlus } from "react-icons/bs";


export default function Skills() {
    return (
        <section className='skillsContainer'>
            <Subheading subheadingName='Skills' />

            <p>
                I'm a strong <span className='progLang'>JavaScript</span> developer. I love developing web apps using: <span className='progLang'>React</span>, <span className='progLang'>NodeJS</span>, <span className='progLang'>MongoDB</span> and <span className='progLang'>CSS</span>.
            </p>

            <p>
                I'm a fullstack graduate from <a href='https://www.alxafrica.com/' target='blank'>ALX</a> with a very solid understanding and experience in building both client-side and server side applications and also on working with servers and databases. Programming languages and tools learnt during this rigorous program are:
            </p>

            <ul className='alxList'>
                <li> <BsPlus className='plus' /> C</li>
                <li> <BsPlus className='plus' />Python</li>
                <li> <BsPlus className='plus' />MySQL</li>
                <li> <BsPlus className='plus' />NodeJS</li>
                <li> <BsPlus className='plus' />MongoDB</li>
                <li> <BsPlus className='plus' />Git</li>
                <li> <BsPlus className='plus' />Shell</li>
                <li> <BsPlus className='plus' />Devops</li>
            </ul>

            <p>
                I also have experience <span className='progLang'>collaborating</span> with other developers to develop a singular application on Github. I highly value <span className='progLang'>teamwork</span>.
            </p>
        </section>
    );
}