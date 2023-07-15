import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext"; 

const ProtectedRoute = ({children, ...rest})=> {
    
        const {isLoggedIn} = useContext(AuthContext)

        return (
        <Route {...rest}
        render = {({location}) => 
        isLoggedIn ? (children) : 
        <Redirect to= {{
            pathname:"/login",
            state:{from:location}
        }}/>
        
    }/>
        
    )
}

export default ProtectedRoute;