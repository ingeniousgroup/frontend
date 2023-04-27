function SearchBar(){
    return <>
    
    <div className="searchBarSection m-auto">
              <div className="categriesInSearchBar">
                <div className="row ">
                   <div className="col-2 categriesInSearchBartextdiv ">
                       <span>House</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span>Flate</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span>Office</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span>Shop</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span>Apartment</span>
                   </div>
                </div>
              </div>
              <div className="searchBar">
                <div className="row ">
                   <div className="col-2">
                   <div className="dropdown">
                      <span className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                        <span>Top Cities</span>
                      </span>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Australia</a></li>
                        <li><a className="dropdown-item" href="#">India</a></li>
                        <li><a className="dropdown-item" href="#">United States</a></li>
                      </ul>
                    </div>
             
                   </div>
                   <div className="col-7 searchBarDiv">
                    <div className="row">
                      <div className="col-2  serchIconStyle">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </div>
                      <div className="col-10 ">
                        <input className="searchInputStyle" placeholder="Serch Anything"/>
                      </div>
                    </div>
                   </div>
                   <div className="col-1 serchBarImgDiv ">
                      <img className="serchBarImg" src="images/gpsImage.png"/>
                   </div>
                  
                   <div className="col-2 searchBarButton">
                     <button className="btn btn-primary">Search</button>
                   </div>
                </div>
              </div>
          </div>
          </>
}

export default SearchBar;