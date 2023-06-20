
import Footer from "../Footer/Footer";
import NavebarNext from "../Headers.js/Navbar/navbarNext";
import "./contact.css";
export default function Contact() {
  return <>
    <NavebarNext />


    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p style={{ fontFamily: "Lato', sans-serif" }}>
            Have a question about a specific rental property or need guidance on the application process? Use the contact form below
            to get in touch with us, and we'll provide the information you need.We value your feedback and are committed to improving our rental housing platform. If you have any suggestions, comments,
            or concerns, please share them with us through the contact form below.        </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="fa fa-map-marker" />
                <h4>Location:</h4>
                <p>Madhovastika, Rajmohalla Chourah ,Indore[M.P]</p>
              </div>
              <div className="email">
                <i className="fa fa-envelope" />
                <h4>Email:</h4>
                <p>kirayewal@gmail.com</p>
              </div>
              <div className="phone">
                <i className="fa fa-phone" />
                <h4>Call:</h4>
                <p>+9988276893</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3489997766555!2d75.84152577437405!3d22.71526602772806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7a637fc527%3A0xa641f102ba5de184!2sMadhavastika%20InfoBeans%20Foundation!5e0!3m2!1sen!2sin!4v1686631589652!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, width: "100%", height: 290 }}
                allowfullscreen="" frameBorder={0}
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    //   id="name"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    //   id="email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />


  </>



}