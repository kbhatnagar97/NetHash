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
  const [password, setPassword] = React.useState("");
  const [varInput, setVarInput] = React.useState("kbhatnagar97@gmail.com");
  const [text, setText] = React.useState("Enter EmailID");
  const [flag, setFlag] = React.useState(true);
  async function data() {
    if (flag === true) {
      setText("Enter Password");
      setEmailID(varInput);
      setFlag(false);
    } else {
      setText("Enter EmailID");
      setPassword(varInput);

      Axios.post("http://192.168.0.147:5000/login", {
        email: emailID,
        password: varInput
      })
        .then(function(response) {
          toast("Login Successful");
          console.log("Pass");
          console.log(response);
          // window.open("https://www.tinyfor.me/nethashdemo","_self")
        })
        .catch(function(error) {
          toast("Login credentials Incorrect");
          console.log("Fail");
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
          {flag && <TextInput text={text} inputValue={setVarInput} />}
          {!flag && <TextInput text={text} inputValue={setVarInput} />}
        </div>
        <div className="nextButton">
          <Link style={navStyle} to="/signUp">
            <Button onClick={data} />
          </Link>
        </div>
        <Link style={navStyle} to="/signUp">
          <div className="signUpTextNav">Sign Up</div>
        </Link>
      </section>
      <div className="toast">
        <ToastContainer />
      </div>
    </body>
  );
};
