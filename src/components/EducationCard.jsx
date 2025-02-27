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
            }}>
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

                <button>submit</button>
            </form>
        </div>
    )
}