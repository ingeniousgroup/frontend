import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {currentUser} = useSelector((state)=>state.user);
    if(!currentUser)
        return <Navigate to='/signin'/>
    else if(currentUser.role == "Owner"||currentUser.role=="Tenant")
        return children;
}

export default ProtectedRoute;