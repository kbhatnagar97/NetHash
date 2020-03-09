import React from 'react';
import './Login.css';
import Logo from '../../Assets/logo_dark.png';
import {Button} from '../../Common/Buttons/Button1'
import {Switch} from '../../Common/Switch/Switch'
import {TextInput} from '../../Common/TextInput/TextInput'
export const Login = () => {

    return(
        <body>
            <div className="head">
                <Switch/>
            </div>
            <div className="netHash">
                <img src={Logo}/>
            </div>
            <section className="loginContent">
                <h1 className="LoginText">
                    Login
                </h1>
                <div className="input">
                    <TextInput text="Enter Username" />
                </div>
                <div className="nextButton">
                    <Button/>
                </div>
                <div className="signUpNav">
                    Sign Up
                </div>
            </section>
        </body>

    );
}







{/* <Button/>
  <Switch/>
  <TextInput/> */}