import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import accountIcon from '../assets/account.svg';
import bagIcon from '../assets/bag.svg';
import schoolIcon from '../assets/school.svg';
import '../styles/CV.css';



export default function CV(props) {
    const personalDetails = props.personalDetails;
    const profileSummary = props.profileSummary;

    return (
        <section className="cv-section">
            <HeadCV fullName={personalDetails.fullName} heading={profileSummary.heading}/>
            <NavCV email={personalDetails.email} phoneNumber={personalDetails.phoneNumber}/>
            <div className="cv-content">
                {/* Profile */}
                <div className="information-section">
                    <Title iconSrc='profile'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate.</p>
                </div>
                {/* Experience */}
                <div className="information-section">
                    <Title iconSrc='experience'/>
                    <div className='cards-container'>
                        <ExpCVCard/>
                        <ExpCVCard/>
                        <ExpCVCard/>
                    </div>
                </div>
                {/* Education */}
                <div className="information-section">
                    <Title iconSrc='education'/>
                    <div className='cards-container'>
                        <EduCVCard/>
                        <EduCVCard/>
                        <EduCVCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HeadCV(props) {
    return (
        <div className="head-cv">
            <p className="full-name">
                {props.fullName? props.fullName.toUpperCase(): 'Your Name Here'}
            </p>
            <p className="profession">
                {props.heading?props.heading.toUpperCase(): 'Your Profession'}
            </p>
        </div>
    )
}

function NavCV(props) {
    return (
        <div className="nav-cv">
            <div>
                <img src={emailIcon} alt="icon" />
                <p>{props.email? props.email: 'Email'}</p>
            </div>
            <div>
                <img src={phoneIcon} alt="icon" />
                <p>{props.phoneNumber? props.phoneNumber: 'your number'}</p>
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

function ExpCVCard(props) {
    return (
        <div className='cv-card'>
            <div className="head">
                <div className="position">Software engineer inkadsa</div>
                {'-'}
                <div className="company-name">companyName</div>
                <div className="duration">
                    date
                </div>
            </div>
            <div className="details">
                details Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam unde similique? Vero, modi reprehenderit. Minus, autem expedita. Suscipit, pariatur.
            </div>
        </div>
    )
}

function EduCVCard(props) {
    return (
        <div className="cv-card">
            <div className="degree">degree</div>
            <div className='school-career'>
                <div>school</div>
                <div>date</div>
            </div>
            <div> location</div>
        </div>
    )
}