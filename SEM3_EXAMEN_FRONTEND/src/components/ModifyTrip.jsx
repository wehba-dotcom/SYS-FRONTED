
import React,{useEffect,useState} from 'react';

export default function ModifyTrip({facade , setErrorMessage}){

  const [trips,setTrips] = useState([])
 
 
  
  
  const updateList = (data) => {
    setTrips(data)
    
  };
  
  useEffect(()=> {
      facade.fetchData("trip/all", updateList, setErrorMessage);
  },[facade,setErrorMessage]);
  












//const handleInput = (event) => {
  //    setBoat({ ...boat, [event.target.id]: event.target.value })
  //}
  
  return(
      
      <div>
      <table className="table table-striped">
      <thead>
          <tr>
             <th>Id</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Location</th>
              <th>name</th>
              <th>PackingList</th>
              <th>Time</th>
          </tr>
      </thead>
      <tbody>
  {trips.map((trip) => (<tr key={trip.id}>
      <td>{trip.id}</td>
      <td>{trip.date}</td>
      <td>{trip.duration}</td>
      <td>{trip.location}</td>
      <td>{trip.name}</td>
      <td>{trip.packingList}</td>
      <td>{trip.time}</td>
      <td> 
        <a href="xx" >edit</a> / <a href="xx" >delete</a>
      </td>
      </tr>))}
      </tbody>
  </table>

  </div>
  
  );
  }
  