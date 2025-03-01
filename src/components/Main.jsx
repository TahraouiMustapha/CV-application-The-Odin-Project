import { useState } from "react"
import { PersonalDetails } from "./PersonalDetails";
import { ProfileSummary } from "./ProfileSummary";
import { PracticalExperienceCard } from "./PracticalExpCard";
import { EducationCard } from "./EducationCard";
import arrowIcon from "../assets/arrow.svg";
import '../styles/main.css'
import '../styles/form.css' 

function Head(props) {
    return(
        <div className={`head ${props.shown === props.title ? 'open' : ''}`}>
            <p>{props.title}</p>
            <div onClick={() => {
                props.shown === props.title
                ? props.setShown('')
                : props.setShown(props.title);
                console.log(props.shown)
            }}>
                <img src={arrowIcon} alt="arrow icon" />
            </div>
        </div>
    )
}

export default function Main() {
    const [personalDetails, setPersonalDetails] = useState({
        fullName: '', 
        email: '', 
        phoneNumber: ''
    });

    const [profileSummary, setProfileSummary] = useState({
        heading: '',
        summary: ''
    })

    const [experiencesArray, setExperiencesArray] = useState([]);
    const [educationsArray, setEducationsArray] = useState([]);

    // use state for handle the shown component
    const [shown, setShown] = useState('');

    // event handlers to submit the new informations

    function handlePersonalDetails(newDetails) {
        setPersonalDetails(newDetails);
    }

    function handleProfileSummary(newDetails) {
        setProfileSummary(newDetails)
    }

    function handleExperiences(newExperienceCard) {

        setExperiencesArray(prevArray => [
            ...prevArray, 
            {
                id: experiencesArray.length,
                ...newExperienceCard
            }
        ])
    }

    function handleEducations(newEducationCard) {
        console.log(educationsArray)
        setEducationsArray(prevArray => [
            ...prevArray,
            {id: prevArray.length, ...newEducationCard}
        ])
    }

    return (
        <>
            <div className="main">
                <section className='edit-section' >
                    <Head title={'Personal Details'} shown={shown} setShown={setShown}/>
                    <PersonalDetails 
                    className={`forms ${shown === "Personal Details" ? 'visible' : ''}`}
                    handlePersonalDetails = {handlePersonalDetails} />

                    <Head title={'Profile Summary'} shown={shown} setShown={setShown}/>
                    <ProfileSummary 
                    className={`forms ${shown === "Profile Summary" ? 'visible' : ''}`}
                    handleProfileSummary = {handleProfileSummary}/>

                    {/* experience div */}
                    <Head title={'Experience'} shown={shown} setShown={setShown}/>                  
                    <div 
                    className={`forms ${shown === "Experience" ? 'visible' : ''}`} 
                    style={{padding:'0 24px'}}>
                         <PracticalExperienceCard handleExperiences={handleExperiences}/>
                    </div>

                    {/* education div */}
                    <Head title={'Education'} shown={shown} setShown={setShown}/>
                    <div 
                    className={`forms ${shown === "Education" ? 'visible' : ''}`}
                    style={{padding: '0 24px'}}>
                        <EducationCard handleEducations={handleEducations}/> 
                    </div> 
                </section>

                <section className="cv-section">
                    <div >{personalDetails.fullName}</div>
                    <div >{personalDetails.email}</div>
                    <div >{ experiencesArray.length > 0 && 'good' }</div>
                    <div >{ educationsArray.length > 0 && 'good education' }</div>

                </section>
            </div>
        </>
    )
}