
// import axios from "axios";
// import { useSelector } from "react-redux";
// import apiEndPoint from "../../../redux-config/WebApi/api";
// import { useNavigate } from "react-router";
// import { useEffect, useState } from "react";


// function Property({propertyList}){
//   const {currentUser} = useSelector(state=>state.user);
//   const navigate = useNavigate();
//   const [propertyList,setPropertyList] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading,setIsLoading]= useState(true);
//   // const [searchText,setSerachText] = useState("");
  
//   const viewDescription = (property)=>{
//     navigate("/viewDiscription",{state:{
//       property : property
//     }});
//   }

//   const signinUser = () => {
//     navigate("/signin");
//   }

//   const addToCart = async (property)=>{
//     alert(property._id);
//     let response = await axios.post(apiEndPoint.ADD_TO_WISHLIST,{userId:currentUser._id,propertyId:property._id});
//     if(response.data.status)
//       alert("Added To Cart");
//     else
//       alert("already Added In cart");  
//   }
 
//   const search = async (searchText)=>{
//     let response = await axios.post(apiEndPoint.SEARCH,{searchText})
//   } 
//   const loadProperty =async()=>{
//     try {
//       let response = await axios.get(apiEndPoint.PROPERTY_LIST);
//       if(response.data.status){
//         setPropertyList([...propertyList,...response.data.property]);
//         setIsLoading(false);
//       }
//     } catch (err) {
//       setError("Oops somthing went Wrong");
//     }
//   }
  
  
//   useEffect(()=>{
//     loadProperty();
//   },[]);

//   return <div className="container"> <div className="row" >
//     {!error&&propertyList.map((property,index)=><div key={index} className="col-md-3">
//     <div className="profile-card-2" onClick={()=>viewDescription(property)}>
//       <img
//         src={property.imagesUrlArray[0]}
//         className="img img-responsive"
//         alt="image nahi hai"
//       />
//       <div className="profile-name">{property.rent}</div>
//       <div className="profile-username">Deposite {property.rent} per month</div>
//       <div className="profile-icons">
//       {currentUser&&<a onClick={()=>addToCart(property)}><i className="fa fa-heart" aria-hidden="true"></i></a>}
//       {!currentUser&&<a onClick={signinUser}><i className="fa fa-heart" aria-hidden="true"></i></a>}
//       </div>

//     </div>
//     <div className="profile-textDiv">
//     <div className="row">
//       <div className="text-title col">
//           <h4 >{property.houseCategory.toUpperCase()}</h4>
//       </div>
//       <div className="vierMoreButtomDiv col text-right">
//         <a onClick={()=>viewDescription(property)} type="button" class="btn-view">More...</a>
//       </div>
//       <div className="text-address ">
//        <p >{property.address.substring(0,30).toUpperCase()}..</p>
//       </div>
//       </div>
//       <div className="posted-property ">
//        <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">{property.date}</a></span>
//        </div>
//     </div>
//   </div>)}

//  </div>
// </div>
// }
// export default Property;


import axios from "axios";
import { useSelector } from "react-redux";
import apiEndPoint from "../../../redux-config/WebApi/api";
import { useNavigate } from "react-router";
import { useState } from "react";


function Property({propertyList}){

  const {currentUser} = useSelector(state=>state.user);
  const navigate = useNavigate();
  // const [propertyList,setPropertyList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]= useState(true);
  // // const [searchText,setSerachText] = useState("");
  
  const viewDescription = (property)=>{
    navigate("/viewDiscription",{state:{
      property : property
    }});
  }

  const signinUser = () => {
    navigate("/signin");
  }

  const addToCart = async (property)=>{
    alert(property._id);
    let response = await axios.post(apiEndPoint.ADD_TO_WISHLIST,{userId:currentUser._id,propertyId:property._id});
    if(response.data.status)
      alert("Added To Cart");
    else
      alert("already Added In cart");  
  }
 
  // const search = async (searchText)=>{
  //   let response = await axios.post(apiEndPoint.SEARCH,{searchText})
  // } 
  // const loadProperty =async()=>{
  //   try {
  //     let response = await axios.get(apiEndPoint.PROPERTY_LIST);
  //     if(response.data.status){
  //       setPropertyList([...propertyList,...response.data.property]);
  //       setIsLoading(false);
  //     }
  //   } catch (err) {
  //     setError("Oops somthing went Wrong");
  //   }
  // }
  
  
  // useEffect(()=>{
  //   loadProperty();
  // },[]);

  return <div className="container"> <div className="row" >
    {!error&&propertyList.map((property,index)=><div key={index} className="col-md-3">
      {/* {console.log(propertyList)} */}
    <div className="profile-card-2" onClick={()=>viewDescription(property)}>
      <img
        src={property.imagesUrlArray[0]}
        className="img img-responsive"
        alt="image nahi hai"
      />
      <div className="profile-name">{property.rent}</div>
      <div className="profile-username">Deposite {property.rent} per month</div>
      <div className="profile-icons">
      {currentUser&&<a onClick={()=>addToCart(property)}><i className="fa fa-heart" aria-hidden="true"></i></a>}
      {!currentUser&&<a onClick={signinUser}><i className="fa fa-heart" aria-hidden="true"></i></a>}
      </div>

    </div>
    <div className="profile-textDiv">
    <div className="row">
      <div className="text-title col">
          <h4 >{property.houseCategory.toUpperCase()}</h4>
      </div>
      <div className="vierMoreButtomDiv col text-right">
        <a onClick={()=>viewDescription(property)} type="button" class="btn-view">More...</a>
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
</div>
}
export default Property;