import React from 'react'

const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Get Started with us today! Create your accoount by filling out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                            id="username"
                            type="text" 
                            name="username" 
                            className="form-input" 
                            placeholder="Enter your username"

                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="e-mail" className="form-label">E-mail</label>
                    <input 
                            
                            id="e-mail"
                            type="e-mail" 
                            name="e-mail" 
                            className="form-input" 
                            placeholder="Enter your e-mail"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                            id="password"
                            type="text" 
                            name="password" 
                            className="form-input" 
                            placeholder="Enter your password"
  
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input 
                            id="password2"
                            type="text" 
                            name="password2" 
                            className="form-input" 
                            placeholder="Confirm your password"
  
                    />
                </div>
                <button className="form-input-bin" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">Here</a>                
                </span>
            </form>
        </div>
    )
}

export default FormSignup
