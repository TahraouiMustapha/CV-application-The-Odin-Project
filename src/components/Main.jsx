import { useState } from "react"
import { PersonalDetails } from "./PersonalDetails";
import { ProfileSummary } from "./ProfileSummary";
import { PracticalExperienceCard } from "./PracticalExpCard";
import { EducationCard } from "./EducationCard";
import CV from "./CV";
import arrowIcon from "../assets/arrow.svg";
import '../styles/main.css'
import '../styles/form.css' 
import { format, fromUnixTime } from "date-fns";

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
        email: 'someemail@gmail.com', 
        phoneNumber: '0777789845'
    });

    const [profileSummary, setProfileSummary] = useState({
        heading: 'Front End Developer',
        summary: 'Proactive, collaborative, and user-oriented front end web developer with 5+ years’ experience leveraging programming skills to deliver custom software solutions to support company goals. Efficient team player with C+ and C++ proficiencies, track record of collaborating via Git / GitHub, and ability to work independently or as part of a team to complete development tasks while meeting delivery deadlines.'
    })

    const [experiencesArray, setExperiencesArray] = useState([{
        id: crypto.randomUUID(),
        companyName:'TechNova Solutions',
        position: 'Software Engineer',
        fromDate: format(new Date('02/04/2023'), "yyyy-MM-dd"),
        toDate: format(new Date('03/03/2025'), "yyyy-MM-dd"),
        details: 'As a Software Engineer at TechNova Solutions, the individual will be responsible for designing, developing, and maintaining web applications that cater to a variety of industries, from finance to healthcare. They will work collaboratively with cross-functional teams to understand user needs and translate them into high-quality software solutions.'
    }]);
    const [educationsArray, setEducationsArray] = useState([{
        id: crypto.randomUUID(),
        school: 'El emam ahmed el ghazali',
        degree: 'High School Degree',
        fromDate: format(new Date('02/04/2019'), "yyyy-MM-dd"),
        toDate: format(new Date('02/04/2021'), "yyyy-MM-dd"),
        location: 'Sour el ghozlane'
    }]);

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
            {...newExperienceCard}
        ])
    }

    function handleEducations(newEducationCard) {
        setEducationsArray(prevArray => [
            ...prevArray,
            {...newEducationCard}
        ])
    }

    function handleAddingNewEmptyCard(e) {
        if(e.target.dataset.sectionname === 'Experience'){
            setExperiencesArray(prevArray => [
                ...prevArray,
                {id: crypto.randomUUID()}
            ])
        } else if(e.target.dataset.sectionname === 'Education') {
            setEducationsArray(prevArray => [
                ...prevArray,
                {id: crypto.randomUUID()}
            ])
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

                    {/* Experience */}
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

                    {/* Education */}
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
                            onClick={handleAddingNewEmptyCard}>Add education</button>
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