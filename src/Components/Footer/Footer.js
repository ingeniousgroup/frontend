import './footer.css';
import data from '../../details';
function Footer (){
    return<>
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>
        {data.NAME}<span>Wala</span>
      </h3>
      <p className="footer-links">
        <a href="" className="link-1">
          Home
        </a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name">{data.COMPANY_NAME}</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>InfoBeans Foundation</span>{data.ADDRESS}
        </p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+91 {data.CONTACT_NO}</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p>
          <a href="mailto:support@company.com">{data.EMAIL_ID}</a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        {data.ABOUT_US}
      </p>
      <div className="footer-icons">
        <a href={data.FACEBOOK_LINK}>
          <i className="fa fa-facebook" />
        </a>
        <a href={data.TWITTER_LINK}>
          <i className="fa fa-twitter" />
        </a>
        <a href={data.LINKED_IN_LINK}>
          <i className="fa fa-linkedin" />
        </a>
        <a href={data.GITHUB_LINK}>
          <i className="fa fa-github" />
        </a>
      </div>
    </div>
  </footer>
</>
}

export default Footer;