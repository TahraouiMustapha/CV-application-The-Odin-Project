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

    console.log(experiencesArray)

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
                            // check if the obj that passed in component is empty (just with id)
                            return Object.keys(exp).length >= 2 && <ExpCVCard key={exp.id} expObj={exp}/> 
                        })
                        : 'Add your experience in \'Experience\' section'}
                        
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
    const expObj = props.expObj;
    return (
        <div className='cv-card'>
            <div className="head">
                <div className="position">{expObj.position}</div>
                {'-'}
                <div className="company-name">{expObj.companyName}</div>
                <div className="duration">
                    {`(${expObj.fromDate ,'', expObj.toDate})`}
                </div>
            </div>
            <div className="details">
                {expObj.details}
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