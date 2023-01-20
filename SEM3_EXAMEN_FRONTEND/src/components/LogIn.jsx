import React, { useState,Label } from "react";
import {useHistory} from "react-router-dom"
import Button from 'react-bootstrap/Button';


export default function logIn({  setLoggedIn, facade, setErrorMessage, setIsAdmin , setUserRole}) {
        const history = useHistory();
        const init = { login_name: "", password: "" };
        const [loginCredentials, setLoginCredentials] = useState(init);
      
        const performLogin = (evt) => {
          evt.preventDefault();
          console.log(loginCredentials.login_name, loginCredentials.password)
    
    
      facade.login(loginCredentials.login_name, loginCredentials.password, setLoggedIn, setErrorMessage, setIsAdmin,setUserRole)   
          history.push("/")
        }

        const onChange = (evt) => {
          setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
        }
      
    return (
      <div className="login-card" >
        <h2>Login</h2>
        <form onChange={onChange} >
          <input className="login-input" placeholder="User Name" id="login_name" /> <br /><br />
          <input className="login-input" type="password" placeholder="Password" id="password" /> <br /><br />
          <Button  variant="secondary" className="login-btn" onClick={performLogin}>Login</Button>
          
        </form>
       
        </div>

   )}