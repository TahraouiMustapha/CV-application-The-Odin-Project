import { useState } from "react"
import EditSection from "./EditSection"
import CvSection from "./CvSection"
import '../styles/main.css'

export default function Main() {
    const [personalDetails, setPersonalDetails] = useState({fullName: '', email: ''});

    function handlePersonalDetails(fullName, email) {
        const newDetails = {fullName, email}
        setPersonalDetails(newDetails);
    }

    return (
        <>
            <div className="main">
                <EditSection handlePersonalDetails={ handlePersonalDetails }/>
                <CvSection personalDetails = { personalDetails }/>
            </div>
        </>
    )
}