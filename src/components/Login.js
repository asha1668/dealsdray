import logo from "../images/logo.png";
import {useState} from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Username:", username);
    console.log("Password:", password);
    
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" />
      <p className="loginpage">login page</p>

      <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"><NavLink to="/dashbord" className="editlogin">login</NavLink></button>
      </form>
    </div>

    </div>
  )
}


