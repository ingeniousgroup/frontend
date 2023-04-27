import { useNavigate } from "react-router";
import SearchBar from "./SerchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux-config/UserSlice";


function Navbar() {
  const navigate = useNavigate();
  const propertyPost = () => {
    navigate("/propertypost");
  }
  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const signout =()=>{
    dispatch(removeUser());
  }
  return <header className="main-header">
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
                
                <div class="btn-group dropleft" style={{marginTop:"-1vh"}}>
                  <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user-circle-o icon" aria-hidden="true" ></i>    
                  </button>
                  <div class="dropdown-menu drop1" style={{minWidth:"9vh"}}>
                    <ul>
                      {!currentUser && <Link to='/signin'>
                      <li style={{marginLeft:"-2vh",marginTop:"1vh"}}>
                        signin
                      </li>
                      </Link>}
                      {currentUser && <div onClick={signout}>
                      <li style={{marginLeft:"-3vh",marginTop:"1vh"}}>
                        signout
                      </li>
                      </div>}
                    </ul>
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