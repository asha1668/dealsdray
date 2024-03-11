import {  NavLink } from "react-router-dom"; 

import logo from "../images/logo.png";


export const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="subnav">
      <nav className="navigation">
        <NavLink to="/" className="home" end>Home</NavLink>
        <NavLink to="/employelistpage" className="employeelist">EmployeeList</NavLink>
        <NavLink to="/name" className="name">hukum gupta</NavLink>
        <NavLink to="/loginpage" className="logout">login</NavLink>
      </nav>
    
      </div>
    </div>
  )
}


