import SearchBar from "./SerchBar";

function Navbar (){
  return<header className="main-header">
         <div className="container-fluid">
          <div className="navbardivBackgroundColor">
          <nav className="navbar navbar-expand-lg main-nav px-0 ">
            <div className="navbar-brand" >
              <img src="images/logo.png" className="logoImg"/>
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
                  <a href="#home" className="active active-first">Home</a>
                </li>
                <li>
                  <a href="#about">About </a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <button className="postPropertyButton">
                    Post property
                  </button>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li className="userIconStyle">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </nav>
          <div className="navbarHelpdiv">
           <SearchBar/>
         </div>
          </div>
        </div>
        {/* /.container */}
      </header>
}

export default Navbar;