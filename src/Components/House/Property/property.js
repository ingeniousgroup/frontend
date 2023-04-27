
import { useSelector } from "react-redux";

function Property(){
  const {propertyList,isLoding,error} = useSelector((state)=>state.property);
  console.log(propertyList);
  return <div className="container"> <div className="row" >
    {!error&&propertyList.map((property,index)=><div key={index} className="col-md-3">
    <div className="profile-card-2">
      <img
        src={property.imagesUrlArray[0]}
        className="img img-responsive"
        alt="image nahi hai"
      />
      <div className="profile-name">{property.rent}</div>
      <div className="profile-username">Deposite {property.rent} per month</div>
      <div className="profile-icons">
      <a href="#">
         <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

    </div>
    <div className="profile-textDiv">
    <div className="row">
      <div className="text-title col">
          <h4 >{property.houseCategory.toUpperCase()}</h4>
      </div>
      <div className="vierMoreButtomDiv col text-right">
        <a type="button" class="btn-view">More...</a>
      </div>
      <div className="text-address ">
       <p >{property.address.substring(0,30).toUpperCase()}..</p>
      </div>
      </div>
      <div className="posted-property ">
       <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">{property.date}</a></span>
       </div>
    </div>
  </div>)}

 </div>
</div>
}
export default Property;