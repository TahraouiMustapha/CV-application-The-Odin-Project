import { useState } from "react"
import { PersonalDetails } from "./PersonalDetails";
import { ProfileSummary } from "./ProfileSummary";
import { PracticalExperienceCard } from "./PracticalExpCard";
import '../styles/main.css'

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

    return (
        <>
            <div className="main">
                <section className="edit-section" >
                    <PersonalDetails handlePersonalDetails = {handlePersonalDetails}/>
                    <ProfileSummary handleProfileSummary = {handleProfileSummary}/>
                    {/* experience div */}
                    <div>
                        <PracticalExperienceCard handleExperiences={handleExperiences}/>
                    </div>
                </section>

                <section className="cv-section">
                    <div >{personalDetails.fullName}</div>
                    <div >{personalDetails.email}</div>
                    <div >{ experiencesArray.length > 0 && 'good' }</div>

                </section>
            </div>
        </>
    )
}