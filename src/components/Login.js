import React, {useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import TodoList from './TodoList';


let username = localStorage.getItem("username");

const Login=()=> {

 const [loginButton, setLoginButton] = useState(true);
 const [logoutButton,setLogoutButton] = useState(false);
 const clientId = "289559916406-f72vmk0qgbadovqsurqu3156orp16e4l.apps.googleusercontent.com";
 const onLoginSuccess = (res) => {
    const username = res.profileObj.name;
    // console.log("Login Success,Current User:", res.profileObj.name);
    localStorage.setItem("username", username);
     setLoginButton(false);
     setLogoutButton(true);
 };

 const onLoginFailure = (res) => {
      console.log('login Failed:', res);
 };

 const onLogoutSuccess = () => {
     alert("You have been logged out successfully.")
     console.clear();
     localStorage.removeItem("username");
     setLogoutButton(false);
     setLoginButton(true);
 }
    return (
        <>
<div className="login_container">
        {loginButton? 
        <div className="login_button">
        <div className="login_text">
   <h1>
    Sign in
   </h1>
        </div>
        <div className="login">
        <GoogleLogin
        className="login_option"
    clientId={clientId}
    buttonText="Login with google"
    onSuccess={onLoginSuccess}
    onFailure={onLoginFailure}
    cookiePolicy={'single_host_origin'} />  </div>
  </div> :null
            }


            {logoutButton ? 
            <div className="logout_button">
            <div> 
            <div className="username">
                Welcome! {username}
            </div>
             <TodoList /> </div>

            <div className="logout">
   {/* <span> Logout👉</span> */}
                <GoogleLogout className="logout_option" clientId={clientId} buttonText="Logout"  onLogoutSuccess={onLogoutSuccess}
    ></GoogleLogout>
 
 </div>

    </div>
     :null }
 </div>
        </>
    )
}

export default Login;