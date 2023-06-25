function Card(){


    return <>
    {!error && propertyList.map((property, index) => <div key={index} className="col-md-3">
        {/* onClick={()=>viewDescription(property)} */}
        <div className="profile-card-2" >
          <img
            src={apiEndPoint.PORT + property.imagesUrlArray[1]}
            className="img img-responsive"
            alt="IMAGES NOT FOUND"
            onClick={() => viewDescription(property)}
          />
          <div className="profile-name fs-4 p-1"><i class="fa fa-inr fs-2" aria-hidden="true"></i><label style={{marginLeft:"-0.7vh"}}>{property.rent}</label></div>
          <div className="profile-username">Deposite {property.rent} per month</div>
          <div className="profile-icons">
            {(currentUser&&checkIfLike(property._id)) ? <a onClick={() => addToCart(property,index)}><i id={"like"+index} className="fa fa-heart like-icon" style={{color:'red'}} aria-hidden="true"></i></a> :(currentUser ? <a onClick={() => addToCart(property,index)}><i id={"like"+index} className="fa fa-heart like-icon" aria-hidden="true"></i></a>: !currentUser && <a onClick={signinUser}><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> ) }
          </div>

        </div>
        <div className="profile-textDiv">

          <div className="row">
            <div className="text-title col">
              <h4 >{property.houseCategory.toUpperCase()}</h4>
            </div>
            <div className="vierMoreButtomDiv col text-right">
              <a onClick={() => viewDescription(property)} type="button" class="btn-view">More...</a>
            </div>
            <div className="text-address ">
              <p >{property.address.substring(0, 30).toUpperCase()}..</p>
            </div>
          </div>
          <div className="posted-property ">
            <span>PostedBy Owner</span><span className="paddingStyle"> <a href="#">{property.date}</a></span>
          </div>
        </div>
      </div>)}
    </>
}