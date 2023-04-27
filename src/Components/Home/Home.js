
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
        <Route path="/villa" element={<Flate/>}/>
        <Route path="/plot" element={<Flate/>}/>
        <Route path="/formHouse" element={<Flate/>}/>
        <Route path="/office" element={<Flate/>}/>  
        <Route path="/other" element={<Flate/>}/>
        <Route path="/flat" element={<Flate/>}/>
        <Route path="/CurrentLocation" element={<PropertyLocation/>}/>
        <Route path="/uploadImage" element={<ImagePost/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
    </Routes>
    {/* <ImagePost/> */}

  </>
}

export default Home;