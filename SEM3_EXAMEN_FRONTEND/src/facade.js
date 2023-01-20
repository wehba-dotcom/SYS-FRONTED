import URL from "./setting";
import baseURL from "./setting"
import {useParams} from "react-router-dom"


      function handleHttpErrors(res) {
        if (!res.ok) {
          return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json();
      }
      


function apiFacade() {
  


  const baseURL="https://central.brkint.dk/api/allusers/"

    const login = (login_name, password, setLoggedIn,  setErrorMessage, setIsAdmin,setUserRole) => {
        const options = makeOptions("POST",{login_name: login_name, password: password });
        fetch(URL+"/login", options)
        .then(handleHttpErrors)
        .then((data) =>{
          
          console.log(data)
          // Id: 1, Login_name: 'admin', Is_admin: true
        console.log(data[0].Is_admin);
        console.log("Before setIsAdmin")
        if (data[0].Is_admin){
          setIsAdmin(true);
        }
          console.log("after setIsAdmin")
          setLoggedIn(true);
          setErrorMessage('Logged in');
          setUserRole(data[0].Login_name)
        })
        .catch(err =>
          {
              if (err.status)
              {
                  console.log(err)
                
                  err.fullError.then(e => console.log(e.code + ": " + e.message))
              }
              else { console.log("Network error"); }
          })
    }


    const updateData = (id) =>
    {
       console.log("updateData")

        const options = makeOptions("PUT", {ID:id});
        
         fetch(`${baseURL}${id}`, options)
            .then(handleHttpErrors)
            .then((data) => {
            
            console.log(data)
           })
           .catch((error)=> {
             console.log(error)
           })
       
         }
   


    const createUser= (login_name,password) => {
    
      const options = makeOptions("POST", {login_name: login_name, password: password });
      return fetch(URL , options)
     
  }
    
    const deleteUser= (id) => {
      const options = makeOptions("DELETE", {ID:id});
      return fetch(`https://central.brkint.dk/api/allusers/${id}`, options)

    }
    
    
    const fetchData = (endpoint, updateAction) =>
        {
            const options = makeOptions("GET", true); //True add's the token
            return fetch(URL + "/api/" + endpoint, options)
                .then(handleHttpErrors)
                .then((data) => updateAction(data))
        }


    const makeOptions= (method,body) =>{
      var opts = {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': 'central.brkint.dk',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoid2Voa28iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoiZmVmMzA5NDYtZmZhYy00YmRlLThhMTktYWI5ZmQyMGJhNzBiIiwic3ViIjoiUG93ZXJTaGVsbFVuaXZlcnNhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJXZWJ0b29sc19Vc2VyIiwiUmVhZGVyIiwiT3BlcmF0b3IiXSwibmJmIjoxNjYwODEzNDIxLCJleHAiOjE2OTIzNDk0MjEsImlzcyI6Iklyb25tYW5Tb2Z0d2FyZSIsImF1ZCI6IlBvd2VyU2hlbGxVbml2ZXJzYWwifQ.e-wPmHX19HBQdmbEXesQ8JOZI56qKnhjzPw7VdxY0k8',
        }
      }
      
      if (body) {
        opts.body = JSON.stringify(body);
      }
      
      return opts;
    }



    const hasUserAccess = ( isAdmin,loggedIn,neededRole,userRole) =>
        {
          console.log("isAdmin:", isAdmin)
          console.log("neededRole:", neededRole)
          console.log("logic:", neededRole === "admin")
            if(neededRole === "admin"){
                if (isAdmin)
                  return true
                else
                return false
            } else
            {
              return ((!isAdmin) && loggedIn)
            }
        }


      

    return {
      hasUserAccess,
        makeOptions,
        createUser,
        login,
        fetchData,
        deleteUser,
        updateData,
    }
    }
    
    const facade = apiFacade();
    export default facade;