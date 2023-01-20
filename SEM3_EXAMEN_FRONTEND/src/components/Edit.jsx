import React ,{useState,useRef} from "react";
import "../styles/form.css";



export default function Edit({ facade ,user,res})
{

    const Id = useRef(null);
    const [result,setResult]=useState(null)
  
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React PUT Request Example' })
    };
/*function onClickEdit(ID){
fetch('https://central.brkint.dk/api/dhcp/allusers/:Id', requestOptions)
.then(response => response.json())
.then(data );
console.log(data)
setResult(data)
}*/
    return (
        <div style={{textAlign:"center"}}>
            <h2>Sign up</h2>
            <form  >
          <input className="login-input"   id="login_name" /> <br /><br />
          <input className="login-input"  type="password"  id="password" /> <br /><br />
          <button className="login-btn" >Create</button>
        </form>
        </div>
    )

}