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

  function data() {
    const data = {
      first_name: firstName,
      last_name: LastName,
      email: EmailID,
      contact: MobileNumber,
      password: Password
    };
    //add data to API
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
          <TextInput text="Enter First Name" inputValue={setFirstName} />
          <TextInput text="Enter Last Name" inputValue={setLasttName} />
          <TextInput text="Enter Email ID" inputValue={setEmailID} />
          <TextInput text="Enter Mobile Number" inputValue={setMobileNumber} />
          <TextInput text="Enter Password" inputValue={setPassword} />
        </div>
        <div className="nextButton">
          {/* <Link style={navStyle} to="/login"> */}
          <Button onClick={data} />
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
