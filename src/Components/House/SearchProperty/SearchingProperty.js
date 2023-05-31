import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import apiEndPoint from "../../../redux-config/WebApi/api";
import {useNavigate} from "react-router";
import {useState} from "react";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";
import { setWishList } from "../../../redux-config/wishListSlice";
function SearchingProperty({ propertyList, search }) {
  
  const { currentUser } = useSelector((state) => state.user);
  var pro = useSelector((state) => state.wishList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const viewDescription = (property) => {
    navigate("/viewDiscription", {
      state: {
        property: property,
        propertyList: propertyList,
      },
    });
  };

  const checkIfLike = (id) => {
    var w = pro.propertyList[0]?.find((item) => item.propertyId?._id == id);
    if (w) return true;
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
    if (response.data.status) {
      document.getElementById("like" + index).style.color = "red";
      dispatch(setWishList(pro.propertyList[0].push(property)));
    } else {
      document.getElementById("like" + index).style.color = "white";
      let response = await axios.post(apiEndPoint.REMOVE_FROM_WISHLIST, {
        userId: currentUser._id,
        propertyId: property._id,
      });
      dispatch(setWishList(response.data.propertyList.wishListItems));
    }
  };

  return (
    <>
    <NavebarNext search={search} />
      <div className="container">
        <div className="mt-5"></div>
        <div className="row">
          {!error &&
            propertyList.map((property, index) => (
              <div key={index} className="col-md-3">
                <div className="profile-card-2">
                  <img
                    src={apiEndPoint.PORT + property?.imagesUrlArray[0]}
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
                        className="btn-view"
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
      </div>
    </>
  );
}
export default SearchingProperty;
