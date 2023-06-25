import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HouseDescription.css";
import { useLocation } from "react-router";
import axios from "../../../interceptor";
import api from "../../../redux-config/WebApi/api";
import { useSelector } from "react-redux";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";
import Swal from "sweetalert2";
import Footer from "../../Footer/Footer";
import { event } from "jquery";

function HouseDescription() {
  // var otp;
  var { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = useLocation();
  const [image, setImage] = useState(state.property.imagesUrlArray[0]);
  const [image2, setImage2] = useState(state.property.imagesUrlArray[1]);
  const [image3, setImage3] = useState(state.property.imagesUrlArray[2]);
  const [otp, setOtp] = useState("");
  var message;
  const [otpflage, setOtpflage] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    proDetails();
  }, []);
  const proDetails = () => {
    axios.post(api.PROPERTY_DETAILS, { propertyId: state.property._id }).then(result => {
      setPropertyDetails(result.data.propertyDetails);
      console.log(state.property);
      console.log(result.data.propertyDetails)
    }).catch(err => {
      console.log(err);
    })

  }

  const checkUser = async () => {
    Swal.fire({
      title: "Are you intrested for this property ??",
      text: "By performing this action Owner will get the request",
      icon: "question",
      buttons: true,
      dangerMode: true,
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    })
      .then(async (willDelete) => {
        if (willDelete.isConfirmed) {
          setTimeout(() => {
            Swal.fire({
              title: "Request sent successfully",
              icon: "success",
              buttons: false,
            });
          }, 300)
          let response = await axios.post(api.HOUSE_REQUEST, {
            userId: currentUser._id,
            propertyId: state.property._id,
            message: "I Like this property, and i want to rent your property....",
            status: true,
            ownerId: state.property.userId
          });

        } else {
          setTimeout(() => {
          }, 1000)

          setTimeout(() => {
            Swal.fire({
              title: "Request is safe",
              icon: 'error',
              buttons: false
            });
          }, 300);

        }
      });
  };

  const change = (event) => {
    let temp = document.getElementById("topImage").src;
    document.getElementById("topImage").src = event.target.src;
    event.target.src = temp;
  };
  const updated = () => {
    window.alert("this feature is under working....");
  }
  return (
    <>
      <NavebarNext />
      <div className="container mt-5">
        <div className="row  main-container">
          <div className="col-5 image-man-div">
            <div className="row mb-5 ">
              <div className="col-12 ">
                <div className="main-img-div">
                  <img onClick={change} src={api.PORT + state.property?.imagesUrlArray[1]} className="logimg" id="topImage" />
                </div>
              </div>
              <div className="row mt-3 offset-1" >
                <div className="col-5  my-img p-1" style={{ marginLeft: "-3.5vh" }}>
                  <img onClick={change} src={api.PORT + state.property?.imagesUrlArray[0]} className="logimg" />
                </div>
                <div className="col-5 ms-5 my-img p-1 ">
                  <img onClick={change} src={api.PORT + state.property?.imagesUrlArray[2]} className="logimg" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 discription-div">
            <div className="row">
              <div className="col-6 p-2">
                <h2><b>{state.property?.houseCategory.toUpperCase()} for rent</b></h2>
                {(!currentUser || currentUser.role == "Tenant")&& <h3><i class="fa fa-inr fs-2 text-primary" aria-hidden="true"></i>{state.property?.rent} /-</h3>}
              </div>
              {(!currentUser?.role == "Owner") && <div className="col-6">
                <div className="row p-4">
                  <div className="col-6 offset-1">
                    <a onClick={checkUser} style={{ cursor: 'pointer' }} className="btn-connect">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h6>
                        Connect Now
                        <i
                          className="fa fa-arrow-circle-o-right"
                          aria-hidden="true"
                        ></i>
                      </h6>
                    </a>
                  </div>
                </div>
              </div>}
              {(currentUser?.role == "Owner") && <div className="col-6">
                <div className="row p-4">
                <h3><i class="fa fa-inr fs-2 text-primary" aria-hidden="true"></i>{state.property?.rent} /-</h3>
                </div>
              </div>}
              {(currentUser?.role == "Tenant") && <div className="col-6">
                <div className="row p-4">
                  <div className="col-6 offset-1">
                    <a onClick={checkUser} className="btn-connect">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h6>
                        Connect Now
                        <i
                          className="fa fa-arrow-circle-o-right"
                          aria-hidden="true"
                        ></i>
                      </h6>
                    </a>
                  </div>
                </div>
              </div>}
            </div>

            <br />
            <hr />
            <div className="row mt-2">
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-tags fs-5 text-primary"></i>Configuration</h6>
                <span className="fs-5 ms-4">balcony : {propertyDetails.balconies} , <span className="">Floors : </span>{propertyDetails.floor}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-superpowers text-primary" aria-hidden="true"></i>Description</h6>
                <span className="config-data ms-4">
                {state.property.description}
                </span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-location-arrow text-primary fs-4"></i>Area</h6>
                <span className="config-data ms-4">{state.property.locationAddress}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-map-marker text-primary fs-4"></i>Address</h6>
                <span className="config-data ms-4">{state.property.address}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-bed text-primary fs-4"></i>Furnishing</h6>
                <span className="config-data ms-4">{propertyDetails.furnshing}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-calendar-o text-primary fs-4"></i>Posted On</h6>
                <span className="config-data ms-4">{state.property.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default HouseDescription;