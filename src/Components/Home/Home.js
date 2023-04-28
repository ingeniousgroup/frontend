
import Navbar from "../Headers.js/Navbar/navbar";

import { useDispatch, useSelector } from "react-redux";
import RecommendedProperties from "../House/RecommendedProperties";
import Categories from "../House/Categories/categories";
import PropertyLocation from "../House/PostProperty/PropertyLocation/propertyLocation";
import PostProperty from "../House/PostProperty/post/postProperty";
import Flate from "../House/PostPropertyForms/Flate/Flate";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { fetchPropertyList } from "../../redux-config/PropertySlice";
import Property from "../House/Property/property";
import ImagePost from "../House/PostProperty/PostImage/ImagePost";
import Signin from "../User/signin";
import Signup from "../User/signup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import HouseDescription from "../House/HouseDescription/HouseDescription";
import ViweProfile from "../User/ViewProfile/viewProfile";

function Home(){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPropertyList());
  },[]);
  return <>
    <Navbar/>
    <div style={{marginTop:"100px"}}>
   {/* <RecommendedProperties/> */}
   
    </div>
    
    <Routes>
      {/* <Route path="/propertypost" element={<PostProperty/>}>
        <Route path="flat" element={<Flate/>}/>
        <Route path="villa" element={<Flate/>}/>
        <Route path="plot" element={<Flate/>}/>
        <Route path="formHouse" element={<Flate/>}/>
        <Route path="office" element={<Flate/>}/>  
        <Route path="other" element={<Flate/>}/>
      </Route> */}
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
        <Route path="viewProfile" element={<HouseDescription/>}/>
    </Routes>
        
        <ViweProfile/>

  </>
}

export default Home;