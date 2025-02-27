import { useState } from "react";


export default function EditSection(props) {
    const [inputValues, setInputValues] = useState({fullNameValue: '', emailValue: ''})

    function handleChangeValues(e) {
        let newInputValuesObj = {}

        if (e.target.getAttribute('name') === 'email') newInputValuesObj = {...inputValues, emailValue: e.target.value}
        else  newInputValuesObj = {...inputValues, fullNameValue: e.target.value}

        setInputValues(newInputValuesObj)
    }

    return (
        <>
            <section className="edit-section" >
                <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    // props.handlePersonalDetails(nameValue, emailValue);
                }}>
                    <label>
                        email : <input type="email" name="email" onChange={handleChangeValues}/>
                    </label>

                    <label>
                        your full name : <input type="text" name="full-name" onChange={handleChangeValues}/>
                    </label>    
                    <button> submit </button>

                </form>
            </section>
        </>
    )
}   