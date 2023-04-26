
import Navbar from "../Headers.js/Navbar/navbar";

import { useSelector } from "react-redux";
import RecommendedProperties from "../House/RecommendedProperties";
import Categories from "../House/Categories/categories";
import Flate from "../House/PostPropertyForms/Flate/Flate";


function Home(){
  return <>
   <div className="container-fluid">
    {/* <Navbar/>

    <div className="mtt"></div>
    <RecommendedProperties/>
    <div className="mtt"></div> */}
    {/* <Categories/>  */}
    <Flate/>
  </div>
  {/* <div className="mt-5"></div>
  <PostProperty/>
  <div className="mt-5"></div>
  <Signin/>
  <div className="mt-5"></div>
  <Signup/> */}
  </>
}

export default Home;