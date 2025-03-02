import { useState } from "react"
import { PersonalDetails } from "./PersonalDetails";
import { ProfileSummary } from "./ProfileSummary";
import { PracticalExperienceCard } from "./PracticalExpCard";
import { EducationCard } from "./EducationCard";
import CV from "./CV";
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
            }}>
                <img src={arrowIcon} alt="arrow icon" />
            </div>
        </div>
    )
}

export default function Main() {
    const [personalDetails, setPersonalDetails] = useState({
        fullName: 'Tahraoui Mustapha', 
        email: '', 
        phoneNumber: ''
    });

    const [profileSummary, setProfileSummary] = useState({
        heading: 'Front End Developer',
        summary: ''
    })

    const [experiencesArray, setExperiencesArray] = useState([ ]);
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
                id: crypto.randomUUID(),
                ...newExperienceCard
            }
        ])
    }

    function handleEducations(newEducationCard) {
        setEducationsArray(prevArray => [
            ...prevArray,
            {id: crypto.randomUUID(), ...newEducationCard}
        ])
    }

    function handleAddingNewEmptyCard(e) {
        if(e.target.dataset.sectionname === 'Experience'){
            const newArray = [
                ...experiencesArray,
                {id: crypto.randomUUID()}
            ] 
            setExperiencesArray(newArray)
        } else if(e.target.dataset.sectionname === 'Education') {
            const newArray = [
                ...educationsArray,
                {id: crypto.randomUUID()}
            ]
            setEducationsArray(newArray)
        }
    }

    function handleDeleteExperienceCard(cardId) {
        const newArray = experiencesArray.filter( exp => exp.id !== cardId);
        setExperiencesArray(newArray);
    }

    function handleDeleteEducationCard(cardId) {
        const newArray = educationsArray.filter( edu => edu.id !== cardId);
        setEducationsArray(newArray);
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
                    className={`forms cards-container ${shown === "Experience" ? 'visible' : ''}`} 
                    style={{
                        padding:'0 24px',
                        gridTemplateRows: shown === "Experience" 
                            ? `${experiencesArray.reduce((total) => total.concat('1fr '), '')} ${experiencesArray.length === 0? '1fr':'min-content'}` 
                            : `${experiencesArray.reduce((total) => total.concat('0fr '), '')} 0fr`
                    }}>

                        {experiencesArray.map((exp) => {
                            return <PracticalExperienceCard 
                                    key={exp.id}
                                    obj={exp}
                                    handleExperiences={handleExperiences}
                                    handleDeleteExperienceCard={handleDeleteExperienceCard}/>
                        })}
                        <div>
                            <button 
                            className="add-experience" 
                            data-sectionname= "Experience"
                            onClick={handleAddingNewEmptyCard} >Add experience</button>
                        </div>
                    </div>

                    {/* education div */}
                    <Head title={'Education'} shown={shown} setShown={setShown}/>
                    <div 
                    className={`forms cards-container ${shown === "Education" ? 'visible' : ''}`}
                    style={{
                        padding: '0 24px',
                        gridTemplateRows: shown === "Education"
                        ? `${educationsArray.reduce((total)=> total.concat('1fr '), '')} ${educationsArray.length === 0? '1fr':'min-content'}`
                        : `${educationsArray.reduce((total)=> total.concat('0fr ') ,'')} 0fr`
                    }}>
                        {educationsArray.map((edu)=> {
                            return <EducationCard
                            key={edu.id}
                            obj={edu} 
                            handleEducations={handleEducations}
                            handleDeleteEducationCard={handleDeleteEducationCard}/>   
                        })}
                      
                        <div>
                            <button 
                            className="add-experience"
                            data-sectionname = "Education"
                            onClick={handleAddingNewEmptyCard}>Add experience</button>
                        </div>
                    </div> 
                </section>
            {/* cv part*/}
             <CV 
                personalDetails={personalDetails}
                profileSummary={profileSummary}
                experiencesArray={experiencesArray}
                educationsArray={educationsArray}/>           
            </div>
        </>
    )
}