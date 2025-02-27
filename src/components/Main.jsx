import { useState } from "react"
import EditSection from "./EditSection"
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
                <EditSection 
                handlePersonalDetails={ handlePersonalDetails }
                handleProfileSummary={handleProfileSummary}/>

                <CvSection 
                personalDetails = { personalDetails }
                profileSummary = { profileSummary }/>
            </div>
        </>
    )
}