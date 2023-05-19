import { useNavigate } from "react-router";
import SearchBar from "./SerchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux-config/UserSlice";
import $ from 'jquery';
import { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import Waves from "../../waves";
import Swal from "sweetalert2";
function Navbar( {search}) {
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
  
  
  const signinUser = () => {
    Swal.fire({
      title: "Who you are??",
      icon: "question",
      buttons: true,
      dangerMode: true,
      confirmButtonText:'Owner',
      cancelButtonText:'Tenant',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
  })
      .then(async (willDelete) => {
          if (willDelete.isConfirmed)
            navigate('/signin',{state:{status:true}});  
          else
            navigate('/signin',{state:{status:false}});
      });
  }
  
  const viewProfile = () => {
    if(currentUser?.role == "Owner")
      navigate("/viewProfile");
    else
      navigate("/viewTenantProfile");
  }
  return <header className="main-header" style={{marginBottom:"10vh"}}>
    <div className="container-fluid">
      <div className="navbardivBackgroundColor" >
        <nav className="navbar navbar-expand-lg main-nav px-0  container-fluid bgc">
          <div className="navbar-brand" >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPY36-ev8RAOnXC7MfOVMmpFHc6JkKFcJmzBARwa6GueWUY9rZRy8P9Wk-S8sIAp3uzps&usqp=CAU' style={{height:'100px'}}/>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar icon-bar-1" />
            <span className="icon-bar icon-bar-2" />
            <span className="icon-bar icon-bar-3" />
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ml-auto  f1 " style={{fontWeight:"700",opacity:"100%"}}>
              <li>
                <Link to='/' className=" active-first fs-5 font-weight-bold">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs" className="fs-5 font-weight-bold " style={{opacity:"400%",fontWeight : "600px"}}>About </Link>
              </li>
              <li>
                <a href="#service" className="fs-5 font-weight-bold">Services</a>
              </li>
              {currentUser?.role==='Tenant'?<></>:<li>
                <Link onClick={propertyPost} className="fs-5  font-weight-bold">Post Property </Link>
              </li>}
              <li>
                <a href="#contact" className="fs-5 font-weight-bold ">Contact</a>
              </li>
              <li className="userIconStyle">
                <div className='col-md-1'>
                  <div className='share ms-3'>
                      {!currentUser &&<div className="fab no " data-hover='SignIn' onClick={signinUser}></div>}
                      {currentUser && <div className="fab no " data-hover='SigOut' onClick={signout}></div>}
                      {/* <div className="fab no " data-hover='SignUp' onClick={signupUser}></div> */}
                      <div className="fab no " data-hover='Profile' onClick={viewProfile}></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbarHelpdiv">
          <SearchBar search={search} />
        </div>
      </div>
    </div>
    {/* /.container */}
  </header>
}

export default Navbar;