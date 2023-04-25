import { useState } from "react";
import Navbar from "../../../Headers.js/Navbar/navbar";
import "./Flate.css";
function Flate(){

  const [floor,setFloor] = useState();
    const noOffloor = (event)=>{
      setFloor(event.target.value);
    }
    return <>
    <Navbar/>
    <div className="mtt"></div>
      <div className="row ">
        <div className="col-3 bg-c"></div>
        <div className="col-6 p-4  ">
            <h3 className="ml-2 mb-5">Tell us about your property</h3>
             <h5>Add Room Details</h5>
             <div className="row">
              <small>No. of Bedrooms</small>
                <div className="col-6">
                      <div className="row p-3">
                          
                        <div class="parent col">
                          <button class="round-6">1</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">2</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">3</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">4</button>
                        </div>
                        <div class="col"></div>
                        <div class="col"></div>
                    </div>
                </div>
                <div className="col-6"></div>
                <p className="p-style">Add Other +</p>
             </div>
             <div className="row">
              <small>No. of Bathrooms</small>
                <div className="col-6">
                      <div className="row p-3">
                        <div class="parent col">
                          <button class="round-6">1</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">2</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">3</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">4</button>
                        </div>
                        <div class="col"></div>
                        <div class="col"></div>
                    </div>
                </div>
                <div className="col-6"></div>
                <p className="p-style">Add Other +</p>
             </div>
             <div className="row">
              <small>Balconies</small>
                <div className="col-6">
                      <div className="row p-3">
                        <div class="parent col">
                          <button class="round-6">1</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">2</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">3</button>
                        </div>
                        <div class="parent col">
                          <button class="round-6">4</button>
                        </div>
                        <div class="col parent">
                          <button className="cylender">more than 3</button>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                <div className="col-6"></div>
             </div>
             <h5 className="mt-4 mb-4">Add Area Details</h5>
             <div className="row">
               <div className="carpetArea ml-4 ">
                <div className="inputArea   ">
                  <input type="text"  placeholder="Carpet Area"/>
                </div>
                <div className="carpetAreaDD ">
                <select class="form-select selectStyle" id="sel1" name="sellist1">
                  <option>Meter</option>
                  <option>Sqr Meter</option>
                  <option>Acers</option>
                  <option>Biga</option>
                </select>
                </div>
               </div>
            </div>
            <h5 className="mt-4 mb-4">Other Rooms</h5>
            <div class="row d-flex justify-content-center">
              
                <div class="card">
                   <div class="card-body text-center">
                        <label class="check">
                          <input type="checkbox"/>
                          <span>Pooja Room</span>
                        </label>
                        <label class="check">
                          <input type="checkbox"/>
                          <span>Study Room</span>
                        </label>

                        <label class="check">
                          <input type="checkbox"/>
                          <span>Servent Room</span>
                        </label>

                        <label class="check">
                          <input type="checkbox"/>
                          <span>Store Room</span>
                        </label>
                        </div>
                    </div>
            </div>
            <h5 className="mt-4 mb-4">Furnishing</h5>
            <div className="row">
              <div className="col-2">
                  <label class="check">
                    <input type="radio" id="furnished" name="Furnishing"/>
                    <span>Furnished</span>
                  </label>
              </div>
              <div className="col-3">
                <label class="check">
                  <input type="radio" id="semiFurnished" name="Furnishing" />
                  <span>Semi-Furnished</span>
                </label>
              </div>
              <div className="col-3">
                <label class="check">
                  <input type="radio" id="unFurnished" name="Furnishing"/>
                  <span>Un-Furnished</span>
                </label>
              </div>
            </div>
            <h5 className="mt-4 mb-4">Floor Details</h5>
            <div className="row">
              <div className="col-6  row flor-input">
                <div className="bg-border">
                 <small className="col-8">Total Floor</small>
                 <input onBlur={noOffloor} className="floor-input col-8" type="text"/>  
                 </div>
              </div>
              <div className="col-6  row ">
                <div className="bg-border">
                 <small className="col-8">Property on floor</small>
                 <select class="form-select selectStyle" id="sel1" name="sellist1">
                  <option>Basement</option>
                  <option>Ground</option>
                  <option>Lower Ground</option>
                  {}
                </select>
                 </div>
              </div>
            </div>
        </div>
        <div className="col-3 bg-c"></div>
      </div>
    </>
}

export default Flate;