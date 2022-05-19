
import React from 'react';
function Home( ) {
  
  return (
    <div style={{textAlign:'center', margin:'20px',backgroundColor:'lightgreen'}}>
      <h2>Basic course - Set Goals </h2>
     
      
        <ul style={{ listStyleType: "none"}}>
          <li>Primary actor: Customer
              Secondary actor: System </li>
              <br></br>
          <li>precondition: customer is registered and signed in.</li>
          <br></br>
          <li style={{textAlign: "left"}}>
     
When the customer is on the "Home" page, the customer clicks on "My Page" in the navigation bar, the system forwards the customer to his/hers personal page. 

On "My Page" the system gives the customer the opportunity to set goals for each of the courses with an active license. 
  </li>
  <br></br>

    <li style={{textAlign: "left"}}>The customer can choose to set a "MAX questions answered wrong" by using a dropdown menu, and the 

customer can choose to set a "date to be finished with the course" by using a calender. when the customer has entered the wished goals, the customer can press the "Set goal for this course " button. The system sets the goals in the database and display the goals in the Goal field for the given course.</li>


        </ul>
    </div>
  );
}

export default Home;