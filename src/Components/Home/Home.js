
import Navbar from "../Headers.js/Navbar/navbar";

import { useSelector } from "react-redux";
import RecommendedProperties from "../House/RecommendedProperties";
import Categories from "../House/Categories/categories";

function Home(){
  return <>
   <div className="container-fluid">
    
    <Navbar/>
    <div className="mtt"></div>
    <RecommendedProperties/>
    <div className="mtt"></div>
    <Categories/>
  </div>
  </>
}

export default Home;