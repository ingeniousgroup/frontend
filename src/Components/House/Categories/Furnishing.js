import { useEffect, useState } from "react";
import "./furnishing.css";
import axios from "../../../interceptor";
import api from "../../../redux-config/WebApi/api";
function Furnishing(){
  const [furnished,setFurnished] = useState(0);
  const [unFurnished,setUnFurnished] = useState(0);
  const [semiFurnished,setSemiFurnished] = useState(0);

  useEffect(()=>{
    propertyCounter();
  },[]);
  const propertyCounter = async()=>{
    let response = await axios.post(api.PROPERTY_BY_FURNISHING, { category: "semiFurnished" });
    setSemiFurnished(response.data.propertyDetails.length);
    let response1 = await axios.post(api.PROPERTY_BY_FURNISHING, { category: "furnished" });
    setFurnished(response1.data.propertyDetails.length);
    let response2 = await axios.post(api.PROPERTY_BY_FURNISHING, { category: "unFurnished" });
    setUnFurnished(response2.data.propertyDetails.length);
  }
  return <>
  <div id="fur-header">
    <h1>Home By Furnishing</h1>
    <p>Choose your preferred furnishing</p>
  </div>
  <div className="fur-container">
    <div className="fur-card">
      <div className="card-image" style={{borderRadius:'20px'}}>
        <img src="images/furnished.webp" />
      </div>
      <div className="card-text">
      <p className="card-meal-type">Furnished</p>
        <h2 className="card-title">Furnished</h2>
        <p className="card-body">
        A furnished room or house is available to be rented together with the furniture in it.
        </p>
      </div>
      <div className="card-price">{semiFurnished-1}+</div>
    </div>
    <div className="fur-card">
      <div className="card-image"style={{borderRadius:'20px'}}>
        <img src="images/semi.webp" />
      </div>
      <div className="card-text">
        <p className="card-meal-type">Semi Furnished</p>
        <h2 className="card-title">Semi Furnished</h2>
        <p className="card-body">
       Semi furnished house usually has some pieces of furniture.
        </p>
      </div>
      <div className="card-price">{semiFurnished-1}+</div>
    </div>
    <div className="fur-card">
      <div className="card-image"style={{borderRadius:'20px'}}>
        <img src="images/unfun.webp" />
      </div>
      <div className="card-text">
        <p className="card-meal-type">Unfurnished</p>
        <h2 className="card-title">Un Furnished</h2>
        <p className="card-body">
        Unfurnished property is less expensive than furnished houses since there are appliances provided.
        </p>
      </div>
      <div className="card-price">{unFurnished}+</div>
    </div>
    
  </div>
</>

}

export default Furnishing;