import React , {useState} from 'react'
import FormSignup from './FormSignup'
import FormSucesss from './FormSucess'
import "./Form.css"

const Form = () => {
    const[isSubmmited, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true)
    }
    return (
      <>
        <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
            <img src="img/img-2.svg" alt="spaceship" className="form-img" />
          </div>
          {!isSubmmited ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSucesss />
          )}
        </div>
      </>
    );
}

export default Form
