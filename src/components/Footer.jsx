import logo from '../assets/logo.png'
import linkedinIcon from '../assets/icons/linkedin-icon.png'
import facebookIcon from '../assets/icons/facebook-icon.png'
import youtubeIcon from '../assets/icons/youtube-icon.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <img src={logo} alt="Company Logo" height="70" className="mb-3" />
            <p className="footer-text">
              <strong>Rapid Dispatching</strong> servicing owner-operators
              and small trucking companies, providing the best{' '}
              <strong>truck dispatch services</strong> in logistics.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-list">
              <li><a href="/services#load-booking">Load Booking</a></li>
              <li><a href="/services#rate-negotiation">Rate Negotiation</a></li>
              <li><a href="/services#route-planning">Route Planning</a></li>
              <li><a href="/services#dispatch-support">24/7 Support</a></li>
              <li><a href="/services#paperwork">Paperwork & Documents</a></li>
              <li><a href="/services#profit-optimization">Profit Optimization</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-list">
              <li><a href="/">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/drivers">Drivers</a></li>
              <li><a href="/services">Services</a></li>
            </ul>

            <div className="d-flex gap-2 mt-3 mb-3">
              <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
              <a href="#"><img src={facebookIcon} alt="Facebook" className="social-icon" /></a>
              <a href="#"><img src={youtubeIcon} alt="YouTube" className="social-icon" /></a>
            </div>

            <a href="/contact#contact-form" className="btn btn-footer-contact">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container text-center">
          Copyright © 2026 Rapid Dispatching LLC | <a href="#" className="footer-bottom-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer