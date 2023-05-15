import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function SubscriptionProtected({children}){
    const {subscription} = useSelector((state)=>state.ownerSubscription)
    if(!subscription){
        return <Navigate to='/takeSubscription'/>
    } 
    else
        return children;
}

export default SubscriptionProtected;