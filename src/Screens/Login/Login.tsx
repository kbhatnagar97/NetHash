import React from "react";
import "./Login.css";
import Logo from "../../Assets/logo_dark.png";
import { Button } from "../../Common/Buttons/Button1";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import { Link } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [emailID, setEmailID] = React.useState("");
  const [varInput, setVarInput] = React.useState("kbhatnagar97@gmail.com");
  const [text, setText] = React.useState("Enter EmailID");
  const [flag, setFlag] = React.useState(true);

  function NavigatetoDemo() {
    window.open("https://nethash.s3.ap-south-1.amazonaws.com/Code/player.html ","_self")
  }

  function enterPressed(event) {
    if(event.which === 13)
    {
      // document.getElementById("Button").click();
      console.log("I need to do DOM manipulation and click the button on the screen")
      data()
    }
  }

  async function data() {
    console.log("Button was clicked")
    if (flag === true) {
      setText("Enter Password");
      setEmailID(varInput);
      setVarInput("")
      setFlag(false);
    } else {
      Axios.post("http://192.168.0.147:5000/login", {
        email: emailID,
        password: varInput
      })
        .then(function(response) {
          toast.success("Login Successful.", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          console.log("Pass");
          console.log(response);
          window.open("https://www.tinyfor.me/nethashdemo","_self")
        })
        .catch(function(error) {
          toast.error("Login credentials were incorect.", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          console.log("Fail");
          setText("Enter EmailID");
          setFlag(true);
        });
    }
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
      <div className="netHash1">
        <img src={Logo} alt="Logo of Nethash" />
      </div>
      <section className="loginContent">
        <h1 className="LoginText">Login</h1>
        <div className="input">
          {flag && <TextInput text={text} inputValue={setVarInput} enterPressed={(event) => enterPressed(event)} className="TextInput" />}
          {!flag && <TextInput text={text} inputValue={setVarInput} enterPressed={(event) => enterPressed(event)} className="TextInput" />}
        </div>
        <div className="nextButton">
          {/* <Link style={navStyle} to="/signUp"> */}
          <Button className="Button" onClick={data} />
          {/* </Link> */}
        </div>
        <Link style={navStyle} to="/signUp">
          <div className="signUpTextNav">Sign Up</div>
        </Link>
        <div onClick={NavigatetoDemo} className="signUpTextNav">Continue as guest</div>

      </section>
      <div className="toast">
        <ToastContainer />
      </div>
    </body>
  );
};
