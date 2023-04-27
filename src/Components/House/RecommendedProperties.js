import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apiEndPoint from "../../redux-config/WebApi/api";

function RecommendedProperties(){
  const {propertyList,isLoding,error} = useSelector((state)=>state.property);
  console.log(propertyList);
  
   return <div className="row">
    <div className="col-12 p-4">
        <h1>Recommended Properties</h1>
    </div>
  <div className="col-md-3">
    <div className="profile-card-2">
      <img
        src="images/2.jpeg"
        className="img img-responsive"
      />
      <div className="profile-name">12000\-</div>
      <div className="profile-username">Deposite 12000 per month</div>
      <div className="profile-icons">
      <a href="#">
         <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

    </div>
    <div className="profile-textDiv">
       <h3 className="text-title">2BHK Independent House</h3>
       <p className="text-address">Scome no 114 vijay nagar Indore</p>
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">   2 days Ago</a></span>
    </div>
  </div>
  <div className="col-md-3">
    <div className="profile-card-2">
      <img
        src="images/1.jpg"
        className="img img-responsive"
      />
      <div className="profile-name">12000\-</div>
      <div className="profile-username">Deposite 12000 per month</div>
      <div className="profile-icons">
      <a href="#">
         <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

    </div>
    <div className="profile-textDiv">
       <h3 className="text-title">2BHK Independent House</h3>
       <p className="text-address">Scome no 114 vijay nagar Indore</p>
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">   2 days Ago</a></span>
    </div>
  </div>
  <div className="col-md-3">
    <div className="profile-card-2">
      <img
        src="images/3.jpg"
        className="img img-responsive"
      />
      <div className="profile-name">12000\-</div>
      <div className="profile-username">Deposite 12000 per month</div>
      <div className="profile-icons">
      <a href="#">
         <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

    </div>
    <div className="profile-textDiv">
       <h3 className="text-title">2BHK Independent House</h3>
       <p className="text-address">Scome no 114 vijay nagar Indore</p>
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">   2 days Ago</a></span>
    </div>
  </div>
  <div className="col-md-3">
    <div className="profile-card-2">
      <img
        src="images/2.jpeg"
        className="img img-responsive"
      />
      <div className="profile-name">12000\-</div>
      <div className="profile-username">Deposite 12000 per month</div>
      <div className="profile-icons">
      <a href="#">
         <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

    </div>
    <div className="profile-textDiv">
       <h3 className="text-title">2BHK Independent House</h3>
       <p className="text-address">Scome no 114 vijay nagar Indore</p>
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">   2 days Ago</a></span>
    </div>
  </div>
  <div className="col-md-3">
    <div className="profile-card-2">
      <img
        src="images/2.jpeg"
        className="img img-responsive"
      />
      <div className="profile-name">12000\-</div>
      <div className="profile-username">Deposite 12000 per month</div>
      <div className="profile-icons">
      <a href="#">
         <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

    </div>
    <div className="profile-textDiv">
       <h3 className="text-title">2BHK Independent House</h3>
       <p className="text-address">Scome no 114 vijay nagar Indore</p>
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">   2 days Ago</a></span>
    </div>
  </div>
</div>

}
export default RecommendedProperties;