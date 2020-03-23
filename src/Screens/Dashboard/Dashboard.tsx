import React from "react";
import Logo from "../../Assets/logo_dark.png";
import { Switch } from "../../Common/Switch/Switch";
import { TextInput } from "../../Common/TextInput/TextInput";
import "./Dashboard.css";
import { FaBars } from "react-icons/fa";
import { TiHome as Home } from "react-icons/ti";
import { AiOutlinePlaySquare as Play } from "react-icons/ai";
import { IoMdThumbsUp as Like } from "react-icons/io";
import { IconContext } from "react-icons";
import Avatar from "../../Assets/avatar.png";

export const Dashboard = () => {
  const [change, setchange] = React.useState("");

  function enterPressed(event) {
    if (event.which === 13) {
      // document.getElementById("Button").click();
      console.log(
        "I need to do DOM manipulation and click the button on the screen"
      );
    }
  }

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
          enterPressed={event => enterPressed(event)}
          className="TextInputDashboard"
        />
        <div className="SwitchLogo">
          <Switch />
          <img src={Avatar} className="avatar" alt="Logo of Nethash" />
        </div>
      </div>
      <div className="MainBody">
        <div className="NavBar">
          <ul className="NavList">
            <li><button className="NavButton"><span className="NavListIcon"><Home /></span> Home</button></li>
            <li><button className="NavButton"><span className="NavListIcon"><Play /></span> Your Videos</button></li>
            <li><button className="NavButton"><span className="NavListIcon"><Like /></span> Liked Videos</button></li>
          </ul>
        </div>
        <div className="Main"> </div>
      </div>
    </body>
  );
};
