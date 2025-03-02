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
                <p>email...</p>
            </div>
            <div>
                <p>number</p>
            </div>
        </div>
    )
}

function Title(props) {
    const icons = {
        'email': emailIcon,
        'phone': phoneIcon,
        'profile': accountIcon,
        'experience': bagIcon,
        'education': schoolIcon
    }

    return (
        <div className='title'>
            <div>
                <img src={icons[props.iconSrc]} alt="icon" />
            </div>
            <p>{props.content? props.content : props.iconSrc.toUpperCase()}</p>
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
                    <Title iconSrc='' content=''/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate.</p>
                </div>
                {/* Experience */}

            </div>
        </section>
    )
}