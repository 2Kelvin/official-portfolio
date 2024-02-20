import { useState } from 'react';
import './SectionLink.css';


export default function SectionLink({ nameOfSection }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='eachSectionLink'>
            <hr style={{
                backgroundColor: isHovered && 'var(--myGreen)'
            }} />
            <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={'#' + nameOfSection.toLowerCase()}>
                    {nameOfSection}
                </a>
            </p>
        </div>
    );
}