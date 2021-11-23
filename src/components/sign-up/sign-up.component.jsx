import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from "@firebase/auth";


class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            displayName:'',
            email :'',
            password : '',
            confirmPassword : ''
        }
    }

    resetState = () => {
        this.setState({ displayName:'', email :'', password : '', confirmPassword : ''})
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        
        const {displayName,email,password,confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("password do no match")
            return;
        }


        try {
            
            const {user} = await createUserWithEmailAndPassword(auth,email,password)
            await createUserProfileDocument(user,{displayName})
            this.resetState()
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = (event) =>{
        const {name,value} = event.target;
        this.setState({[name] : value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(

            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='displayName' label='Display Name' value={displayName} onChange={this.handleChange} required></FormInput>
                    <FormInput type="email" name='email' label='Email' value={email} onChange={this.handleChange} required></FormInput>
                    <FormInput type="password" name='password' label='password' value={password} onChange={this.handleChange} required></FormInput>
                    <FormInput type="password" name='confirmPassword' label='confirmPassword' value={confirmPassword} onChange={this.handleChange} required></FormInput>

                <div className="buttons">
                    <CustomButton type="submit">Sign up</CustomButton> 
                </div>
                </form>
            </div>
        )
    }
    
}

export default SignUp;