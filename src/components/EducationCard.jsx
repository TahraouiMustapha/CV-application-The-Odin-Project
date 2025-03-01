import { useState } from "react"

export function EducationCard(props) {
    const [inputValues, setInputValues] = useState({
        school:'', 
        degree:'',
        fromDate:'',
        toDate:'',
        location: ''
    })


    return (
        <div>
            <form onSubmit={ e =>{
                e.preventDefault();
                props.handleEducations(inputValues)
            }}
            style={{border: '0.5px solid rgba(128, 128, 128, 0.582)',padding: '4px 8px', margin:'16px 0' }}>
                <p>
                    <label htmlFor="school-universiy">School/University: </label>
                    <input type="text" 
                    name="school-universiy"
                    id="school-universiy"
                    onChange={(e)=> setInputValues({...inputValues, school: e.target.value})}/>
                </p>

                <p>
                    <label htmlFor="degree">Degree: </label>
                    <input type="text" 
                    name="degree"
                    id="degree"
                    onChange={(e)=> setInputValues({...inputValues, degree: e.target.value})}/>
                </p>

                <div className="duration">
                    <p>
                        <label htmlFor="from-date">From: </label>
                        <input type="date" 
                        name="from-date"
                        id="from-date"
                        onChange={(e)=> setInputValues({...inputValues, fromDate: e.target.value})}/>
                    </p>

                    <p>
                        <label htmlFor="to-date">To: </label>
                        <input type="date" 
                        name="to-date"
                        id="to-date"
                        onChange={(e)=> setInputValues({...inputValues, toDate: e.target.value})}/>
                    </p>
                </div>
                <p>
                    <label htmlFor="lacation">Lacation;</label>
                    <input type="text"
                    name="lacation"
                    id="lacation" 
                    onChange={(e)=> setInputValues({...inputValues, location: e.target.value})}/>
                </p>

                <div className="btns">
                    <button type="button">Delete</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}