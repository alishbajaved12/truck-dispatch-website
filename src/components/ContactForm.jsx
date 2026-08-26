function ContactForm() {
  return (
    <div className="contact-form-box">
      <h2 className="contact-form-title">Have a Question?</h2>
      <p className="contact-form-text">
        Rapid Dispatching is here to answer all your questions. Whether
        it's finding loads or getting started with dispatch services,
        fill out the form below and a dispatcher will contact you.
      </p>

      <form>
        <div className="row g-3">
          <div className="col-12">
            <select className="form-select">
              <option>Select Department</option>
              <option>Customer Support</option>
              <option>Accounting</option>
              <option>Shipping Request</option>
            </select>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="col-12">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <input type="tel" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="col-12">
            <textarea className="form-control" placeholder="Comments" rows="4"></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="smsConsent" />
              <label className="form-check-label" htmlFor="smsConsent">
                By checking this box, you agree to receive text messages
                regarding updates and responses to your inquiries from
                Rapid Dispatching. Message and data rates may apply.
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-contact-submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm