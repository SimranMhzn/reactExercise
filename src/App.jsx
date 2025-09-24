import logo from "./assets/logo.png"
import theme from "./assets/theme.png"
import profile from "./assets/profile.webp"
import { IoIosArrowDropdown } from "react-icons/io";
import "./App.css";
import { useState } from "react";
export default function App(){
  const[active,setActive]=useState("Home");
  const[color,setColor]=useState("Home");
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
            <IoIosArrowDropdown className="dropdown" />
          </div>
        </div>
      </nav>
      <nav className="navSecond">
        <ul className="option2">
          {["Home", 
          "Services ˅", 
          "Forum", 
          "Contact us"].map((item) => (
            <button
              key={item}
              className={color === item ? "color" : ""}
              onClick={() => setColor(item)}
            >
              {item}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
}