import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apiEndPoint from "../../redux-config/WebApi/api";
import { useEffect, useRef, useState } from "react";
function NearByHouse(){
  
  const {state} = useLocation();
  console.log(state);

  const [propertyList,setPropertyList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]= useState(true);
 
  // const property = useRef([]);
 // var propertyList = [];
  alert("near by house Component");  
  const loadProperty =async()=>{
    try {
      let response = await axios.post(apiEndPoint.NEAR_BY_HOUSE_LIST,{latitude:state.latitude,longitude:state.longitude});
      if(response.data.status){
        // console.log("----------");
        // console.log(response.data);
        setPropertyList([...propertyList,...response.data.property]);
        setIsLoading(false);
        // propertyList = [...propertyList,response.data.property];
        // console.log(propertyList);
      }

      // property = [...property,response.data.property];
    } catch (err) {
      setError("Oops somthing went Wrong");
    }
  }

  useEffect(()=>{
    loadProperty();
  },[]);

   return <div className="row">
    <div className="col-12 p-4">
        <h1>Recommended Properties</h1>
    </div>
    {!error&&propertyList.map((property,index)=><div key={index} className="col-md-3">
    <div className="profile-card-2" >
      <img
        src={property.imagesUrlArray[0]}
        className="img img-responsive"
        alt="image nahi hai"
      />
      <div className="profile-name">{property.rent}</div>
      <div className="profile-username">Deposite {property.rent} per month</div>
      <div className="profile-icons">
      {/* {currentUser&&<a ><i className="fa fa-heart" aria-hidden="true"></i></a>}
      {!currentUser&&<a ><i className="fa fa-heart" aria-hidden="true"></i></a>} */}
      </div>

    </div>
    <div className="profile-textDiv">
    <div className="row">
      <div className="text-title col">
          <h4 >{property.houseCategory.toUpperCase()}</h4>
      </div>
      <div className="vierMoreButtomDiv col text-right">
        <a  type="button" class="btn-view">More...</a>
      </div>
      <div className="text-address ">
       <p >{property.address.substring(0,30).toUpperCase()}..</p>
      </div>
      </div>
      <div className="posted-property ">
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">{property.date}</a></span>
       </div>
    </div>
  </div>)}
  
</div>

}
export default NearByHouse;