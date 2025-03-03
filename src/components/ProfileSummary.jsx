import { useState } from "react";


export function ProfileSummary(props) {
    const [inputValues, setInputValues] = useState(props.obj)

    function handleChangeInput(e) {
        let myInput = e.target.getAttribute('name')
        
        if(myInput === 'heading') setInputValues({heading: e.target.value, summary: inputValues.summary})
        else setInputValues({summary: e.target.value, heading: inputValues.heading})   
    }

    return (
        <div className={props.className} style={{padding: '0 24px'}}>
            <form onSubmit={(e)=>{
                e.preventDefault()
                props.handleProfileSummary(inputValues);
            }}>
                <p>
                    <label htmlFor="heading">Profile Heading: </label>
                    <input type="text" 
                    value={inputValues.heading}
                    id="heading"
                    name="heading"
                    onChange={handleChangeInput}/>
                </p>

                <p className="summary-field"> 
                    <label htmlFor="summary">Profile Summary: </label>
                    <textarea id="summary"
                    value={inputValues.summary}
                    name="summary"
                    onChange={handleChangeInput}/>
                </p>

                <button> submit </button>
                * You can edit the content by pressing the submit button.
            </form>
        </div>
    )
}