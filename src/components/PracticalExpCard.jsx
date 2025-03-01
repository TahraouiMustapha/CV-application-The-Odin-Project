import { useState } from "react"

export function PracticalExperienceCard(props) {
    const [inputValues, setInputValues] = useState({
        companyName:'',
        position: '',
        fromDate: '',
        toDate: '',
        details: ''
    })


    return (
        <div>
            <form onSubmit={(e)=> {
                e.preventDefault()
                props.handleExperiences(inputValues)
            }} style={{border: '0.5px solid rgba(128, 128, 128, 0.582)',padding: '4px 8px', margin:'16px 0' }}>
                <p>
                    <label htmlFor="company-name">Company Name: </label>
                    <input type="text"
                    name="company-name"
                    id="company-name" 
                    onChange={(e) => {
                        setInputValues({...inputValues, companyName: e.target.value});
                    }}/>
                </p>
                
                <p>
                    <label htmlFor="position">Position: </label>
                    <input type="text"
                    name="position"
                    id="position" 
                    onChange={(e)=>{
                        setInputValues({...inputValues, position: e.target.value})
                    }}/>
                </p>

                <div className="duration">
                    <p>
                        <label htmlFor="from-date">From: </label>
                        <input type="date"
                        name="from-date"
                        id="from-date" 
                        onChange={(e)=>{
                            setInputValues({...inputValues, fromDate: e.target.value})
                        }}/>
                    </p>

                    <p>
                        <label htmlFor="to-date">To: </label>
                        <input type="date"
                        name="to-date"
                        id="to-date" 
                        onChange={(e)=>{
                            setInputValues({...inputValues, toDate: e.target.value})
                        }}/>
                    </p>
                </div>

                <p>
                    <label htmlFor="details">Details: </label>
                    <textarea name="details" id="details"
                    onChange={(e)=>{
                        setInputValues({
                            ...inputValues, 
                            details: e.target.value
                        })
                    }}></textarea>
                </p>

                <div className="btns">
                    <button type="button">Delete</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}