import React from "react";
import "./Login.css";
import Logo from "../../Assets/logo_dark.png";
import { Button } from "../../Common/Buttons/Button1";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import { Link } from "react-router-dom";
export const Login = () => {
  const navStyle = {
    color: "white",
    textDecoration: "None"
  };

  return (
    <body>
      <div className="head">
        <Switch />
      </div>
      <div className="netHash">
        <img src={Logo} alt="Logo of Nethash" />
      </div>
      <section className="loginContent">
        <h1 className="LoginText">Login</h1>
        <div className="input">
          <TextInput text="Enter Username" />
        </div>
        <div className="nextButton">
          <Button />
        </div>
        <Link style={navStyle} to="/signUp">
          <div className="signUpTextNav">Sign Up</div>
        </Link>
      </section>
    </body>
  );
};
