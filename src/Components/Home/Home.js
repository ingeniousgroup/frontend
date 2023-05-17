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
import axios from "axios";
import ImagePost from "../House/PostProperty/PostImage/ImagePost";
import Signin from "../User/signin";
import Signup from "../User/signup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import HouseDescription from "../House/HouseDescription/HouseDescription";
import ViweProfile from "../User/ViewProfile/viewProfile";
import NavebarNext from "../Headers.js/Navbar/navbarNext";
import Subscription from "../House/subscription/subscription";
import apiEndPoint from "../../redux-config/WebApi/api";

import Plot from "../House/PostPropertyForms/plots/plot";
import TenantProfile from "../User/ViewProfile/tenantProfile";
import Furnishing from "../House/Categories/Furnishing";
import SubscriptionProtected from "../subscriptionProtected/subscriptionProtected";
import { showSubscription } from "../../redux-config/subscriptionSlice";
import ViewProfileNext from "../User/ViewProfile/viewProfileNext";
import Office from "../House/PostPropertyForms/Office/office";
function Home(){
  
  const [flag, setFlag] = useState(true);
  const [searchText,setSerachText] = useState("");
  const [propertyList, setPropertyList] = useState([]);

  const loadProperty =async(searchText)=>{
    try {
      var response ;
      if(!searchText)
          response = await axios.get(apiEndPoint.PROPERTY_LIST);
      else{
        setFlag(false);
        response = await axios.post(apiEndPoint.SEARCH,{address: searchText}); 
      }
        
      if(response.data.status){
        setPropertyList(response.data.property);

      }
    } catch (err) {
      // setError("Oops somthing went Wrong");
    }
  }
  const search = searchText =>{
    setSerachText(searchText);
  }

  useEffect(()=>{
     loadProperty(searchText);
  },[searchText]);

  

  return <>
    <Routes>
        <Route path="/" element={<Property search={search} propertyList={propertyList}/>}/> 
        <Route path="/propertypost" element={<ProtectedRoute><SubscriptionProtected><PostProperty/></SubscriptionProtected></ProtectedRoute>}/>
        <Route path="/villa" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/plot" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/formHouse" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/office" element={<ProtectedRoute><Office/></ProtectedRoute>}/>  
        <Route path="/other" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/flat" element={<ProtectedRoute><Flate/></ProtectedRoute>}/>
        <Route path="/CurrentLocation" element={<ProtectedRoute><PropertyLocation/></ProtectedRoute>}/>
        <Route path="/uploadImage" element={<ProtectedRoute><ImagePost/></ProtectedRoute>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/viewDiscription" element={<HouseDescription/>}/>
        <Route path="/viewProfile" element={<ProtectedRoute><ViewProfileNext/></ProtectedRoute>}/>
        <Route path="/takeSubscription" element={<ProtectedRoute><Subscription/></ProtectedRoute>}/>
        <Route path="/viewTenantProfile" element={<ProtectedRoute><TenantProfile/></ProtectedRoute>}/>
        <Route path="/nearByhouse" element={<NearByHouse/>}/>
    </Routes>

  </>
}

export default Home;