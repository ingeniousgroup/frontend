import axios from "../../../interceptor";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ search }) {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [placeholder, setPlacholder] = useState("");
  const [text, setText] = useState("");
  const nearBySearch = () => {
    navigate("/nearByhouse", {
      state: {
        latitude,
        longitude,
      },
    });
  };
  const [category, setCategory] = useState("");
  const handleEvent = (event) => {
    setText(event.target.value);
    // search(event.target.value, category);
  };

  const changeColor = (no) => {
    for (var i = 1; i <= 5; i++) {
      if (category == "")
        document.getElementById("cat" + i).style.color = "gray";

      if (i == no) document.getElementById("cat" + no).style.color = "#2775ea";
      else document.getElementById("cat" + i).style.color = "gray";
    }
  };
  const changeCategory = (category, no) => {
    changeColor(no);
    // document.getElementById(category).style.color = "red";
    setCategory(category);
  };

  const dynamicPlaceholder = () => {
    let arr = [
      "Search Indore..",
      "Select Category",
      "Search 5000",
      "Shop",
      "Farmhouse",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i == 4) i = 0;
      setPlacholder(arr[i]);
    }, 2000);
  };

  const searching = () => {
    search(text, category);
    navigate("/searching");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      let response = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json?q=" +
          position.coords.latitude +
          "+" +
          position.coords.longitude +
          "&key=87f70e732bbd44d984f351fc57d3e4cc"
      );
      console.log(response);
      let arr = response.data.results[0].formatted.split(",");
      console.log(arr.length);
      let str = arr[arr.length - 3].trim();
      console.log(str);
      let i = 0;
      for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") break;
      }
      str = str.slice(0, i);
      setCity(str);
    });
    dynamicPlaceholder();
  }, []);

  return (
    <>
      <div className="searchBarSection m-auto">
        <div className="categriesInSearchBar">
          <div className="row ">
            <div className="col-2 categriesInSearchBartextdiv ">
              <span onClick={() => changeCategory("house", 1)} id="cat1">
                Villa
              </span>
            </div>
            <div className="col-2 categriesInSearchBartextdiv">
              <span onClick={() => changeCategory("flat", 2)} id="cat2">
                Flate
              </span>
            </div>
            <div className="col-2 categriesInSearchBartextdiv">
              <span onClick={() => changeCategory("office", 3)} id="cat3">
                Office
              </span>
            </div>
            <div className="col-2 categriesInSearchBartextdiv">
              <span onClick={() => changeCategory("formHouse", 4)} id="cat4">
                FarmHouse
              </span>
            </div>
            <div className="col-2 categriesInSearchBartextdiv">
              <span onClick={() => changeCategory("others", 5)} id="cat5">
                Other
              </span>
            </div>
          </div>
        </div>
        <div className="searchBar">
          <div className="row ">
            <div className="col-2">
              <center>
                <h5 className="mt-3 ml-1 text-primary">
                  {city}
                  {"  "}
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </h5>
              </center>
            </div>
            <div className="col-7 searchBarDiv">
              <div className="row">
                <div className="col-2  serchIconStyle">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="col-10 ">
                  {category && (
                    <button
                      onClick={() => setCategory("")}
                      className="categoryButton"
                    >
                      {category}
                      <span>
                        <i
                          class="fa fa-times text-dark ml-2"
                          aria-hidden="true"
                        ></i>{" "}
                      </span>
                    </button>
                  )}
                  <input
                    className="searchInputStyle"
                    placeholder={placeholder}
                    // value={searchText}
                    onChange={handleEvent}
                  />
                </div>
              </div>
            </div>
            <div className="col-1 serchBarImgDiv ">
              <span onClick={nearBySearch}>
                {" "}
                <img className="serchBarImg" src="images/gpsImage.png" />
              </span>
            </div>
            <div className="col-2 searchBarButton">
              <button onClick={searching} className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
