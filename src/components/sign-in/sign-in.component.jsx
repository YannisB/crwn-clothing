import React,{useState} from "react";
import { connect } from "react-redux";

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions.js'

const SignIn =({emailSignInStart,googleSignInStart}) =>{

    const [userCredentials,setCredential] = useState({email:'',password : ''})
    const {email, password} = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email,password)

    }
    
    const handleChange = (event) => {
        const {value,name} =event.target;
        setCredential({...userCredentials,[name]: value})
        // this.setState({[name]: value})
    }

    return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                

                <form onSubmit={ handleSubmit}>
                <FormInput type="text" name='email' label='Email' value={email} onChange={handleChange} required></FormInput>
                <FormInput type="password" name='password' label='password' value={password} onChange={handleChange} required></FormInput>
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton> 
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
                </div>
                </form>
            </div>
        )
}


const mapDispatchToProps = dispatch =>({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
})


export default connect(null,mapDispatchToProps) (SignIn)