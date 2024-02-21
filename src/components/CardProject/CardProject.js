import './CardProject.css';
import { FaGithubAlt } from "react-icons/fa6";


export default function CardProject({ appType, appName, githubLink, description, tags: appTags }) {
    return (
        <div className='projectCard'>
            <code>{appType}</code>
            <div className='appHeadingDiv'>
                <h3>{appName}</h3>
                <a href={githubLink} target='blank'><FaGithubAlt className='githubIcon' /></a>
            </div>
            <div className='appDescription'>{description}</div>
            <div className='appLanguages'>{appTags}</div>
        </div>
    );
}