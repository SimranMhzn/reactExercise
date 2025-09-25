import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import logo from "./assets/ytLogo.png"
import profile from "./assets/profile.png"
import { IoMdAdd, IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import "./App.css"
export default function App(){
  return(
    <nav>
      <div className="left">
        <RxHamburgerMenu className="hamburgerIcon"/>
        <img className="ytLogo" src={logo} alt="Yt logo" />
      </div>
      <div className="middle">
        <div className="searchWrapper">
          <input className="searchBox" type="text" placeholder="Search" />
          <button className="searchBtn">
            <CiSearch className="searchIcon"/>
          </button>
        </div>
        <button className="voiceBtn">
          <MdKeyboardVoice className="voiceIcon"/>
        </button>
      </div>
      <div className="right">
        <button className="createBtn">
          <IoMdAdd className="addIcon"/>Create
        </button>
        <div className="parent">
          <IoIosNotificationsOutline className="notiIcon"/>
          <div className="notiAmt">9+</div>
        </div>
        <img className="profile" src={profile} alt="" />
      </div>
    </nav>
  );
}