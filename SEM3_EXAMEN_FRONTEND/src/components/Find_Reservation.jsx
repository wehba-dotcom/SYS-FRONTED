
import React, { useRef, useState } from "react";
function Find_Reservation(){

  
    const baseURL = "https://central.brkint.dk/api/reservations/?ClientId=";
  
    const ClientId = useRef(null);
    const name = useRef(null);
  
    const [reservation, setReservation] = useState(null);
  
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    }
    var options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'central.brkint.dk',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoid2Voa28iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoiZmVmMzA5NDYtZmZhYy00YmRlLThhMTktYWI5ZmQyMGJhNzBiIiwic3ViIjoiUG93ZXJTaGVsbFVuaXZlcnNhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJXZWJ0b29sc19Vc2VyIiwiUmVhZGVyIiwiT3BlcmF0b3IiXSwibmJmIjoxNjYwODEzNDIxLCJleHAiOjE2OTIzNDk0MjEsImlzcyI6Iklyb25tYW5Tb2Z0d2FyZSIsImF1ZCI6IlBvd2VyU2hlbGxVbml2ZXJzYWwifQ.e-wPmHX19HBQdmbEXesQ8JOZI56qKnhjzPw7VdxY0k8',
      }
    }
  
    async function getAllData(e) {
      e.preventDefault();
        const res = await fetch(`https://central.brkint.dk/api/reservations/`,options);
        
  
        const data = await res.json();
  
       
  
        setReservation(data);
      
    }
  
    async function getDataById(e) {
      e.preventDefault();
      const id = ClientId.current.value;
  
 
          const res = await fetch(`	${baseURL}${id}`,options);
  
  
          const data = await res.json();
  
        
        
  
         setReservation(data);
       
    }
  
    async function getDataByTitle(e) {
      const title = name.current.value;
  
    e.preventDefault();
          // const res = await fetch(`${baseURL}/tutorials?title=${title}`);
  
          let url = new URL(`https://central.brkint.dk/api/reservations?name=${title}`);
          
  
          const res = await fetch(url,options);
  
       
  
          const data = await res.json();
  
         
  
       setReservation(data);
       
    }
  
    const clearGetOutput = () => {
      setReservation(null);
    }
  
    return (
      <div className="card">
         <div className=" text-center text-light rounded bg-secondary ">
<h1>Bornholm Regional Municipality IT-DEPARMENT</h1>
</div>
        <div className="card-header text-center" ><h1>Reservation-search-by-scopeid-name</h1></div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
  
            <input type="text" ref={ClientId} className="form-control ml-2" placeholder="id" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by ClientId</button>
            </div>
  
            <input type="text" ref={name} className="form-control ml-2" placeholder="Name" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Name</button>
            </div>
  
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          
          { reservation && <div className="alert alert-secondary mt-2" role="alert"><pre>{ <div className="tablediv">
        <p style={{ textAlign: "center" }}> reservation</p>
        <table style={{ widtd: 750 }} className="table table-striped">
    <thead>
    <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
     <th>ScopeId_In</th>
      <th>ScopeId</th>
      <th>IPAddress</th>
        <th>IPAddress_int</th>
      <th>ClientId</th>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>AddressState</th>
      <th>PSComputerName</th>
      <th>ScopeNetId</th>
        <th>IPAddressNetid</th>
      <th>IPAddressHostid</th>
      <th>ScopeId_bin</th>
      <th>IPAddress_bin</th>
      <th>ScopeNetId_bin</th>
        <th>IPAddressNetid_bin</th>
        <th>IPAddressHostid_bin</th>
      
    
        </tr>
    </thead> <tbody  >
{reservation.map((sc) => (<tr>
  <td>{sc.ScopeId_Int}</td>
      <td>{sc.ScopeId}</td>
      <td>{sc.IPAddress}</td>
      <td>{sc.IPAddress_int}</td>
        <td>{sc.ClientId}</td>
        <td>{sc.Name}</td>
        <td>{sc.Type}</td>
        <td>{sc.Description}</td>
      <td>{sc.AddressState}</td>
      <td>{sc.PSComputerName}</td>
      <td>{sc.ScopeNetId}</td>
      <td>{sc.IPAddressNetid}</td>
        <td>{sc.IPAddressHostid}</td>
      <td>{sc.ScopeId_bin}</td>
      <td>{sc.IPAddress_bin}</td>
        <td>{sc.ScopeNetId_bin}</td>
        <td>{sc.IPAddressNetid_bin}</td>
        <td>{sc.IPAddressHostid_bin}</td>
      
    
    </tr>))}
    </tbody></table></div>}</pre></div> }
        </div>
      </div>
    );
  }
  
  

export default Find_Reservation;