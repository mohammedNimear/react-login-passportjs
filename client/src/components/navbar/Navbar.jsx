import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({user}) => {

  const logout = () => {
    window.open('http://localhost:5050/auth/logout')
  }

  console.log(user)

  return (
    <div className="navbar">
        <span className="logo"><Link to='/' className="link">NHN</Link></span>
        {user ? (

          <ul className="list">
        <li className="listItem">
            <img src={user.photos[0].value} alt='' className="avatar" />
        </li>
        <li className="listItem">{user.displayName}</li>
        <li className="listItem" onClick={logout}>logout</li>
      </ul>
        ) : (
          <Link to='/login' className="link">Login</Link>
        )}
    </div>
  );
};

export default Navbar;
