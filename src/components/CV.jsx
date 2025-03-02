import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import accountIcon from '../assets/account.svg';
import bagIcon from '../assets/bag.svg';
import schoolIcon from '../assets/school.svg';
import '../styles/CV.css';

function HeadCV(props) {
    return (
        <div className="head-cv">
            <p className="full-name">full Name</p>
            <p className="profession">profession</p>
        </div>
    )
}

function NavCV(props) {
    return (
        <div className="nav-cv">
            <div>
                <img src={emailIcon} alt="icon" />
                <p>email...</p>
            </div>
            <div>
                <img src={phoneIcon} alt="icon" />
                <p>number</p>
            </div>
        </div>
    )
}

function Title(props) {
    const icons = {
        'profile': accountIcon,
        'experience': bagIcon,
        'education': schoolIcon
    }

    return (
        <div className='title'>
            <img src={icons[props.iconSrc]} alt="icon" />
            <p>{props.iconSrc.toUpperCase()}</p>
        </div>
    )

}


export default function CV(props) {
    return (
        <section className="cv-section">
            <HeadCV/>
            <NavCV/>
            <div className="cv-content">
                {/* Profile */}
                <div className="information-section">
                    <Title iconSrc='profile'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate.</p>
                </div>
                {/* Experience */}
                <div className="information-section">
                    <Title iconSrc='experience'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate.</p>
                </div>
                {/* Education */}
                <div className="information-section">
                    <Title iconSrc='education'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate.</p>
                </div>
            </div>
        </section>
    )
}