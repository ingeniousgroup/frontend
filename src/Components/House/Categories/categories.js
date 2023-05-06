
import "./categories.css"
function Categories(){
   return<>
  <div className="background" />
  <div className="background-texture" />
  <section className="carousel">
  <div id="fur-header">
    <h1 className="categories__title">Apartment, Villas and More</h1>
  </div>
    {/* <h2 className="categories__title">Apartment, Villas and More</h2> */}
    <div className="carousel__container">
      <div className="carousel-item ml-5">
        <img
          className="carousel-item__img"
          src="images/Apartment.jpg"
          alt="people"
        />
        <div className="carousel-item__details">    
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">Apartment</h5>
          <h6 className="carousel-item__details--subtitle">
            Date and Duration
          </h6>
        </div>
      </div>
      <div className="carousel-item ml-5">
        <img
          className="carousel-item__img"
          src="images/villa.jpg"
          alt="people"
        />
        <div className="carousel-item__details">
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">Villas</h5>
          <h6 className="carousel-item__details--subtitle">
            Date and Duration
          </h6>
        </div>
      </div>
      <div className="carousel-item ml-5">
        <img
          className="carousel-item__img"
          src="images/office.jpg"
          alt="people"
        />
        <div className="carousel-item__details">
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">Offices</h5>
          <h6 className="carousel-item__details--subtitle">
            Date and Duration
          </h6>
        </div>
      </div>
      <div className="carousel-item ml-5">
        <img
          className="carousel-item__img"
          src="images/shop.jpg"
          alt="people"
        />
        <div className="carousel-item__details">
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">Shops </h5>
          <h6 className="carousel-item__details--subtitle">
            Date and Duration
          </h6>
        </div>
      </div>
      <div className="carousel-item ml-5">
        <img
          className="carousel-item__img"
          src="images/land.jpg"
          alt="people"
        />
        <div className="carousel-item__details">
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">Lands/Plot</h5>
          <h6 className="carousel-item__details--subtitle">
            Date and Duration
          </h6>
        </div>
      </div>
      
    </div>
  </section>
   </>
}

export default Categories;