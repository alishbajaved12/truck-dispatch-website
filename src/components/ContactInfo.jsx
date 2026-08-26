import telephoneIcon from '../assets/icons/telephone-icon.png'
import emailIcon from '../assets/icons/email-icon.png'
import clockIcon from '../assets/icons/clock-icon.png'
import pinIcon from '../assets/icons/pin-location-icon.png'

function ContactInfo() {
  return (
    <div className="contact-info-box">
      <h2 className="contact-info-title">Get In Touch</h2>
      <p className="contact-info-text">
        Have questions or ready to get started? Fill out the form or
        contact us directly.
      </p>

      <div className="contact-info-item">
        <img src={telephoneIcon} alt="" className="contact-info-icon" />
        <div>
          <h5>Phone</h5>
          <p>(877) 765-3346</p>
        </div>
      </div>

      <div className="contact-info-item">
        <img src={emailIcon} alt="" className="contact-info-icon" />
        <div>
          <h5>Email</h5>
          <p>dispatch@rapiddispatching.com</p>
        </div>
      </div>

      <div className="contact-info-item">
        <img src={pinIcon} alt="" className="contact-info-icon" />
        <div>
          <h5>Address</h5>
          <p>123 Trucking Lane<br />Dallas, TX 75201</p>
        </div>
      </div>

      <div className="contact-info-item">
        <img src={clockIcon} alt="" className="contact-info-icon" />
        <div>
          <h5>Hours</h5>
          <p>Monday – Sunday<br />24/7 Support</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo