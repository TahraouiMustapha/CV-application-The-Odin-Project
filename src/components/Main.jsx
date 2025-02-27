import { useState } from "react"
import { PersonalDetails } from "./PersonalDetails";
import { ProfileSummary } from "./ProfileSummary";
import CvSection from "./CvSection"
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

    // event handlers to submit the new informations

    function handlePersonalDetails(newDetails) {
        setPersonalDetails(newDetails);
    }

    function handleProfileSummary(newDetails) {
        setProfileSummary(newDetails)
    }

    return (
        <>
            <div className="main">
                <section className="edit-section" >
                    <PersonalDetails handlePersonalDetails = {handlePersonalDetails}/>
                    <ProfileSummary handleProfileSummary = {handleProfileSummary}/>
                </section>

                <section className="cv-section">
                    <div className="name">{personalDetails.fullName}</div>
                    <div className="email">{personalDetails.email}</div>
                    <div className="email">{personalDetails.phoneNumber}</div>
                </section>
            </div>
        </>
    )
}