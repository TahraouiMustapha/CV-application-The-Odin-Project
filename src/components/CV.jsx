
import { format } from 'date-fns';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import accountIcon from '../assets/account.svg';
import bagIcon from '../assets/bag.svg';
import schoolIcon from '../assets/school.svg';
import '../styles/CV.css';



export default function CV(props) {
    const personalDetails = props.personalDetails;
    const profileSummary = props.profileSummary;
    const experiencesArray = props.experiencesArray;
    const educationsArray = props.educationsArray;


    return (
        <section className="cv-section">
            <HeadCV fullName={personalDetails.fullName} heading={profileSummary.heading}/>
            <NavCV email={personalDetails.email} phoneNumber={personalDetails.phoneNumber}/>
            <div className="cv-content">
                {/* Profile */}
                <div className="information-section">
                    <Title iconSrc='profile'/>
                    <p>{profileSummary.summary? profileSummary.summary: 'Add your summary in \'Profile Summary\' section'}</p>
                </div>
                {/* Experience */}
                <div className="information-section">
                    <Title iconSrc='experience'/>
                    <div className='cards-container'>
                        {experiencesArray.length > 0
                        ? experiencesArray.map(exp => {
                            // to avoid passing an empty object (just with id)
                            return Object.keys(exp).length >= 2 && <ExpCVCard key={exp.id} expObj={exp}/>
                        } )
                        : 'Add your experience in \'Experience\' section'}
                        
                    </div>
                </div>
                {/* Education */}
                <div className="information-section">
                    <Title iconSrc='education'/>
                    <div className='cards-container'>
                        {educationsArray.length > 0
                        ? educationsArray.map(edu => {
                            // to avoid passing an empty object (just with id)
                            return Object.keys(edu).length >= 2 && <EduCVCard key={edu.id} eduObj={edu}/>
                        })
                        : 'Add your experience in \'Experience\' section' }
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
    const expObj = props.expObj;

    const from = expObj.fromDate? format(new Date(expObj.fromDate), "MM/dd/yyyy"): '' ;
    const to = expObj.toDate ? format(new Date(expObj.toDate), "MM/dd/yyyy"): '' ;

    return (
        <div className='cv-card'>
            <div className="head">
                <div className="position">{expObj.position}</div>
                {'-'}
                <div className="company-name">{expObj.companyName}</div>
                <div className="duration">
                    {`(${from} - ${to})`}
                </div>
            </div>
            <div className="details">
                {expObj.details}
            </div>
        </div>
    )
}

function EduCVCard(props) {
    const eduObj = props.eduObj;

    const from = eduObj.fromDate ? format(new Date(eduObj.fromDate), "MM/dd/yyyy") : '';
    const to = eduObj.toDate ? format(new Date(eduObj.toDate), "MM/dd/yyyy") : '';

    return (
        <div className="cv-card">
            <div className="degree">{eduObj.degree}</div>
            <div className='school-career'>
                <div>{eduObj.school}</div>
                <div>
                    {`(${from} - ${to})`}
                </div>
            </div>
            <div> {eduObj.location}</div>
        </div>
    )
}