import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../interceptor";
import { useLocation, useNavigate } from "react-router-dom";
import apiEndPoint from "../../redux-config/WebApi/api";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import NavebarNext from "../Headers.js/Navbar/navbarNext";
import Spinner from "../Spinner/Spinner";
function NearByHouse() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  var pro = useSelector((state) => state.wishList);
  const [propertyList, setPropertyList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const loadProperty = async () => {
    try {
       let response = await axios.post(apiEndPoint.NEAR_BY_HOUSE_LIST, {
        latitude: state.latitude,
        longitude: state.longitude,
      });
      if (response.data.status) {
        setIsLoading(false);
        setPropertyList(response.data.property);
      }
    } catch (err) {
      setError("Oops somthing went Wrong");
    }
  };

  const viewDescription = (property) => {
    navigate("/viewDiscription", {
      state: {
        property: property,
      },
    });
  };

  const checkIfLike = (id) => {
    var w = pro.propertyList[0]?.find((item) => item.propertyId._id == id);
    console.log(w);
    if (w) {
      return true;
    }
    return false;
  };
  const signinUser = () => {
    navigate("/signin");
  };

  const addToCart = async (property, index) => {
    let response = await axios.post(apiEndPoint.ADD_TO_WISHLIST, {
      userId: currentUser._id,
      propertyId: property._id,
    });
    if (response.data.status){
      document.getElementById("like" + index).style.color = "red";
    }
    else {
      document.getElementById("like" + index).style.color = "white";
      await axios.post(apiEndPoint.REMOVE_FROM_WISHLIST, {
        userId: currentUser._id,
        propertyId: property._id,
      });
    }
  };
  useEffect(() => {
    loadProperty();
  }, []);

  return (
    <>
     <NavebarNext />
      <div className="row">
        <div className="col-12 p-4">
          <h2>Recommended Properties</h2>
        </div>
        <div className="col-8 offset-2 mt-3">
          <div className="alert alert-primary alert-dismissible fade show ">
            <strong>Hello tenant ..!</strong>{" "}
            <span className="ml-5 ">
              {" "}
              This section will find you the nearest home. [ Near the 5 K.M.
              from where you are]
            </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
          </div>
        </div>
        {console.log(isLoading)}
        {isLoading ?<Spinner/> :
          propertyList.map((property, index) => (
            <div key={index} className="col-md-3">
              {/* onClick={()=>viewDescription(property)} */}
              <div className="profile-card-2">
                <img
                  src={apiEndPoint.PORT + property.imagesUrlArray[0]}
                  className="img img-responsive"
                  alt="IMAGES NOT FOUND"
                  onClick={() => viewDescription(property)}
                />
                <div className="profile-name">{property.rent}</div>
                <div className="profile-username">
                  Deposite {property.rent} per month
                </div>
                <div className="profile-icons">
                  {currentUser && checkIfLike(property._id) ? (
                    <a onClick={() => addToCart(property, index)}>
                      <i
                        id={"like" + index}
                        className="fa fa-heart like-icon"
                        style={{ color: "red" }}
                        aria-hidden="true"
                      ></i>
                    </a>
                  ) : currentUser ? (
                    <a onClick={() => addToCart(property, index)}>
                      <i
                        id={"like" + index}
                        className="fa fa-heart like-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  ) : (
                    !currentUser && (
                      <a onClick={signinUser}>
                        <i
                          className="fa fa-heart like-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="profile-textDiv">
                <div className="row">
                  <div className="text-title col">
                    <h4>{property.houseCategory.toUpperCase()}</h4>
                  </div>
                  <div className="vierMoreButtomDiv col text-right">
                    <a
                      onClick={() => viewDescription(property)}
                      type="button"
                      class="btn-view"
                    >
                      More...
                    </a>
                  </div>
                  <div className="text-address ">
                    <p>{property.address.substring(0, 30).toUpperCase()}..</p>
                  </div>
                </div>
                <div className="posted-property ">
                  <span>PostedBy Owner</span>
                  <span className="paddingStyle">
                    {" "}
                    <a href="#">{property.date}</a>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default NearByHouse;
