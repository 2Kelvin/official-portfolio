import './SectionLink.css';


export default function SectionLink({ nameOfSection }) {
    return (
        <div className='eachSectionLink'>
            <hr />
            <p>{nameOfSection}</p>
        </div>
    );
}