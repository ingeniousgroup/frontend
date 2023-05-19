import { useEffect, useState } from 'react';
import NavebarNext from '../Headers.js/Navbar/navbarNext';
import './categoryProperty.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../redux-config/WebApi/api';
import { useSelector } from 'react-redux';
function CategoryProperty(){
    const furn = useLocation();
    const navigate = useNavigate();
    var pro = useSelector((state) => state.wishList);
    const { currentUser } = useSelector(state => state.user);
    const [categoryByFurnishing , setCategoryByFurnishing] = useState([]);
    useEffect(()=>{
        furnishingProperty();
    },[]);

    const furnishingProperty = async()=>{
        let response = await axios.post(api.PROPERTY_BY_FURNISHING,{category:furn.state});
        if(response.data.status){
            setCategoryByFurnishing(response.data.propertyDetails);
            console.log(response.data.propertyDetails[0]);
        }
    }
    const viewDescription = (property) => {
        navigate("/viewDiscription", {
          state: {
            property: property
          }
        });
      }
      const checkIfLike = (id) =>{
        var w = pro.propertyList[0]?.find((item)=>item.propertyId?._id==id);
        console.log(w);
          if(w){
           console.log("-----1")
            return true;
           } 
          return false;
       }
       const addToCart = async (property,index) => {
        let response = await axios.post(api.ADD_TO_WISHLIST, { userId: currentUser._id, propertyId: property._id });
        if(response.data.status)
            document.getElementById("like"+index).style.color = "red";     
        else{
          document.getElementById("like"+index).style.color = "white";  
          await axios.post(api
            .REMOVE_FROM_WISHLIST, {
            userId: currentUser._id,
            propertyId: property._id,
          });
        }      
      }
    return <>
    <NavebarNext/>
    {categoryByFurnishing.length==0 && <h2>kya se kya ho gaya</h2>}
    <div className='row p-5'>
    {categoryByFurnishing?.map((data,index)=>data.property.map((property,proIndex)=><div className="col-md-3">
        <div className="profile-card-2" >
          <img
            src={api.PORT + property?.imagesUrlArray[1]}
            className="img img-responsive"
            alt="IMAGES NOT FOUND"
            onClick={() => viewDescription(property)}
          />
          <div className="profile-name fs-4 p-1"><i class="fa fa-inr fs-2" aria-hidden="true"></i><label style={{marginLeft:"-0.7vh"}}>{property.rent}</label></div>
          <div className="profile-username">Depositeper month</div>
          <div className="profile-icons">
            {(currentUser&&checkIfLike(property._id)) ? <a onClick={() => addToCart(property,index)}><i id={"like"+index} className="fa fa-heart like-icon" style={{color:'red'}} aria-hidden="true"></i></a> :(currentUser ? <a ><i id={"like"+index} className="fa fa-heart like-icon" aria-hidden="true"></i></a>: !currentUser && <a ><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> ) }
          </div>

        </div>
        <div className="profile-textDiv">

          <div className="row">
            <div className="text-title col">
              <h4 >{property.houseCategory.toUpperCase()}</h4>
            </div>
            <div className="vierMoreButtomDiv col text-right">
              <a onClick={() => viewDescription(property)} type="button" class="btn-view">More...</a>
            </div>
            <div className="text-address ">
              <p >{property.address.substring(0, 30).toUpperCase()}..</p>
            </div>
          </div>
          <div className="posted-property ">
            <span>PostedBy Owner</span><span className="paddingStyle"><a href="#" className='ms-4'>{property.date}</a></span>
          </div>
        </div>
    </div>))}
    </div>
    </>
}

export default CategoryProperty;