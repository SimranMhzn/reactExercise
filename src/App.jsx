import logo from "./assets/logo.png"
import theme from "./assets/theme.png"
import profile from "./assets/profile.webp"
import dropdown from "./assets/Icon.png"
import "./App.css";
import { useState } from "react";
export default function App(){
  const[active,setActive]=useState("Home");
  return(
    <div className="outerWrapper">
      <nav className="navFirst">
        <img className="logo" src={logo} alt="logo" />
        <ul className="option">
          {["Home", 
          "Services ˅", 
          "Forum", 
          "Contact us"].map((item) => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="rightSide">
          <img className="theme" src={theme} alt="theme" />
          <div className="profileWrapper">
            <img className="profile" src={profile} alt="profile" />
            <img className="dropdown" src={dropdown} alt="dropdown" />
          </div>
        </div>
      </nav>
      <nav className="navSecond">
        <button>Home</button>
        <button>Services ˅</button>
        <button>Forum</button>
        <button>Contactus</button>
      </nav>
    </div>
  );
}