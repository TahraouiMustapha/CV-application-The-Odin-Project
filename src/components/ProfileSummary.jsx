import { useState } from "react";


export function ProfileSummary(props) {
    const [inputValues, setInputValues] = useState({
        heading: '',
        summary: ''
    })

    function handleChangeInput(e) {
        let myInput = e.target.getAttribute('name')
        
        if(myInput === 'heading') setInputValues({heading: e.target.value, summary: inputValues.summary})
        else setInputValues({summary: e.target.value, heading: inputValues.heading})   
    }

    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                props.handleProfileSummary(inputValues);
            }}>
                <p>
                    <label htmlFor="heading">Profile Heading: </label>
                    <input type="text" 
                    id="heading"
                    name="heading"
                    onChange={handleChangeInput}/>
                </p>

                <p>
                    <label htmlFor="summary">Profile Summary: </label>
                    <textarea id="summary"
                    name="summary"
                    onChange={handleChangeInput}/>
                </p>

                <button> submit </button>

            </form>
        </div>
    )
}