import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Leasing from "./Leasing";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from "./NoMatch";

import Allleases from "./Allleases";
import { NavLink } from 'react-router-dom';
import {Button} from "react-bootstrap"
import { useHistory } from 'react-router-dom';

function Leases(){
  const history = useHistory()
    return(
      <div><Button style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/") } >Go Back!</Button>
<Container>
<Router>
<Header  />

<Switch>
<Route exact path="/allleases">
    <Allleases/>
</Route>
<Route path="/leasing">
    <Leasing/>
</Route>







</Switch>


</Router>





</Container>
</div>
    )
}
function Header() {
    return (
      <div style={{marginTop:'40px'}}>
        <ul className="header">
          <li> <NavLink exact activeClassName="active" to="/allleases">All Leases </NavLink></li>
          <li><NavLink activeClassName="active" to="/leasing">Leases</NavLink></li>
        
           
        </ul>
      </div>
    );
  }
export default Leases;