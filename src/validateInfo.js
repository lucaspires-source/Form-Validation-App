export default function validateInfo(values){
    let errors = {}
    if(!values.username.trim()){
        errors.username = "Username required"
        }
        if(!values.email.trim()){
            errors.email = "E-mail required"
            }    

            if(!values.password.trim()){
                errors.password = "Password Required"
                }    
}