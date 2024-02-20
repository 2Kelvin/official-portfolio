import SectionLink from '../SectionLink/SectionLink';
import './TopNav.css';


export default function TopNav() {
    return (
        <nav className='topnav'>
            <code>&lt; Kelvin /&gt;</code>
            <div className='topLinksContainer'>
                <SectionLink nameOfSection='Skills'/>
                <SectionLink nameOfSection='Projects'/>
            </div>
        </nav>
    );
}