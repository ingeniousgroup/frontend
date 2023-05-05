
import Navbar from "../Headers.js/Navbar/navbar";

import { useDispatch, useSelector } from "react-redux";
import RecommendedProperties from "../House/nearByHouse";
import Categories from "../House/Categories/categories";
import PropertyLocation from "../House/PostProperty/PropertyLocation/propertyLocation";
import PostProperty from "../House/PostProperty/post/postProperty";
import Flate from "../House/PostPropertyForms/Flate/Flate";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { fetchPropertyList } from "../../redux-config/PropertySlice";
import Property from "../House/Property/property";
import NearByHouse from "../House/nearByHouse";

import ImagePost from "../House/PostProperty/PostImage/ImagePost";
import Signin from "../User/signin";
import Signup from "../User/signup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import HouseDescription from "../House/HouseDescription/HouseDescription";
import ViweProfile from "../User/ViewProfile/viewProfile";
import NavebarNext from "../Headers.js/Navbar/navbarNext";
import Subscription from "../House/subscription/subscription";
import SubscriptionProtected from "../subscriptionProtected/subscriptionProtected";
import { showSubscription } from "../../redux-config/subscriptionSlice";
function Home(){
  const [pixelFlag,setPixelFlag] = useState(false);
  window.onscroll = ()=>{
        if (window.scrollY>= 450 ) {
          setPixelFlag(true);
        }
        else {
          setPixelFlag(false)
        }
  }
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user);
  useEffect(()=>{
    dispatch(fetchPropertyList());
  },[]);

  return <>
    {pixelFlag && <NavebarNext/>}
    {!pixelFlag && <Navbar/>}
    <div style={{marginTop:"102px"}}>
    </div>    
    <Routes>
      
        <Route path="/" element={<Property/>}/> 
        <Route path="/propertypost" element={<ProtectedRoute><SubscriptionProtected><PostProperty/></SubscriptionProtected></ProtectedRoute>}/>
        <Route path="/villa" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/plot" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/formHouse" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/office" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>  
        <Route path="/other" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/flat" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/CurrentLocation" element={<ProtectedRoute><PropertyLocation/></ProtectedRoute>}/>
        <Route path="/uploadImage" element={<ProtectedRoute><ImagePost/></ProtectedRoute>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/viewDiscription" element={<HouseDescription/>}/>
        <Route path="/viewProfile" element={<ProtectedRoute><ViweProfile/></ProtectedRoute>}/>
        <Route path="/takeSubscription" element={<ProtectedRoute><Subscription/></ProtectedRoute>}/>
           

    </Routes>

  </>
}

export default Home;