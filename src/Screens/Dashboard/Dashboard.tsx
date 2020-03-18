import React from "react";
import Logo from "../../Assets/logo_dark.png";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import "./Dashboard.css";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import Avatar from "../../Assets/avatar.png";

export const Dashboard = () => {
  const [change, setchange] = React.useState("");

  return (
    <body>
      <div className="headDashboard">
        <div className="BarsLogo">
          <IconContext.Provider value={{ className: "FaBars" }}>
            <FaBars />
          </IconContext.Provider>
          <img src={Logo} className="Logo" alt="Logo of Nethash" />
        </div>
        <TextInput
          text={"Search"}
          inputValue={setchange}
          className="TextInputDashboard"
        />
        <div className="SwitchLogo">
          <Switch />
          <img src={Avatar} className="avatar" alt="Logo of Nethash" />
        </div>
      </div>
    </body>
  );
};
