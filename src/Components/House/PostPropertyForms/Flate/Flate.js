import { useRef, useState } from "react";
import Navbar from "../../../Headers.js/Navbar/navbar";
import "./Flate.css";
import PropertyLocation from "../../PostProperty/PropertyLocation/propertyLocation";
function Flate(){

  let room = useRef("");
  let noOfBathoom = useRef("");
  let balconies = useRef("");
  let carpetArea = useRef("");
  let totalfloor = useRef(""); 
  let onFloor = useRef("");
  let [otherRoom, setOtherRoom] = useState([]);
  let [furnshing, setFurnshing] = useState("furnished");
  let [floor,setFloor] = useState([]);
  
  function bedroom(no){
   for( var i = 1 ; i<=4;i++){
    if(i == no){ 
      var obj =document.getElementById("bedroombtn"+no);
      obj.style.backgroundColor = "white";
      obj.style.color = "black";
    }else{
      var obj =document.getElementById("bedroombtn"+i);
      obj.style.backgroundColor = "#2775ea";
      obj.style.color = "white";
    }
   }
   room = no*1;
  }
  function bathroom(no){
    for( var i = 1 ; i<=4;i++){
     if(i == no){ 
       var obj =document.getElementById("bathroombtn"+no);
       obj.style.backgroundColor = "white";
       obj.style.color = "black";
     }else{
       var obj =document.getElementById("bathroombtn"+i);
       obj.style.backgroundColor = "#2775ea";
       obj.style.color = "white";
     }
    }
    noOfBathoom = no*1;
    // alert(noOfBathoom);
  }
  function balconiesFunction(no){
    for( var i = 1 ; i<=5;i++){
     if(i == no){ 
       var obj =document.getElementById("balconiesbtn"+no);
       obj.style.backgroundColor = "white";
       obj.style.color = "black";
     }else{
       var obj =document.getElementById("balconiesbtn"+i);
       obj.style.backgroundColor = "#2775ea";
       obj.style.color = "white";
     }
    }
    if(no==5)
     balconies = "3++";
    else
     balconies = no-1;

    //  console.log(balconies);
  }
  function carpetAreaFun(event){
    console.log(carpetArea.current.value);
  }
  const handleChange = (e) => {
    const { value, checked } = e.target;    
    if (checked) 
      otherRoom = [...otherRoom,value];
    else
      otherRoom = otherRoom.filter((e)=> e !== value);
    console.log(otherRoom);
  }
  const furnshingChange = (e)=>{
    alert(e.target.id);
    setFurnshing(e.target.id);
  }
  const noOffloor = (event)=>{
    alert("no ... "+event.target.value*1)
    for (let i = 1 ; i <= event.target.value*1; i++){
      console.log("---"+i)
    }
  }
  const submit = ()=>{
    console.log(room);
    console.log(noOfBathoom);
    console.log(balconies);
    console.log(carpetArea.current.value);
    console.log(otherRoom);
    console.log(furnshing);
    console.log(floor);
  }
    return <>

    <Navbar/>
    <div className="mtt"></div>
      <div className="row ">
        
        <div className="col-3 bg-c"></div>
        <div className="col-6 p-4 ">
          
            <h3 className="ml-2 mb-5">Tell us about your property</h3>
             <h5>Add Room Details</h5>
             <div className="row">
              <small>No. of Bedrooms</small>
                <div className="col-6">
                      <div className="row p-3">
                          
                        <div className="parent col">

                          <button id="bedroombtn1" onClick={()=>bedroom(1)} className="round-6">1</button>
                        </div>
                        <div className="parent col">
                          <button id="bedroombtn2" onClick={()=>bedroom(2)} className="round-6">2</button>
                        </div>
                        <div className="parent col">
                          <button id="bedroombtn3" onClick={()=>bedroom(3)} className="round-6">3</button>
                        </div>
                        <div className="parent col">
                          <button id="bedroombtn4" onClick={()=>bedroom(4)} className="round-6">4</button>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-6"></div>
                <p className="p-style">Add Other +</p>
             </div>
             <div className="row">
              <small>No. of Bathrooms</small>
                <div className="col-6">
                      <div className="row p-3">
                        <div className="parent col">

                          <button id="bathroombtn1" onClick={()=>bathroom(1)} className="round-6">1</button>
                        </div>
                        <div className="parent col">
                          <button id="bathroombtn2" onClick={()=>bathroom(2)} className="round-6">2</button>
                        </div>
                        <div className="parent col">
                          <button id="bathroombtn3" onClick={()=>bathroom(3)} className="round-6">3</button>
                        </div>
                        <div className="parent col">
                          <button id="bathroombtn4" onClick={()=>bathroom(4)} className="round-6">4</button>

                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-6"></div>
                <p className="p-style">Add Other +</p>
             </div>
             <div className="row">
              <small>Balconies</small>
                <div className="col-6">
                      <div className="row p-3">
                        <div className="parent col">

                          <button id="balconiesbtn1" onClick={()=>balconiesFunction(1)} className="round-6">0</button>
                        </div>
                        <div className="parent col">
                          <button id="balconiesbtn2" onClick={()=>balconiesFunction(2)} className="round-6">1</button>
                        </div>
                        <div className="parent col">
                          <button id="balconiesbtn3" onClick={()=>balconiesFunction(3)} className="round-6">2</button>
                        </div>
                        <div className="parent col">
                          <button id="balconiesbtn4" onClick={()=>balconiesFunction(4)} className="round-6">3</button>
                        </div>
                        <div className="col parent">
                          <button id="balconiesbtn5" onClick={()=>balconiesFunction(5)} className="cylender">More than 3</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-6"></div>
             </div>
             <h5 className="mt-4 mb-4">Add Area Details</h5>
             <div className="row">
               <div className="carpetArea ml-4 ">
                <div className="inputArea   ">
                  <input ref={carpetArea} type="text"  placeholder="Carpet Area"/>
                </div>
                <div className="carpetAreaDD ">

                <select onChange={carpetAreaFun} className="form-select selectStyle" id="sel1" name="sellist1">

                  <option>Meter</option>
                  <option>Sqr Meter</option>
                  <option>Acers</option>
                  <option>Biga</option>
                </select>
                </div>
               </div>
            </div>
            <h5 className="mt-4 mb-4">Other Rooms</h5>
            <div className="row d-flex justify-content-center">
              
                <div className="card">
                   <div className="card-body text-center">
                        <label className="check">

                          <input type="checkbox" name="otherroom" value="poojaRoom" onChange={handleChange}/>
                          <span>Pooja Room</span>
                        </label>
                        <label className="check">
                          <input type="checkbox" name="otherroom" value="studyRoom" onChange={handleChange}/>

                          <span>Study Room</span>
                        </label>

                        <label className="check">

                          <input type="checkbox" name="otherroom" value="serventRoom" onChange={handleChange}/>
                          <span>Servent Room</span>
                        </label>

                        <label className="check">

                          <input type="checkbox" name="otherroom" value="storeRoom" onChange={handleChange}/>
                          <span>Store Room</span>
                        </label>
                        </div>
                    </div>
               </div>
            <h5 className="mt-4 mb-4">Furnishing</h5>
            <div className="row">
              <div className="col-2">
                  <label className="check">

                    <input type="radio" id="furnished" name="Furnishing"  onChange={furnshingChange}/>
                    <span>Furnished</span>
                  </label>
              </div>
              <div className="col-3">
                <label className="check">

                  <input type="radio" id="semiFurnished" name="Furnishing"  onChange={furnshingChange}/>
                  <span>Semi-Furnished</span>
                </label>
              </div>
              <div className="col-3">
                <label className="check">

                  <input type="radio" id="unFurnished" name="Furnishing" onChange={furnshingChange}/>
                  <span>Un-Furnished</span>
                </label>
              </div>
            </div>
            <h5 className="mt-4 mb-4">Floor Details</h5>
            <div className="row">
              <div className="col-6  row flor-input">
                <div className="bg-border">
                 <small className="col-8">Total Floor</small>
                 <input onKeyUp={noOffloor} className="floor-input col-8" type="text"/>  
                 </div>
              </div>
              <div className="col-6  row ">

                <div className="bg-border ">
                 <small className="col-8"  >Property on floor</small>
                 <select className="form-select selectStyle w-100"  name="sellist1">
                  <option >Basement</option>
                  <option>Ground</option>
                  <option>Lower Ground</option>
                </select>
                 </div>
              </div>
            </div>
            <div className="submitBtnDiv">
              <button onClick={submit} className="submitbtn">
                Continue
              </button>
            </div>
        </div>
        <div className="col-3 bg-c"></div>
      </div>
    </>
}

export default Flate;