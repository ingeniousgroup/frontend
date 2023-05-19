
import NavebarNext from "../Headers.js/Navbar/navbarNext";
import "./about.css";
export default function AboutUs() {
    return <>
        <NavebarNext />
        {/* --------------About------------------------- */}
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About Us</h2>
                </div>
                <div className="row content" style={{ height: "auto" }}>
                    <div className="col-lg-6">
                        <p id="para">
                            Your ultimate destination for finding your dream home! Whether you're looking for a cozy apartment, a spacious house, or a trendy loft
                        </p>
                        <ul style={{ textAlign: "left" }}>
                            <li id="para">
                                <i className="ri-check-double-line" /> we have a wide selection of rental properties to suit your needs.
                            </li>
                            <li id="para">
                                <i className="ri-check-double-line" />Our user-friendly platform makes it easy to search, filter, and compare listings, ensuring you find the perfect place quickly and effortlessly.
                            </li>
                            <li id="para">
                                <i className="bi bi-check-lg" />Our goal is to simplify the rental process, connecting tenants with reliable landlords and providing a seamless experience.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p id="para">
                            Welcome to our rental housing website! for finding the perfect place to call home. With user-friendly search filters, you can easily narrow down your options by location, price range, number of bedrooms, and more. Start your search today and discover your dream rental with us!
                        </p>
                        <p className="btn-learn-more mt-5">
                            Learn More
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* ---------------About--------------------------------- */}

        {/* ---------------------Why us------------------------------ */}
        <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                        <div className="content">
                            <h3 id="head">Wide selection, detailed listings,
                                <strong>secure messaging, time-saving, user reviews.</strong>

                            </h3>
                        </div>
                        <div className="accordion-list">
                            <ul>

                                <li id="para2" style={{ marginTop: "50px" }}>
                                    <a
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-list-2"
                                        className="collapsed"
                                    >
                                        <span>01</span><p id="para2">Conveniently search and compare numerous rental options in one place, saving time and effort in finding your ideal home.</p> 
                                        <i className="bx bx-chevron-down icon-show" />
                                        <i className="bx bx-chevron-up icon-close" />
                                    </a>
                                    <div
                                        id="accordion-list-2"
                                        className="collapse"
                                        data-bs-parent=".accordion-list"
                                    >
                                        <p>
                                            Access to a diverse range of rental properties with various amenities,
                                            locations, and price ranges, ensuring you find the perfect fit for your
                                            needs and preferences.
                                        </p>
                                    </div>
                                </li>
                                <li id="para2">
                                    <a
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-list-3"
                                        className="collapsed"
                                    >
                                        <span>02</span><p id="para2"> Transparent rental information, including pricing, terms, and property details, empowering renters to make well-informed decisions and avoid surprises.</p>
                                        <i className="bx bx-chevron-down icon-show" />
                                        <i className="bx bx-chevron-up icon-close" />
                                    </a>
                                    <div
                                        id="accordion-list-3"
                                        className="collapse"
                                        data-bs-parent=".accordion-list"
                                    >
                                        <p>
                                            Rental housing websites provide renters with transparent pricing,
                                            clear terms, and comprehensive property details, including lease
                                            duration, pet policies, and parking arrangements. This empowers
                                            renters to make well-informed decisions by having all the necessary
                                            information at their disposal, avoiding surprises and ensuring a smooth rental experience.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                        style={{ backgroundImage: 'url("./images/why-us.png")'}}
                        data-aos="zoom-in"
                        data-aos-delay={150}
                        id="imgdiv"
                    >
                        &nbsp;
                    </div>
                </div>
            </div>
        </section>
        {/* End Why Us Section */}

        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills" style={{ overflow: "visible" }}>
            <div className="container" data-aos="fade-up">
                <div className="row" style={{ marginTop: "-60px",  }}>
                    <div
                        className="col-lg-6 d-flex align-items-center"
                        data-aos="fade-right"
                        data-aos-delay={100}
                    >
                        <img src="./images/owner-property.webp" className="img-fluid" alt="" />
                    </div>
                    <div
                        className="col-lg-6 pt-4 pt-lg-0 content"
                        data-aos="fade-left"
                        data-aos-delay={100}
                        style={{height:"auto"}}
                    >
                        <h3 className="mt-2">  features of applications.</h3>
                        <div className="col-lg-6 " style={{marginLeft:"80px",width:"550px"}} >
                            <ul style={{height:"auto",textAlign:"center"}}>
                                <li id="para3">
                                    <i className="ri-check-double-line" /> Extensive range of rental listings: Our website offers a vast selection of rental properties, including apartments, houses, condos, and more. This wide range ensures that renters have ample options to choose from based on their preferences and requirements.



                                </li>
                                <li id="para3">
                                    <i className="ri-check-double-line" />Detailed property information: Each listing on our website provides comprehensive details about the property, including the number of bedrooms and bathrooms, square footage, amenities, and additional features. This information helps renters evaluate whether the property aligns with their specific needs.


                                </li>
                                <li id="para3">
                                    <i className="bi bi-check-lg" />Our goal is to simplify the rental process, connecting tenants with reliable landlords and providing a seamless experience.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* End Skills Section */}
    </>

}