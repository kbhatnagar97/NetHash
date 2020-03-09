import React from 'react';
import './SignUp.css' ;
import Logo from '../../Assets/logo_dark.png';
import {Button} from '../../Common/Buttons/Button1'
import {Switch} from '../../Common/Switch/Switch'
import {TextInput} from '../../Common/TextInput/TextInput'

export const SignUp = () => {
    return(
        <body>
            <div className="head">
                <Switch/>
            </div>
            <div className="netHash">
                <img src={Logo} />
            </div>
            <div className="SignUpContents">
                <h1 className="SignUpText">
                    Sign Up
                </h1>
                <div className="Inputs">
                    <TextInput text="Enter Username"/>
                    <TextInput text="Enter Email ID"/>
                    <TextInput text="Enter Mobile Number"/>
                    <TextInput text="Enter Password"/>
                </div>
                <div className="nextButton">
                    <Button/>
                </div>
                <div className="LoginTextNav">
                    Already have an account? Login
                </div>
            </div>
            
        </body>
    );
}