import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HouseDescription.css";
import { useLocation } from "react-router";
import axios from "axios";
import api from "../../../redux-config/WebApi/api";
import { useSelector } from "react-redux";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";
import Swal from "sweetalert2";

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

  useEffect(()=>{
    console.log(state);
  },[])

  const checkUser = async () => {
    Swal.fire({
      title: "Are you sure to reject this request?",
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
                <h3><i class="fa fa-inr fs-2 text-primary" aria-hidden="true"></i>{state.property?.rent} /-</h3>
              </div>
              {(!currentUser?.role == "Owner") && <div className="col-6">
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
              {(currentUser?.role == "Owner") && <div className="col-6">
                <div className="row p-4">
                  <div className="col-6 offset-1">
                    <a className="btn-connect">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h6>
                        Update Property

                      </h6>
                    </a>
                  </div>
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
      {/* <div
        className="modal"
        id="sampleModalLg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="abc"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="abc">
                KirayeWala
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              />
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
                            className="form-control"
                            placeholder="Your Name *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="txtEmail"
                            className="form-control"
                            placeholder="Your Email *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="txtPhone"
                            className="form-control"
                            placeholder="Your Phone Number *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group mt-3">
                          <span className="btnContact" onClick={sendOtp}>
                            {" "}
                            Submit
                          </span>
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
                            onChange={(event) => (message = event.target.value)}
                            id="message"
                          />
                        </div>
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

                    <button onClick={verifyOtp}>Submit</button>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {/* <div>Owner Name :-  Mohit Rajput</div> */}
      {/* </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HouseDescription;
