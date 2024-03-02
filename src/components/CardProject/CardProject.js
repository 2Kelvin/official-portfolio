import './CardProject.css';
import { LuGithub } from "react-icons/lu";

export default function CardProject({ appType, appName, githubLink, description, appTags }) {
    return (
        <div className='projectCard'>
            <code>{appType}</code>

            <div className='appHeadingDiv'>
                <h3>{appName}</h3>
                <a href={githubLink} target='blank'><LuGithub className='githubIcon' /></a>
            </div>

            <div className='appDescription'>{description}</div>

            <div className='appLanguages'>
                <div className='langSubdiv'>
                    {appTags.map((tag) => <code>{tag}</code>)}
                </div>
            </div>
        </div>
    );
}