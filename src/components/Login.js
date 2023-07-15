import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = ()=>{

    const [user, setUser] = useState({
        username:"workintech",
        password:"wecandoit"
    })

    const {login} = useContext(AuthContext);

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        login(user);
    }

    return (
        <div>
            <h1>LOGİN</h1>
            <form onSubmit={handleSubmit}>
            <div>
               <label>USERNAME
                <input type="text"
                 name= "username"
                 onChange={handleChange}
                 value={user.name}/>
               </label>
            </div>
            <br/>
            <div>
               <label>PASSWORD
                <input type="password"
                 name="passwword"
                 onChange={handleChange}
                 value={user.password}
                 />
               </label>
            </div>
            <br/>
               <button type="submit">SUBMIT</button>

            </form>
        </div>

    )
}

export default Login;