import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";


const Logout = ()=>{

    const {authInfo, logout} = useContext(AuthContext)

    useEffect (()=>{

        const config = {
            method: "post",
            url:"http://localhost:9000/api/logout",
            headers: {
            Authorization: authInfo.token,
        }
    }

        axios(config)
            .then(res=> logout())
            .catch(err=>console.log(err))
    },[])
       

    return (
        <div>
            <h1>LOGOUT</h1>
        </div>

    )
}

export default Logout;