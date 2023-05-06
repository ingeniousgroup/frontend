import { useNavigate } from "react-router";
import SearchBar from "./SerchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux-config/UserSlice";
import $ from 'jquery';
import { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    $(".share").on("click", function (e) {
      $(".fab").removeClass("no");
      if (e.target != this) return;
      $(".share, .fab").toggleClass("active");
    });
  }, []);
  const navigate = useNavigate();
  const propertyPost = () => {
    navigate("/propertypost");
  }
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const signout = () => {
    dispatch(removeUser());
    window.location.reload();
  }
  
  const signupUser = () => {
    navigate("/signup")
  }
  
  const signinUser = () => {
    navigate("/signin")
  }
  
  const viewProfile = () => {
    navigate("/viewProfile");
  }
  // const IconChange = ()=>{
  //   let element = document.getElementsByClassName("share");
  //   console.log(element)
  //   var reveal = $('.share');
  //   reveal.css('margin', '10px');
  //   var resulte = window.getComputedStyle(reveal[0], null).getPropertyValue("background-image");
  //   if(imageUrl != resulte)
  //     imageUrl = '../images/logo.png';



  // }
  // $(function() {
  //   $('.share').click(function() {
  //     $(this).css('background-image', 'url('+imageUrl+')');
  //   });
  // })

  return <header className="main-header" style={{marginBottom:"10vh"}}>
    <div className="container-fluid">
      <div className="navbardivBackgroundColor">
        <nav className="navbar navbar-expand-lg main-nav px-0 ">
          <div className="navbar-brand" >
            <img src="images/logo.png" className="logoImg" />
            {/* <span> Kirayewala</span> */}
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar icon-bar-1" />
            <span className="icon-bar icon-bar-2" />
            <span className="icon-bar icon-bar-3" />
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ml-auto  f1">
              <li>
                <Link to='/' className=" active-first">Home</Link>
              </li>
              <li>
                <a href="#about">About </a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <button className="postPropertyButton" onClick={propertyPost}>
                  Post property

                </button>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="userIconStyle">

                {/* <div class="btn-group dropleft" style={{ marginTop: "-1vh" }}>
                  <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user-circle-o icon" aria-hidden="true" ></i>
                  </button>
                  <div class="dropdown-menu drop1" style={{ minWidth: "9vh" }}>
                    <ul>
                      {!currentUser && <Link to='/signin'>
                        <li style={{ marginLeft: "-2vh", marginTop: "1vh" }}>
                          signin
                        </li>
                      </Link>}
                      {currentUser && <div onClick={signout}>
                        <li style={{ marginLeft: "-3vh", marginTop: "1vh", cursor: "pointer" }}>
                          signout
                        </li>
                      </div>}
                    </ul>
                  </div>
                </div> */}
                <div className='col-md-1'>
                  <div className='share ms-3'>
                      {!currentUser &&<div class="fab no " data-hover='SignIn' onClick={signinUser}></div>}
                      {currentUser && <div class="fab no " data-hover='SigOut' onClick={signout}></div>}
                      {/* <div class="fab no " data-hover='SignUp' onClick={signupUser}></div> */}
                      <div class="fab no " data-hover='Profile' onClick={viewProfile}></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbarHelpdiv">
          <SearchBar />
        </div>
      </div>
    </div>
    {/* /.container */}
  </header>
}

export default Navbar;