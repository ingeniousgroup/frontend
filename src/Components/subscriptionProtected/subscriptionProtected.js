import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function SubscriptionProtected({children}){
    const {subscription,isSubscription} = useSelector((state)=>state.subscription)
    if(!isSubscription)
        return <Navigate to='/takeSubscription'/>
    return children;
}

export default SubscriptionProtected;