import { event } from "jquery";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchBar({search}){
  // alert(search);
  const navigate =  useNavigate();
    const nearBySearch = ()=>{
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // dispatch(setLocation({latitude,longitude}));
        navigate("/nearByhouse",{state:{
          latitude,
          longitude
        }});
    });
    }
    const [searchText, setSearchText] = useState("");
    const [category,setCategory] = useState("");
    const handleEvent=(event)=>{
      setSearchText(event.target.value);
      search(searchText);
    }
    
    const changeCategory = (category)=>{
      // alert(category)
       setCategory(category);
    }
    return <>
    <div className="searchBarSection m-auto">
              <div className="categriesInSearchBar">
                <div className="row ">
                   <div className="col-2 categriesInSearchBartextdiv ">
                       <span onClick={()=>changeCategory("house")} >House</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span onClick={()=>changeCategory("flate")}>Flate</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span onClick={()=>changeCategory("office")}>Office</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span onClick={()=>changeCategory("shop")} >Shop</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv">
                       <span onClick={()=>changeCategory("apartment")}>Apartment</span>
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
                        <input  className="searchInputStyle"  
                         placeholder="Search property"        
                         value={searchText}
                         onChange={(event)=>handleEvent(event)}/>
                      </div>
                    </div>
                   </div>
                   <div className="col-1 serchBarImgDiv ">
                     <span onClick={nearBySearch}> <img className="serchBarImg" src="images/gpsImage.png"/></span>
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