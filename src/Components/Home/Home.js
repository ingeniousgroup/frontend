
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
    <div className="mtt"></div>
    <Categories/> */}
    <Flate/>
  </div>
  </>
}

export default Home;