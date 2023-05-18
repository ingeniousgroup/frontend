import "./furnishing.css";
function Furnishing(){
  return <>
  <div id="fur-header">
    <h1>Home By Furnishing</h1>
    <p>Choose your preferred furnishing</p>
  </div>
  <div className="fur-container">
    <div className="fur-card">
      <div className="card-image" style={{borderRadius:'20px'}}>
        <img src="images/furnished.webp" />
      </div>
      <div className="card-text">
      <p className="card-meal-type">Semi Furnished</p>
        <h2 className="card-title">Furnished</h2>
        <p className="card-body">
        A furnished room or house is available to be rented together with the furniture in it.
        </p>
      </div>
      <div className="card-price">516+</div>
    </div>
    <div className="fur-card">
      <div className="card-image"style={{borderRadius:'20px'}}>
        <img src="images/semi.webp" />
      </div>
      <div className="card-text">
        <p className="card-meal-type">Semi Furnished</p>
        <h2 className="card-title">Semi Furnished</h2>
        <p className="card-body">
       Semi furnished house usually has some pieces of furniture.
        </p>
      </div>
      <div className="card-price">112+</div>
    </div>
    <div className="fur-card">
      <div className="card-image"style={{borderRadius:'20px'}}>
        <img src="images/unfun.webp" />
      </div>
      <div className="card-text">
        <p className="card-meal-type">Unfurnished</p>
        <h2 className="card-title">Un Furnished</h2>
        <p className="card-body">
        Unfurnished property is less expensive than furnished houses since there are appliances provided.
        </p>
      </div>
      <div className="card-price">420+</div>
    </div>
    
  </div>
</>

}

export default Furnishing;