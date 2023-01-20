
import React, { useRef, useState } from "react";
function Find_Leases(){

  
    const baseURL = "https://central.brkint.dk/api/leases?ClientID=";
  
    const ClientID= useRef(null);
    const IPAddress= useRef(null);
  
    const [lease, setLease] = useState(null);
  
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
        const res = await fetch(`https://central.brkint.dk/api/leases`,options);
        
  
        const data = await res.json();
  
       
  
        setLease(data);
      
    }
  
    async function getDataById(e) {
      e.preventDefault();
      const id = ClientID.current.value;
  
 
          const res = await fetch(`${baseURL}${id}`,options);
  
  
          const data = await res.json();
  
        
        
  
         setLease(data);
       
    }
  
    async function getDataByTitle(e) {
      const title = IPAddress.current.value;
  
    e.preventDefault();
          // const res = await fetch(`${baseURL}/tutorials?title=${title}`);
  
          let url = new URL(`https://central.brkint.dk/api/leases?IPAddress=${title}`);
          
  
          const res = await fetch(url,options);
  
       
  
          const data = await res.json();
  
         
  
       setLease(data);
       
    }
  
    const clearGetOutput = () => {
      setLease(null);
    }
  
    return (
      <div className="card">
         <div className=" text-center text-light rounded bg-secondary ">
<h1>Bornholm Regional Municipality IT-DEPARMENT</h1>
</div>
        <div className="card-header text-center" ><h1>Leases-search-by-IPAddress-name</h1></div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
  
            <input type="text" ref={ClientID} className="form-control ml-2" placeholder="ClientID" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by ClientID</button>
            </div>
  
            <input type="text" ref={IPAddress} className="form-control ml-2" placeholder="IPAddress" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By IPAddress</button>
            </div>
  
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          
          { lease && <div className="alert alert-secondary mt-2" role="alert"><pre>{ <div className="tablediv">
        <p style={{ textAlign: "center" }}> reservation</p>
        <table style={{ widtd: 750 }} className="table table-striped">
    <thead>
    <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
     <th>IPAddress_int</th>
      <th>IPAddress</th>
      <th>ScopeId</th>
        <th>ClientID</th>
      <th>HostName</th>
      <th>AddressState</th>
        <th>LeaseExpiryTime</th>
      <th>ScopeId_int</th>
        <th>HentetFraDHCP</th>
      <th>IPAddressHostid</th>
      
    
        </tr>
    </thead> <tbody  >
{lease.map((sc) => (<tr>
  <td>{sc.IPAddress_int}</td>
      <td>{sc.IPAddress}</td>
      <td>{sc.ScopeId}</td>
        <td>{sc.ClientID}</td>
      <td>{sc.HostName}</td>
      <td>{sc.AddressState}</td>
        <td>{sc.LeaseExpiryTime}</td>
      <td>{sc.ScopeId_int}</td>
        <td>{sc.HentetFraDHCP}</td>
      <td>{sc.IPAddressHostid}</td>
    
    </tr>))}
    </tbody></table></div>}</pre></div> }
        </div>
      </div>
    );
  }
  
  

export default Find_Leases;