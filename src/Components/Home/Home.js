
import Navbar from "../Headers.js/Navbar/navbar";

import { useDispatch, useSelector } from "react-redux";
import RecommendedProperties from "../House/nearByHouse";
import Categories from "../House/Categories/categories";

import PostProperty from "../House/PostProperty/post/postProperty";
import Flate from "../House/PostPropertyForms/Flate/Flate";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { fetchPropertyList } from "../../redux-config/PropertySlice";
import Property from "../House/Property/property";
import NearByHouse from "../House/nearByHouse";


function Home(){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPropertyList());
  },[]);
  return <>
    <Navbar/>
    <div style={{marginTop:"100px"}}>
    <Property/>
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
        <Route path="/propertypost" element={<PostProperty/>}/>
        <Route path="/villa" element={<Flate/>}/>
        <Route path="/plot" element={<Flate/>}/>
        <Route path="/formHouse" element={<Flate/>}/>
        <Route path="/office" element={<Flate/>}/>  
        <Route path="/other" element={<Flate/>}/>
        <Route path="/flat" element={<Flate/>}/>
        <Route path="/nearByHouse" element={<NearByHouse />}/>
    </Routes>
    {/* <ImagePost/> */}

  </>
}

export default Home;