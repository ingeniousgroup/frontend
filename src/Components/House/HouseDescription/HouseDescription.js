import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HouseDescription.css";
import { useLocation } from "react-router";
import axios from "axios";
import api from "../../../redux-config/WebApi/api";
import { useSelector } from "react-redux";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";

function HouseDescription() {
  // var otp;
  var { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [image, setImage] = useState(state.property.imagesUrlArray[0]);
  const [image2, setImage2] = useState(state.property.imagesUrlArray[1]);
  const [image3, setImage3] = useState(state.property.imagesUrlArray[2]);
  const [otp, setOtp] = useState("");
  var message;
  const [otpflage, setOtpflage] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    if (state == {}) {
      // let response = axios.post(api);
    }
  }, []);

  const sendOtp = async () => {
    try {
      var o = generateOTP();
      setOtpflage(true);
      setOtp(o);
      console.log(otp + " -----1");
      // var response = await axios.post(api.SEND_OTP,{email:currentUser.email,otp});
      // if(response.data.status)
      // alert("otp send successfully");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(otp + "-----2");
  const checkUser = () => {
    window.alert('Connect clicked...');
    if (!currentUser) navigate("/signin");
    else {
      var modal = document.querySelector(".modal");
      modal.style.display = "block";
    }
  };

  const verifyOtp = async () => {
    var o1 = document.getElementById("1").value;
    var o2 = document.getElementById("2").value;
    var o3 = document.getElementById("3").value;
    var o4 = document.getElementById("4").value;
    var o = o1 + o2 + o3 + o4;
    if (true) {
      window.alert("true me aa gaye")
      // let msg = document.getElementById("message").value;
      let response = await axios.post(api.HOUSE_REQUEST, {
        userId: currentUser._id,
        propertyId: state.property._id,
        message: "messsssssssageeeee",
        status: true,
        ownerId: state.property.userId
      });
      console.log(response);
      if (response.data.status)
        alert("Request Send Successfully...");
      navigate("/");
    }
  };
  function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  const change = (event) => {
    let temp = document.getElementById("topImage").src;
    document.getElementById("topImage").src = event.target.src;
    event.target.src = temp;
  };
  return (
    <>
      <NavebarNext />
      <div className="container mt-5">
        <div className="row  main-container">
          <div className="col-5 image-man-div">
            <div className="row mb-5 ">
              <div className="col-12 ">
                <div className="main-img-div">
                  <img onClick={change} src={api.PORT + state.property?.imagesUrlArray[0]} className="logimg" id="topImage" />
                </div>
              </div>
              <div className="row mt-3 offset-1" >
                <div className="col-5  my-img p-1" style={{ marginLeft: "-3.5vh" }}>
                  <img style={{cursor:'pointer'}} onClick={change} src={api.PORT + state.property?.imagesUrlArray[1]} className="logimg" />
                </div>
                <div className="col-5 ms-5 my-img p-1 ">
                  <img style={{cursor:'pointer'}} onClick={change} src={api.PORT + state.property?.imagesUrlArray[2]} className="logimg" />
                </div>
                {/* <div className='col-4 my-img p-1'>
                         <img onClick={change} src={image3} className="logimg" />      
                         </div> */}
              </div>
            </div>
          </div>

          <div className="col-7 discription-div">
            <div className="row">
              <div className="col-6 p-2">
                <h2><b>House for rent</b></h2>
                <h3><i class="fa fa-inr fs-2 text-primary" aria-hidden="true"></i>{state.property?.rent} /-</h3>
              </div>
              <div className="col-6">
                <div className="row p-4">
                  <div className="col-6 offset-1">
                    <a onClick={checkUser} style={{cursor :'pointer'}} className="btn-connect">
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
              </div>
            </div>

            <br />
            <hr />
            <div className="row mt-2">
              <div className="col-6 mt-4">
              <h6 className="config fs-4"><i class="fa fa-tags fs-5 text-primary"></i>Configuration</h6>
                <span className="fs-5 ms-4">2 bedroom , 2 bathrooms</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-superpowers text-primary" aria-hidden="true"></i>Description</h6>
                <span className="config-data ms-4">
                  Amazing House .....
                </span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-location-arrow text-primary fs-4"></i>Area</h6>
                <span className="config-data ms-4">Indore</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-map-marker text-primary fs-4"></i>Address</h6>
                <span className="config-data ms-4">{state.property.address}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-bed text-primary fs-4"></i>Furnishing</h6>
                <span className="config-data ms-4">Semi Furnished</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config fs-4"><i class="fa fa-calendar-o text-primary fs-4"></i>Posted On</h6>
                <span className="config-data ms-4">{state.property.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HouseDescription;
