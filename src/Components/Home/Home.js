
import Navbar from "../Headers.js/Navbar/navbar";

import { useSelector } from "react-redux";
import RecommendedProperties from "../House/RecommendedProperties";
import Categories from "../House/Categories/categories";
import PostProperty from "../House/PostProperty/postProperty";
import Flate from "../House/PostPropertyForms/Flate/Flate";
import PropertyLocation from "../House/PostProperty/PropertyLocation/propertyLocation";

function Home(){
  return <>
    <PropertyLocation/>
  </>
}

export default Home;