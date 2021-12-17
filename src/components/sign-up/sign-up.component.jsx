import React, {useState} from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";


const SignUp =({signUpStart}) =>{

    const [userCredentials,setUserCredential] = useState({
        displayName:'',
        email :'',
        password : '',
        confirmPassword : ''}
        )

    const resetState = () => {
        setUserCredential({ displayName:'', email :'', password : '', confirmPassword : ''})
    }

    const {displayName,email,password,confirmPassword} = userCredentials;

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        if (password !== confirmPassword){
            alert("password do no match")
            return;
        }

        signUpStart({displayName,email,password})

    }

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setUserCredential({...userCredentials,[name]: value})
    }
    
    return(

            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput type="text" name='displayName' label='Display Name' value={displayName} onChange={handleChange} required></FormInput>
                    <FormInput type="email" name='email' label='Email' value={email} onChange={handleChange} required></FormInput>
                    <FormInput type="password" name='password' label='password' value={password} onChange={handleChange} required></FormInput>
                    <FormInput type="password" name='confirmPassword' label='confirmPassword' value={confirmPassword} onChange={handleChange} required></FormInput>

                <div className="buttons">
                    <CustomButton type="submit">Sign up</CustomButton> 
                </div>
                </form>
            </div>
    )

    
}

const mapDispatchStateToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchStateToProps)(SignUp);