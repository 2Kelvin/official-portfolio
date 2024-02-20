import SectionLink from '../SectionLink/SectionLink';
import './TopNav.css';


export default function TopNav() {
    return (
        <nav className='topnav'>
            <a href='#webHome'>
                <code>&lt; Kelvin /&gt;</code>
            </a>
            <div className='topLinksContainer'>
                <SectionLink nameOfSection='Skills' />
                <SectionLink nameOfSection='Projects' />
            </div>
        </nav>
    );
}