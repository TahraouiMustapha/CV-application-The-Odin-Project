import { useState } from "react"

export function PersonalDetails(props) {
    const [inputValues, setInputValues] = useState(props.obj)

    function handleChangeValues(e) {
        let newInputValuesObj = {}
        let myInput = e.target.getAttribute('name')

        if ( myInput === 'email') newInputValuesObj = {...inputValues, email: e.target.value}
        else if (myInput === 'full-name') newInputValuesObj = {...inputValues, fullName: e.target.value}
        else newInputValuesObj = {...inputValues, phoneNumber: e.target.value}

        setInputValues(newInputValuesObj)
    }

    return (
        <div className={props.className} style={{padding: '0 24px'}}>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    props.handlePersonalDetails(inputValues);
                }}>

                    <p>
                        <label htmlFor="full-name">Your full name </label>
                        <input type="text"
                        value={inputValues.fullName} 
                        name="full-name" 
                        onChange={handleChangeValues}/>
                    </p>
                    <p>
                        <label htmlFor="email">Email </label>
                        <input type="email" 
                        value={inputValues.email}
                        name="email" 
                        onChange={handleChangeValues}/>
                    </p>

                    <p>
                        <label htmlFor="phone">Phone number</label>
                        <input type="number"
                        value={inputValues.phoneNumber}
                        name="phone-number"
                        onChange={handleChangeValues}
                         maxLength={10}/>
                    </p>


                    <button> submit </button>
                    * You can edit the content by pressing the submit button. 
            </form>
        </div>
    )
}
