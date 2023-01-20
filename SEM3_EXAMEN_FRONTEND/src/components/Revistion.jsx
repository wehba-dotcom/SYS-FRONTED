import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";
import Reservations from "./Reservations";
import 'bootstrap/dist/css/bootstrap.min.css';
import  { LinkContainer } from 'react-router-bootstrap';


import Allscopes from "./Allscopes";
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import {Button} from "react-bootstrap"
import { useHistory } from 'react-router-dom';


function Revistion(){
    const history = useHistory()
    return(
        <div><Button style={{
            backgroundColor: 'grey'
            
          }} onClick={()=> history.push("/") } >Go Back!</Button>
<Container>
<Router>
<Header  />

<Switch>
<Route exact path="/Allscopes">
    <Allscopes/>
</Route>
<Route path="/reservations">
    <Reservations/>
</Route>



    


</Switch>


</Router>





</Container>
</div>
    )
}
function Header() {
  return (
    <Navbar bg="light" expand="lg">
        <LinkContainer to="/Allscopes">
<Navbar.Brand>Allscopes</Navbar.Brand>
</LinkContainer>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
    <LinkContainer to="/reservations">
  <Nav.Link>Reservations</Nav.Link>
  </LinkContainer>
 
</Nav>
</Navbar.Collapse>
</Navbar>
)
  }
export default Revistion;