import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Scopes from "./Scopes";
import 'bootstrap/dist/css/bootstrap.min.css';


import Find_Scope from "./Find_Scope";
import Allscopes from "./Allscopes";
import { NavLink } from 'react-router-dom';
import {Button} from "react-bootstrap"
import { useHistory } from 'react-router-dom';
function Scope(){
  
  const history = useHistory()
    return(
      <div><Button style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/") } >Go Back!</Button>
<Container>
  
<Router>
<Header  />

<Switch>

<Route exact path="/scopes">
    <Scopes/>
</Route>


<Route path="/find_scope">
    <Find_Scope />
</Route>
   


</Switch>


</Router>


</Container>
</div>
    )
}
function Header() {
    return (
      <div style={{ marginTop:'40px' }}   >
         
        <ul className="header">

          <li><NavLink exact activeClassName="active" to="/scopes">Scopes</NavLink></li>
          <li><NavLink activeClassName="active" to="/find_scope">Find_Scope</NavLink></li>
         
          
        </ul>
      </div>
    );
  }


export default Scope;