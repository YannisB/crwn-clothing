import React from "react";

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithEmailAndPassword } from "@firebase/auth";
import {auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }  
    }

    handleSubmit = async (event) => {

        event.preventDefault();

        const {email, password} = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({email: '', password : ''})
        } catch (error) {
            console.log(error)
        }


    }
    handleChange = (event) => {
        const {value,name} =event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                

                <form onSubmit={ this.handleSubmit}>
                <FormInput type="text" name='email' label='Email' value={this.state.email} onChange={this.handleChange} required></FormInput>
                <FormInput type="password" name='password' label='password' value={this.state.password} onChange={this.handleChange} required></FormInput>
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton> 
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn='isGoogleSignIn'> Sign In with Google</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn