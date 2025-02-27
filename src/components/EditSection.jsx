import { PersonalDetails } from "./PersonalDetails";
import { ProfileSummary } from "./ProfileSummary";


export default function EditSection(props) {
    return (
        <section className="edit-section" >
            <PersonalDetails handlePersonalDetails = {props.handlePersonalDetails}/>
            <ProfileSummary handleProfileSummary = {props.handleProfileSummary}/>
        </section>
    )
}   