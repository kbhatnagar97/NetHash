import React from "react";
import "./SignUp.css";
import Logo from "../../Assets/logo_dark.png";
import { Button } from "../../Common/Buttons/Button1";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const navStyle = {
        color: 'white',
        textDecoration: "None",
    };


  return (
    <body>
      <div className="head">
        <Switch />
      </div>
      <div className="netHash">
        <img src={Logo} alt="Logo of Nethash" />
      </div>
      <div className="SignUpContents">
        <h1 className="SignUpText">Sign Up</h1>
        <div className="Inputs">
          <TextInput text="Enter Username" />
          <TextInput text="Enter Email ID" />
          <TextInput text="Enter Mobile Number" />
          <TextInput text="Enter Password" />
        </div>
        <div className="nextButton">
          <Button />
        </div>
        <Link style={navStyle} to="login">
          <div className="LoginTextNav">Already have an account? Login</div>
        </Link>
      </div>
    </body>
  );
};
