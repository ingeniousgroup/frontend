import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HouseDescription.css";
import { useLocation } from "react-router";
import axios from "axios";
import api from "../../../redux-config/WebApi/api";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";

function HouseDescription() {
  var { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [image, setImage] = useState(state.property.imagesUrlArray[0]);
  const [image2, setImage2] = useState(state.property.imagesUrlArray[1]);
  const [image3, setImage3] = useState(state.property.imagesUrlArray[2]);
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [otpflage, setOtpflage] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
      axios.post(api.PROPERTY_DETAILS,{propertyId:state.property._id}).then((result)=>{
        setPropertyDetails(result.data.propertyDetails);
      }).catch((err)=>{
       console.log(err)
      })
  }, []);

  const sendOtp = async () => {
    try {
      var o = generateOTP();
      setOtpflage(true);
      setOtp(o);
      console.log(message);
      var response = await axios.post(api.SEND_OTP,{email:currentUser.email,otp:o});
      if(response.data.status){
        Swal.fire({
          icon: 'success',
          timer:2500,
          title: 'Otp Sent to your Email ',
          confirmButtonColor: '#0078DB',
          showConfirmButton:false,
          timerProgressBar:true,
          position:'top',
          toast:true,
        });
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(otp + "-----2");
  const checkUser = () => {
    if (!currentUser) navigate("/signin");
    else {
      var modal = document.querySelector(".modal");
      modal.style.display = "block";
    }
  };

  const close =()=>{
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  const back = () => {
    setOtpflage(!otpflage);
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
        message: message,
        status: true,
        ownerId:state.property.userId
      });
      if (response.data.status){
        Swal.fire({
          icon: 'success',
          timer:2500,
          title: 'Request Send Successfully ',
          confirmButtonColor: '#3085d6',
          showConfirmButton:false,
          timerProgressBar:true,
          position:'top',
          toast:true,
        });
        navigate("/");
       }
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
    <NavebarNext/>
      <div className="container mt-5">
        <div className="row  main-container">
          <div className="col-5 image-man-div">
            <div className="row mb-5 ">
              <div className="col-12 ">
                <div className="main-img-div">
                  <img onClick={change} src={api.PORT+ state.property?.imagesUrlArray[0]} className="logimg" id="topImage"/>
                </div>
              </div>
              <div className="row mt-3 offset-1" >
                <div className="col-5  my-img p-1" style={{marginLeft:"-3.5vh"}}>
                  <img onClick={change} src={api.PORT+state.property?.imagesUrlArray[1]} className="logimg" />
                </div>
                <div className="col-5 ms-5 my-img p-1 ">
                  <img onClick={change} src={api.PORT+state.property?.imagesUrlArray[2]} className="logimg" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 discription-div">
            <div className="row">
              <div className="col-6">
                <h1>House for rent</h1>
                <span className="house-rent">{state.property?.rent}</span>
                <small>Rent</small>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-8 offset-2 ">
                    <div className="row ">
                      <div className="col-10 offset-1 req-con ">
                        <div className="col-12 text-left req-d2 mt-1">
                          {/* <img src="images/add-friend.png" width={40} height={40}></img> */}
                          <span className="ml-3 p-4">Mohit Rajput</span>
                          <div className="wrap mt-1 mb-1">
                            <button onClick={checkUser} class="button-req">
                              Connect Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <hr /> */}
            <div className="row mt-2">
              <div className="col-6 mt-4">
                <h6 className="config">Configuration</h6>
                <span className="config-data">{propertyDetails.balconies} balconies, {propertyDetails.noOfBathoom} bathrooms</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config">Rent</h6>
                <span className="config-data">{state.property.rent}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config">Area</h6>
                <span className="config-data">{propertyDetails.carpetArea}  </span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config">Address</h6>
                <span className="config-data">{state.property.address}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config">Furnishing</h6>
                <span className="config-data">{propertyDetails.furnshing}</span>
              </div>
              <div className="col-6 mt-4">
                <h6 className="config">Posted By on date</h6>
                <span className="config-data">{state.property.date}</span>
              </div>
              <div className="col-12 mt-4">
                <h6 className="config">Description</h6>
                <span className="config-data">
                  This is the location best for family you have to call once
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id="sampleModalLg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="abc"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              
              <h5 className="modal-title" id="abc">
                KirayeWala
              </h5>
              <div className=" close" onClick={close}>
                <i class="fa fa-times ml-2" aria-hidden="true"  data-dismiss="modal"
                aria-label="Close"></i>
              </div>
            </div>
            <div className="modal-body">
              {!otpflage && (
                <div className="container contact-form">
                  <form method="post">
                    <h3>Sent enquiry to Owner</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="txtName"
                            className="form-control input-req"
                            placeholder="Your Name *"
                            defaultValue={currentUser?.name}
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="txtEmail"
                            className="form-control input-req"
                            placeholder="Your Email *"
                            defaultValue={currentUser?.email}
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="txtPhone"
                            className="form-control input-req"
                            placeholder="Your Phone Number *"
                            defaultValue={currentUser?.contact}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <textarea
                            name="txtMsg"
                            className="form-control"
                            placeholder="Your Message *"
                            style={{ width: "100%", height: 150 }}
                            defaultValue={""}
                            onChange={(event) => (setMessage(event.target.value))}
                            id="message"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label className="ml-1 mt-2">House for ?</label>
                        <div class="customCheckBoxHolder mt-2">
                          <input
                            class="customCheckBoxInput"
                            id="cCB1"
                            type="checkbox"
                          />
                          <label class="customCheckBoxWrapper" for="cCB1">
                            <div class="customCheckBox">
                              <div class="inner">Family</div>
                            </div>
                          </label>

                          <input
                            class="customCheckBoxInput"
                            id="cCB2"
                            type="checkbox"
                          />
                          <label class="customCheckBoxWrapper" for="cCB2">
                            <div class="customCheckBox">
                              <div class="inner">Single</div>
                            </div>
                          </label>

                          <input
                            class="customCheckBoxInput"
                            id="cCB3"
                            type="checkbox"
                          />
                          <label class="customCheckBoxWrapper" for="cCB3">
                            <div class="customCheckBox">
                              <div class="inner">Batchlors</div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="form-group mt-4 ">
                        <span className="button-34 " onClick={sendOtp}>
                          Submit
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {otpflage && (
                <div className="d-flex justify-content-center align-items-center container">
                  <div className="card py-5 px-3">
                    <h5 className="m-0">Mobile phone verification</h5>
                    <span className="mobile-text">
                      Enter the code we just send on your Email
                      <b className="text-danger">{currentUser?.email}</b>
                    </span>
                    <div className="d-flex flex-row mt-5">
                      <input type="text" className="form-control" id="1" />
                      <input type="text" className="form-control" id="2" />
                      <input type="text" className="form-control" id="3" />
                      <input type="text" className="form-control" id="4" />
                    </div>
                    <div className="text-center mt-5">
                      <span className="d-block mobile-text">
                        Don't receive the code?
                      </span>
                      <span className="font-weight-bold text-danger cursor">
                        Resend
                      </span>
                    </div>
                    <br />

                    <button className="button-34 w-75 ml-5" onClick={verifyOtp}>
                      Submit
                    </button>
                    <br />
                  </div>
                </div>
              )}
              {otpflage && (
                <div onClick={back} className="ml-5 back">
                  <i class="fa fa-backward" aria-hidden="true"></i>{" "}
                </div>
              )}
              {!otpflage && (
                <div onClick={back} className="back text-right mr-5">
                  <i class="fa fa-forward" aria-hidden="true"></i>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HouseDescription;
