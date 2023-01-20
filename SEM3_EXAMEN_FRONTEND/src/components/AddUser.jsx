import React,{useState,useMemo} from "react";
import { useHistory } from "react-router-dom";
import "../styles/form.css";



export default function AddUser({ facade ,getResult,editMode})
{

    const [user,setuser]=useState({
        login_name:null,
        password:null
    })
    let history = useHistory();
    const init = { login_name: "", password: "" };
    const [Credentials, setCredentials] = useState(init);



    const create = (evt) =>
    {
        
        evt.preventDefault();
        facade.createUser(Credentials.login_name, Credentials.password)
       history.push("/modifyUsers")


    }
    const errors= React.useMemo(()=>{
const errors={}
if(Credentials.password !==null){
if(!Credentials.password){
    errors.password="invalid password"
}else if(Credentials.password.length < 8){
    errors.password= " You must write 8 charactors"
}
}
return errors;

    }, [Credentials]);
    const onChange = (evt) =>
    {
        setCredentials({ ...Credentials, [evt.target.id]: evt.target.value })
    }



    return (
        <div style={{textAlign:"center"}}>
          
            <h2>Add User</h2>
            <form  onChange={onChange} >
          <input className="login-input"  placeholder="User Name" defaultValue={editMode ? getResult.login_name :""} id="login_name" /> <br /><br />
          <input className="login-input"  type="password" placeholder="Password" id="password" /> <br /><br />
          {errors.password ? <span class="text-center text-danger"  >{errors.password}</span> : null}<br/><br/>
          <button className="login-btn" onClick={create}>Add</button>
        </form>
            
            
        </div>
    )

}