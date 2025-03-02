import { useState } from "react"

export function EducationCard(props) {
    const [inputValues, setInputValues] = useState(props.obj)


    return (
        <div>
            <form onSubmit={ e =>{
                e.preventDefault();
                props.handleDeleteEducationCard(props.obj.id)
                // to create new id for the new Submit cards
                const newId = crypto.randomUUID();
                props.handleEducations({...inputValues, id: newId})
            }}
            style={{border: '0.5px solid rgba(128, 128, 128, 0.582)',padding: '4px 8px', margin:'16px 0' }}>
                <p>
                    <label htmlFor="school-universiy">School/University </label>
                    <input type="text" 
                    name="school-universiy"
                    id="school-universiy"
                    value={inputValues?.school || ""}
                    onChange={(e)=> setInputValues({...inputValues, school: e.target.value})}/>
                </p>

                <p>
                    <label htmlFor="degree">Degree </label>
                    <input type="text" 
                    name="degree"
                    id="degree"
                    value={inputValues?.degree || ""}
                    onChange={(e)=> setInputValues({...inputValues, degree: e.target.value})}/>
                </p>

                <div className="duration">
                    <p>
                        <label htmlFor="from-date">From: </label>
                        <input type="date" 
                        name="from-date"
                        id="from-date"
                        value={inputValues?.fromDate || ""}
                        onChange={(e)=> setInputValues({...inputValues, fromDate: e.target.value})}/>
                    </p>

                    <p>
                        <label htmlFor="to-date">To: </label>
                        <input type="date" 
                        name="to-date"
                        id="to-date"
                        value={inputValues?.toDate || ""}
                        onChange={(e)=> setInputValues({...inputValues, toDate: e.target.value})}/>
                    </p>
                </div>
                <p>
                    <label htmlFor="lacation">Lacation</label>
                    <input type="text"
                    name="lacation"
                    id="lacation" 
                    value={inputValues?.location || ""}
                    onChange={(e)=> setInputValues({...inputValues, location: e.target.value})}/>
                </p>

                <div className="btns">
                    <button 
                    type="button"
                    onClick={()=> props.handleDeleteEducationCard(props.obj.id)} >Delete</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}