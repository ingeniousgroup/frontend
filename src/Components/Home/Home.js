

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
import subscriptionProtected from "../subscriptionProtected/subscriptionProtected";
import axios from "axios";
import apiEndPoint from "../../redux-config/WebApi/api";
function Home(){

  const [pixelFlag,setPixelFlag] = useState(false);
  const [searchText,setSerachText] = useState("");
  const [propertyList, setPropertyList] = useState([]);

  const loadProperty =async(searchText)=>{
    try {
      var response ;
      if(!searchText)
         response = await axios.get(apiEndPoint.PROPERTY_LIST);
      else
        response = await axios.post(apiEndPoint.SEARCH,{address: searchText}); 
      if(response.data.status){
        setPropertyList(response.data.property);
        console.log(propertyList)
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

  window.onscroll = ()=>{
        if (window.scrollY>= 200 ) {
          setPixelFlag(true);
        }
        else {
          setPixelFlag(false)
        }
  }
  return <>
    {/* {pixelFlag && <NavebarNext/>}
    {pixelFlag && <Navbar/>} */}
    <NavebarNext/>

    <Navbar search = {search}/>
    <div style={{marginTop:"100px"}}>
    </div>    
    <Routes>
    <Route path="/" element={<Property propertyList={propertyList}/>}/>

        <Route path="/" element={<Property/>}/> 
        <Route path="/propertypost" element={<ProtectedRoute><PostProperty/></ProtectedRoute>}/>
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
        <Route path="viewProfile" element={<ProtectedRoute><ViweProfile/></ProtectedRoute>}/>
        <Route path="/viewProfile" element={<ProtectedRoute><ViweProfile/></ProtectedRoute>}/>
        <Route path="/takeSubscription" element={<ProtectedRoute><Subscription/></ProtectedRoute>}/>
        <Route path="/nearByhouse" element={<NearByHouse/>}/>
           

    </Routes>

  </>
}

export default Home;