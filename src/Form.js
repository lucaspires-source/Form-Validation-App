import React , {useState} from 'react'
import FormSignup from './FormSignup'
import FormSucesss from './FormSucess'
const Form = () => {
    const[isSubmmited, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true)
    }
    return (
        <div>
            {!isSubmmited ? (<FormSignup submitForm={submitForm} />):(<FormSucesss/>)}
        </div>
    )
}

export default Form
