import './App.css';
import Home from './components/Home.jsx';
import Find_Scope from './components/Find_Scope.jsx';
import NoMatch from './components/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import facade from './facade';
import { Container, Alert } from 'react-bootstrap';
import Find_Reservation from './components/Find_Reservation';
import Find_Leases from './components/Find_Leases';
import Headheader from './components/Headheader';
import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AllUsers from './components/AllUsers';
import ModifyUsers from './components/ModifyUsers';
import  Useredit from './components/Useredit';
import About from "./components/About"
import SignUp from './components/SignUp';
import AddUser from './components/AddUser';



function App() {

    const [isAdmin, setIsAdmin] = useState(false);
    const [userRole, setUserRole]=useState("none");
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('  SignUp and you will have all detials');
    const [putResult, setPutResult] = useState({ login_name: "", password: "" });
    const [editMode,seteditMode]= useState(false)
    const [user,setUser]= useState(null)
   


      const logout = () => {
      setUserRole("none")
        setLoggedIn(false);
        setIsAdmin(false)
        setErrorMessage('Logged out.')
      };
    function onEditUser(user){
   
      setUser(user)
      seteditMode(true)
      console.log(user)
    }
  
    return (
      <Container>
        <Router>
          <Headheader facade={facade} loggedIn={loggedIn}   logout={logout} isAdmin={isAdmin} userRole = {userRole}/>
          <Switch>
            <Route  exact path="/">
              <Home/>
            </Route>
            <Route  path="/signup">
              <SignUp
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
              setIsAdmin={setIsAdmin}
              setUserRole={setUserRole}
              />
              </Route>
            <Route path="/find_scope">
              {facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&& (
                <Find_Scope facade={facade} setErrorMessage={setErrorMessage} isAdmin={isAdmin}/>)}            </Route>
            <Route path="/find_reservation">
              {facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&&(
                <Find_Reservation facade={facade} setErrorMessage={setErrorMessage} isAdmin={isAdmin}/>)}
            </Route>
            <Route path="/find_leases">
              {facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&& (
                <Find_Leases facade={facade} setErrorMessage={setErrorMessage}/>)}
            </Route>
            <Route path="/about">
              {facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&& (
                <About facade={facade} setErrorMessage={setErrorMessage}/>)}
            </Route>
            <Route path="/signin">
                <SignIn facade={facade} setErrorMessage={setErrorMessage}  logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setIsAdmin={setIsAdmin}
              setUserRole={setUserRole}/>
            </Route>
            <Route path="/allusers">
              {facade.hasUserAccess(isAdmin,loggedIn ,"admin",userRole)&& (
                <AllUsers facade={facade} setErrorMessage={setErrorMessage} />)}
            </Route>
           
            <Route path="/modifyusers">
              {facade.hasUserAccess(isAdmin,loggedIn ,"admin",userRole)&& (
                <ModifyUsers facade={facade} setErrorMessage={setErrorMessage} onEditUser={onEditUser} user={user} />)}
            </Route>
            <Route path="/useredit/:id">
              {facade.hasUserAccess(isAdmin,loggedIn ,"admin",userRole)&& (
                <Useredit facade={facade} setErrorMessage={setErrorMessage} />)}
            </Route>
            <Route path="/adduser">
              {facade.hasUserAccess(isAdmin,loggedIn ,"admin",userRole)&& (
                <AddUser facade={facade} setErrorMessage={setErrorMessage} />)}
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
        <Alert className="mt-4" >Status: {errorMessage}</Alert>
      </Container>
    );
    }
export default App;
