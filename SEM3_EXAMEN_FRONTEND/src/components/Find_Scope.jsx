
import React, { useRef, useState } from "react";


function Find_Scope(){

    const baseURL = "https://central.brkint.dk/api/scopes";
    const ScopeId = useRef(null);
    const Name = useRef(null);
    const [getResult, setGetResult] = useState(null);
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
        const res = await fetch(baseURL,options);
        const data = await res.json();
        setGetResult(data);
    }
  

    async function getDataById(e) {
      const id = ScopeId.current.value;
      e.preventDefault();
          const res = await fetch(`https://central.brkint.dk/api/scopes/`+id);
          const data = await res.json();
          setGetResult(data);
       console.log(data)
    }

  
    async function getDataByTitle(e) {
        const title = Name.current.value;
          e.preventDefault();
            let url = new URL(`https://central.brkint.dk/api/scopes/?name=${title}`);
            const res = await fetch(url);
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
        <div className="card-header text-center" ><h1>Scopes-search-by-scopeid-name</h1></div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
  
            <input type="text" ref={ScopeId} className="form-control ml-2" placeholder="id" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button>
            </div>
  
            <input type="text" ref={Name} className="form-control ml-2" placeholder="Name" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Name</button>
            </div>
  
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{ <div className="tablediv">
        <p style={{ textAlign: "center" }}> Scope</p>
        <table style={{ widtd: 750 }} className="table table-striped">
    <thead>
    <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
          <th>ScopeId_In</th>
          <th>ScopeId</th>
          <th>SubnetMask</th>
          <th>SubnetMask_int</th>
          <th>StartRange</th>
          <th>StartRange_int</th>
          <th>EndRange</th>
          <th>EndRange_int</th>
          <th>Description</th>
          <th>LeaseDuration</th>
          <th>MaxBootpClient</th>
          <th>Name</th>
          <th>NapEnable</th>
          <th>NapProfile</th>
          <th>State</th>
          <th>SuperscopeName</th>
          <th>Type</th>
          <th>PSComputerName</th>
          <th>ToBeDeleted</th>
          <th>ScopeNetId</th>
          <th>ScopeId_bin</th>
          <th>SubnetMask_bin</th>
          <th>StartRange_bin</th>
          <th>EndRange_bin</th>
          <th>ScopeNetId_bin</th>
          <th>Activ_leases_refresh</th>
        </tr>
    </thead> <tbody  >
{getResult.map((sc) => (<tr>
        <td>{sc.ScopeId_Int}</td>
        <td>{sc.ScopeId}</td>
        <td>{sc.SubnetMask}</td>
        <td>{sc.SubnetMask_int}</td>
        <td>{sc.StartRange}</td>
        <td>{sc.StartRange_int}</td>
        <td>{sc.EndRange}</td>
        <td>{sc.EndRange_int}</td>
        <td>{sc.Description}</td>
        <td>{sc.LeaseDuration}</td>
        <td>{sc.MaxBootpClient}</td>
        <td>{sc.Name}</td>
        <td>{sc.NapEnable}</td>
        <td>{sc.NapProfile}</td>
        <td>{sc.State}</td>
        <td>{sc.SuperscopeName}</td>
        <td>{sc.Type}</td>
        <td>{sc.PSComputerName}</td>
        <td>{sc.ToBeDeleted}</td>
        <td>{sc.ScopeNetId}</td>
        <td>{sc.ScopeId_bin}</td>
        <td>{sc.SubnetMask_bin}</td>
        <td>{sc.StartRange_bin}</td>
        <td>{sc.EndRange_bin}</td>
        <td>{sc.ScopeNetId_bin}</td>
        <td>{sc.Activ_leases_refresh}</td>
      
    
    </tr>))}
    </tbody></table></div>}</pre></div> }
        </div>
      </div>
    );
  }
  
  

export default Find_Scope;