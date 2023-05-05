import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function SubscriptionProtected({children}){
    const navigate = useNavigate();
    const {subscription} = useSelector((state)=>state.ownerSubscription)
    if(!subscription)
        return navigate('/takeSubscription');
    return children;
}

export default SubscriptionProtected;