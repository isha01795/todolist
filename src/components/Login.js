import React, {useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import './Login.css';
import TodoList from './TodoList';
const Login=()=> {

 const [loginButton, setLoginButton] = useState(true);
 const [logoutButton,setLogoutButton] = useState(false);
 const clientId = "289559916406-8bck6nhj4ebiqvc90pu8co3viejoot3i.apps.googleusercontent.com";
 const onLoginSuccess = (res) => {
     console.log('login success:', res.profileObj);
     setLoginButton(false);
     setLogoutButton(true);
 };

 const onLoginFailure = (res) => {
      console.log('login Failed:', res);
 };

 const onLogoutSuccess = () => {
     alert("You have been logged out successfully.")
     console.clear();
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
    cookiePolicy={'single_host_origin'
    }
  /></div>
  </div> :null
            }


            {logoutButton ? 
            <div className="logout_button">
            <div className="logout">
   <span> Logout👉</span>
                <GoogleLogout
                        className="logout_option"
      clientId={clientId}
      buttonText="Logout" 
      onLogoutSuccess={onLogoutSuccess}
    >    </GoogleLogout>
 
 </div>
    <TodoList/>
    </div>
     :null }
 </div>
        </>
    )
}

export default Login;