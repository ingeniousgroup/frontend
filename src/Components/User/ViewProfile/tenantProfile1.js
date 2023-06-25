import { useDispatch, useSelector } from "react-redux";
import "./tenantProfile1.css";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";
import { useEffect, useState } from "react";
import api from "../../../redux-config/WebApi/api";
import axios from "../../../interceptor";
import { useNavigate } from "react-router-dom";
import RequestList from "./RequestList";
import { removeUser } from "../../../redux-config/UserSlice";

function TenantProfile1() {
  var { propertyList } = useSelector((state) => state.wishList);
  var { currentUser } = useSelector((state) => state.user);
  const [behave, setBehave] = useState("profile");
  propertyList = propertyList[0];
  const [propertyItem, setPropertyItem] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setPropertyItem(propertyList);
  }, []);

  const viewDescription = (property) => {
    // alert(property);
    setTimeout(() => {
      navigate("/viewDiscription", {
        state: {
          property: property,
        },
      });
    }, 300);
  };
  const tenantFunctions = (b) => {
    setBehave(b);
  };

  const remove = async (id) => {
    let p = propertyItem.filter((item) => !(item.propertyId._id == id));
    let response = await axios.post(api.REMOVE_FROM_WISHLIST, {
      userId: currentUser._id,
      propertyId: id,
    });
    if (response.data.status) {
      setPropertyItem(p);
    }
  };

  const signout = () => {
    dispatch(removeUser());
    window.location.reload();
  }
  return (
    <>
      <NavebarNext />
      {/* <div className=""></div> */}
      <aside>
        <p> Menu </p>
        <a href="javascript:void(0)" onClick={() => tenantFunctions("profile")}>
          <i className="fa fa-user-o" aria-hidden="true" />
          My Profile
        </a>
        <a
          href="javascript:void(0)"
          onClick={() => tenantFunctions("wishList")}
        >
          <i className="fa fa-star-o" aria-hidden="true" />
          Shorted List
        </a>
        <a href="javascript:void(0)" onClick={() => tenantFunctions("request")}>
          <i className="fa fa-laptop" aria-hidden="true" />
          Request
        </a>

        <a
          href="javascript:void(0)"
          onClick={signout}
        >
          <i className="fa fa-trash-o" aria-hidden="true" />
          Logout
        </a>
      </aside>
      <div className="container container-div">
        {behave == "profile" && (
          <div className="row">
            <div className="col-4 offset-4 mt-4">
              <h1 className="profile-h1">Profile</h1>
            </div>
            <div className="col-6 offset-3 profile-div ">
              <div className="row">
                <div className="col-10">
                  <div className="row">
                    <div className="col-4 text-center profile-img-div  ">
                      <img
                        className="profile-img"
                        src="images/profile.webp "
                      ></img>
                    </div>
                    <div className="col-8  ">
                      <h6 className="text-muted">Name</h6>
                      <h5 id="h5">{currentUser?.name}</h5>
                      <hr />
                      <h6 className="text-muted ">Contact</h6>
                      <h5 id="h5">{currentUser?.contact}</h5>
                      <hr />
                    </div>
                    <div className="col-12 ml-1">
                      <h6 className="text-muted">Email</h6>
                      <h5 id="h5">{currentUser?.email}</h5>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-2 side-dsn"></div>
              </div>
            </div>
          </div>
        )}
        {behave == "wishList" && (
          <div className="  row">
            <div className="col-4 offset-4 mt-4">
              <h1 className="profile-h1">WishList</h1>
            </div>
            <div className="col-12">
              <div className="row mt-5 ml-5">
                {propertyItem?.map((property, index) => (
                  <div key={index} className="col-4">
                    <i
                      class="fa fa-times cross-icon"
                      onClick={() => remove(property.propertyId._id)}
                      aria-hidden="true"
                    ></i>
                    <div
                      class="card-wishList"
                      onClick={() => viewDescription(property.propertyId)}
                    >
                      <div class="image">
                        {/* <span class="text">This is a chair.</span> */}
                        <img
                          src={api.PORT + property.propertyId.imagesUrlArray[0]}
                          alt="article-cover"
                        />
                      </div>
                      <div>
                        <span class="title">{property.propertyId.address}</span>
                        <span class="price">₹{property.propertyId.rent}</span>
                        <span className="posted">
                          {property.propertyId.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {behave == "request" && (
          <RequestList/>
        )}
      </div>
    </>
  );
}
export default TenantProfile1;
