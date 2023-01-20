import React, { useEffect, useState } from "react";
import "../styles/mypage.css";

function Reservations() {
  const [reserve, setReserve] = useState([]);

  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Host': 'central.brkint.dk',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoid2Voa28iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoiZmVmMzA5NDYtZmZhYy00YmRlLThhMTktYWI5ZmQyMGJhNzBiIiwic3ViIjoiUG93ZXJTaGVsbFVuaXZlcnNhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJXZWJ0b29sc19Vc2VyIiwiUmVhZGVyIiwiT3BlcmF0b3IiXSwibmJmIjoxNjYwODEzNDIxLCJleHAiOjE2OTIzNDk0MjEsImlzcyI6Iklyb25tYW5Tb2Z0d2FyZSIsImF1ZCI6IlBvd2VyU2hlbGxVbml2ZXJzYWwifQ.e-wPmHX19HBQdmbEXesQ8JOZI56qKnhjzPw7VdxY0k8',
    }
  }

  const fetchData = async () => {
    try{
      const response = await fetch(
        "https://central.brkint.dk/api/reservations",options
      );
      const data = await response.json();
      setReserve(data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  

  return (
    
    
     
    
    <div className="tablediv">
        <p style={{ textAlign: "center" }}>All Reservations</p>
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
    </thead>
    <tbody >
{reserve.map((sc) => (<tr>
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
    </tbody>
</table>
</div>


  );
}

export default Reservations;
