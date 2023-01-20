
import React from 'react';
import Card1 from './Card1';
import Body from './Body';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Home( ) {
  const history = useHistory()
  return (
    <div>
      
    <Body/>
    <div className="row">
     
    <Card1 name="Scope" description="DHCP scopes in the network of BRK" see={<Button variant="secondary" style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/find_scope") } >Go TO Scopes !</Button>} />

    <Card1 name="Revistion" see={<Button variant="secondary" style={{
        backgroundColor: 'grey' 
        
      }} onClick={()=> history.push("/find_reservation") } >Go TO Reservations !</Button>} description="Reservations related to all DHCP scopes"/>
    <Card1 name="leases" see={<Button variant="secondary" style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/find_leases") } >Go TO leases !</Button>} description="Active and inactive leases- DHCP scopes" />
    </div>
    
    </div>
   
  );
}

export default Home;