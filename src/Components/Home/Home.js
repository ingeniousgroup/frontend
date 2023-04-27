
import Navbar from "../Headers.js/Navbar/navbar";

import { useSelector } from "react-redux";
import RecommendedProperties from "../House/RecommendedProperties";
import Categories from "../House/Categories/categories";

import PostProperty from "../House/PostProperty/post/postProperty";
import Flate from "../House/PostPropertyForms/Flate/Flate";
import { Route, Routes } from "react-router";
import PropertyLocation from "../House/PostProperty/PropertyLocation/propertyLocation";
import ImagePost from "../House/PostProperty/PostImage/ImagePost";

function Home(){
  return <>
    <Navbar/>
    <div style={{marginTop:"100px"}}>

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
        <Route path="/CurrentLocation" element={<PropertyLocation/>}/>
        <Route path="/uploadImage" element={<ImagePost/>}/>
        
    </Routes>
    {/* <ImagePost/> */}

  </>
}

export default Home;