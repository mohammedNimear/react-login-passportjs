import React from "react";
import { facebook_img, github_img, google_img } from "../../components/imgs";
import "./login.css";

const Login = () => {

  const google = () => {
    window.open('http://localhost:5050/auth/google','_self')
  }
  
  const github = () => {
    window.open('http://localhost:5050/auth/github','_self')
  }
  
  const facebook = () => {
    window.open('http://localhost:5050/auth/facebook','_self')
  }

  return (
    <div className="login">
      <div className="wrapper">
      <h1 className="title">Choose a login method</h1>
        <div className="left">
          <div className="loginBtn google" onClick={google} >
            <img src={google_img} alt="google_img" className="icon" />
            google
          </div>
          <div className="loginBtn facebook" onClick={facebook} >
            <img src={facebook_img} alt="google_img" className="icon" />
            facebook
          </div>
          <div className="loginBtn github" onClick={github}>
            <img src={github_img} alt="google_img" className="icon" />
            github
          </div>
        </div>
        <div className="center">
            <div className="line" />
            <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
