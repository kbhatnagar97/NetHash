import React from "react";
import "./SignUp.css";
import Logo from "../../Assets/logo_dark.png";
import { Button } from "../../Common/Buttons/Button1";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [LastName, setLasttName] = React.useState("");
  const [EmailID, setEmailID] = React.useState("");
  const [MobileNumber, setMobileNumber] = React.useState("");
  const [Password, setPassword] = React.useState("");

  function enterPressed(event) {
    if(event.which === 13)
    {
      // document.getElementById("Button").click();
      console.log("I need to do DOM manipulation and click the button on the screen")
      data()
    }
  }

  function data() {
    console.log("Button was clicked")
    const data = {
      first_name: firstName,
      last_name: LastName,
      email: EmailID,
      contact: MobileNumber,
      password: Password
    };
    fetch("http://192.168.0.147:5000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      response.json().then(result => {
        if (result.status === "success") {
          toast.success(result.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          window.open("/login")
        } else {
          toast.error(result.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      });
    });
  }

  const navStyle = {
    color: "white",    
    textDecoration: "None"
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
          <TextInput text="Enter First Name" inputValue={setFirstName} enterPressed={(event) => enterPressed(event)} className="TextInput" />
          <TextInput text="Enter Last Name" inputValue={setLasttName} enterPressed={(event) => enterPressed(event)} className="TextInput" />
          <TextInput text="Enter Email ID" inputValue={setEmailID} enterPressed={(event) => enterPressed(event)} className="TextInput" />
          <TextInput text="Enter Mobile Number" inputValue={setMobileNumber} enterPressed={(event) => enterPressed(event)} className="TextInput" />
          <TextInput text="Enter Password" inputValue={setPassword} enterPressed={(event) => enterPressed(event)} className="TextInput" />
        </div>
        <div className="nextButton">
          {/* <Link style={navStyle} to="/login"> */}
          <Button className="Button" onClick={data} /> 
          {/* </Link> */}
        </div>
        <Link style={navStyle} to="/login">
          <div className="LoginTextNav">Already have an account? Login</div>
        </Link>
      </div>
      <div className="toast">
        <ToastContainer />
      </div>
    </body>
  );
};
