import { useSelector } from "react-redux";
import "./tenantProfile.css";
import Navbar from "../../Headers.js/Navbar/navbar";
import NavebarNext from "../../Headers.js/Navbar/navbarNext";
function TenantProfile(){
    var {propertyList} =useSelector((state)=>state.wishList);
    var {currentUser} = useSelector((state)=>state.user);
    console.log(currentUser);
    propertyList = (propertyList[0]);
    console.log(propertyList);

    // const disableFields = ()=>{
    // }
    var obj =  document.getElementById("pencil");
    if(obj){
    obj.addEventListener("click",()=>{
      alert("sdfg")
      document.getElementsByClassName("email").disabled = false
    });
  }
    return <>
    <NavebarNext/>
    <div style={{height:"80px"}}></div>
    <div className="container rounded ">
  <div className="row border">
    <div className="col-md-3 border-right profile">
      <div className="d-flex flex-column align-items-center text-center ">
        <img
          className="rounded-circle mt-5"
          width="150px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <span className="font-weight-bold">{currentUser.name}</span>
        <span className="text-black-50">{currentUser.email}</span>
        <div className="options">
        <span></span>
        </div>
      </div>
    </div>  
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue={currentUser.name}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              defaultValue={currentUser.name}
              placeholder="surname"
              disabled
            />
          </div>
        </div>
        
          <div className="col-md-12 mt-3">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              defaultValue={currentUser.contact}
              disabled
            />
          </div>
          <div className="col-md-12 mt-3">
            <label className="labels">Email ID</label>
            <input
              type="text"
              disabled
              className="form-control email"
              placeholder="enter email id"
              defaultValue={currentUser.email}
              
            />
          </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button m-2" type="button">
            Save Profile
          </button>
          <button className="btn btn-primary profile-button m-2" type="button">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-4 mt-5 ">
        <h4>Houses you Liked..</h4>
        
        <div className="fixDiv">
          {propertyList?.map((property)=><div  class="center mt-5 p-2"><div class="article-card">
            {console.log(property.propertyId)}
            <div className="row "
            >
                <div className="col-8">
                   <img  src={property.propertyId.imagesUrlArray[0]} alt="article-cover" />
                </div>
                <div className="col-4 text-center">
                    <span className="rent-span text-black p-1">{property.propertyId.rent}</span>
                    <div className="row">
                      <i className="fa fa-heart text-danger p-1  " aria-hidden="true"></i>
                      <i className="fa fa-arrow-circle-o-right p-1 " aria-hidden="true"></i>
                    </div>
                </div>
            </div>
          </div>
        </div>)}
        </div> 
    </div>
  </div>
</div>

    </>
}
export default TenantProfile;