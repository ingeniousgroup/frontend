import { event } from "jquery";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchBar({search}){
  const navigate =  useNavigate();
    const nearBySearch = ()=>{
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        navigate("/nearByhouse",{state:{
          latitude,
          longitude
        }});
    });
    }
    const [category,setCategory] = useState("");

    const debounce = (func, wait) => {
      let timeout;
    
      // This is the function that is returned and will be executed many times
      // We spread (...args) to capture any number of parameters we want to pass
      return function executedFunction(...args) {
    
        // The callback function to be executed after 
        // the debounce time has elapsed
        const later = () => {
          // null timeout to indicate the debounce ended
          timeout = null;
          
          // Execute the callback
          func(...args);
        };
        // This will reset the waiting every function execution.
        // This is the step that prevents the function from
        // being executed because it will never reach the 
        // inside of the previous setTimeout  
        clearTimeout(timeout);
        
        // Restart the debounce waiting period.
        // setTimeout returns a truthy value (it differs in web vs Node)
        timeout = setTimeout(later, wait);
      };
    };
    
    var returnedFunction = debounce(function() {
      // All the taxing stuff you do
    }, 3000);

    const handleEvent=(event)=>{
      // handler(event);
      search(event.target.value, category);

    }
   
    const changeColor = (no)=>{
      for (var i = 1; i <= 5; i++) {
        if (i == no) {
          var obj = document.getElementById("cat" + no);
          obj.style.color = "#2775ea";
        } else {
          var obj = document.getElementById("cat" + i);
          obj.style.color = "gray";
        }
      }

    }
    const changeCategory = (category,no)=>{
      changeColor(no);
      // document.getElementById(category).style.color = "red";
      setCategory(category);
    }
    return <>
    <div className="searchBarSection m-auto">
              <div className="categriesInSearchBar">
                <div className="row ">
                   <div className="col-2 categriesInSearchBartextdiv ">
                       <span onClick={()=>changeCategory("house",1)} id="cat1" >Villa</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv" >
                       <span onClick={()=>changeCategory("flat",2)} id="cat2">Flate</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv" >
                       <span onClick={()=>changeCategory("office",3)} id="cat3">Office</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv" >
                       <span onClick={()=>changeCategory("formHouse",4)} id="cat4" >FarmHouse</span>
                   </div>
                   <div className="col-2 categriesInSearchBartextdiv" >
                       <span onClick={()=>changeCategory("others",5)} id="cat5">Other</span>
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
                         //  value={searchText}
                         onChange={handleEvent}/>
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