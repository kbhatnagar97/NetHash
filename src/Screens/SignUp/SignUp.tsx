import React from "react";
import "./SignUp.css";
import Logo from "../../Assets/logo_dark.png";
import { Button } from "../../Common/Buttons/Button1";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import { Link } from "react-router-dom";

export const SignUp = () => {

const [firstName, setFirstName]=React.useState("")
const [LastName, setLasttName]=React.useState("")
const [EmailID, setEmailID]=React.useState("")
const [MobileNumber, setMobileNumber]=React.useState("")
const [Password, setPassword]=React.useState("")

function data() {
  console.log(firstName)
  console.log(LastName)
  console.log(EmailID)
  console.log(MobileNumber)
  console.log(Password)
  //add data to API
}

    const navStyle = {
        color: 'white',
        textDecoration: "None",
    };
  return (
    <body>
      <div className="head">
        <Switch />
      </div>
      <div className="netHash2">
        <img src={Logo} alt="Logo of Nethash" />
      </div>
      <div className="SignUpContents">
        <h1 className="SignUpText">Sign Up</h1>
        <div className="Inputs">
          <TextInput text="Enter First Name" inputValue={setFirstName} />
          <TextInput text="Enter Last Name" inputValue={setLasttName} />
          <TextInput text="Enter Email ID" inputValue={setEmailID} />
          <TextInput text="Enter Mobile Number" inputValue={setMobileNumber} />
          <TextInput text="Enter Password" inputValue={setPassword} />
        </div>
        <div className="nextButton">
          <Button onClick={data}/>
        </div>
        <Link style={navStyle} to="login">
          <div className="LoginTextNav">Already have an account? Login</div>
        </Link>
      </div>
    </body>
  );
};
