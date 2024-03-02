import Socials from '../Socials/Socials';
import './Home.css';

export default function Home() {
    return (
        <section className='home' id='webHome'>
            <h1>Kelvin Njihia</h1>
            <code>
                <span className='brackets'>&lt;</span>
                JavaScript Developer
                <span className='brackets'>/&gt;</span>
            </code>
            <p>I build beautiful and responsive web and mobile apps.</p>
            <Socials />
        </section>
    );
}