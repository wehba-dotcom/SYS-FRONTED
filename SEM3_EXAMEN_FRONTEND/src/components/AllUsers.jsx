
import React, { useRef, useState } from "react";


function AllUsers(){

    const baseURL = "https://central.brkint.dk/api/allusers";
    const Id = useRef(null);
    const [getResult, setGetResult] = useState(null);
  

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
        const res = await fetch(baseURL,options);
        const data = await res.json();
        setGetResult(data);
    }
  

    async function getDataById(e) {
      const ID= Id.current.value;
      e.preventDefault();
          const res = await fetch("https://central.brkint.dk/api/allusers/"+ID);
          const data = await res.json();
          setGetResult(data);
       
    }

  
    const clearGetOutput = () => {
      setGetResult(null);
    }
  


    return (
      <div className="card">
         <div className=" text-center text-light rounded bg-secondary ">
          <h1>BORNHOLM Regional Municipality IT-DEPARMENT</h1>
     </div>
        <div className="card-header text-center" ><h1>All Users</h1></div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
  
            <input type="text" ref={Id} className="form-control ml-2" placeholder="id" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button>
            </div>
  
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{ <div className="tablediv">
        <p style={{ textAlign: "center" }}> Users</p>
        <table style={{ widtd: 750 }} className="table table-striped">
    <thead>
    <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
          <th>User-ID</th>
          <th>Name</th>
          <th>Password</th>
          <th>Is-Admin</th>
        </tr>
    </thead> <tbody>
{getResult.map((usr) => (<tr>
        <td>{usr.ID}</td>
        <td>{usr.login_name}</td>
        <td>{usr.password}</td>
        <td>{(usr.is_admin === true) ? "true" : "false"}</td>
    </tr>))}
    </tbody></table></div>}</pre></div> }
        </div>
      </div>
    );
  }
  
  


export default AllUsers;