import { useState } from "react"

export function PersonalDetails(props) {
    const [inputValues, setInputValues] = useState({
        fullName: '', 
        email: '', 
        profession: '', 
        phoneNumber: ''
    })

    function handleChangeValues(e) {
        let newInputValuesObj = {}
        let myInput = e.target.getAttribute('name')

        if ( myInput === 'email') newInputValuesObj = {...inputValues, email: e.target.value}
        else if (myInput === 'full-name') newInputValuesObj = {...inputValues, fullName: e.target.value}
        else if (myInput === 'profession') newInputValuesObj = {...inputValues, profession: e.target.value}
        else newInputValuesObj = {...inputValues, phoneNumber: e.target.value}

        setInputValues(newInputValuesObj)
    }

    return (
        <>
            <section className="edit-section" >
                <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    props.handlePersonalDetails(inputValues);
                }}>

                    <p>
                        <label htmlFor="full-name">Your full name: </label>
                        <input type="text" 
                        name="full-name" 
                        onChange={handleChangeValues}/>
                    </p>
                    <p>
                        <label htmlFor="email">Email: </label>
                        <input type="email" 
                        name="email" 
                        onChange={handleChangeValues}/>
                    </p>

                    <p>
                        <label htmlFor="profession">Profession: </label>
                        <input type="text" 
                        name="profession"
                        onChange={handleChangeValues}
                        />
                    </p>

                    <p>
                        <label htmlFor="phone">Phone number</label>
                        <input type="number"
                        name="phone-number"
                        onChange={handleChangeValues}
                         maxLength={10}/>
                    </p>


                    <button> submit </button>

                </form>
            </section>
        </>
    )
}
