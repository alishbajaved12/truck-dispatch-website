function DriverSignupForm() {
  return (
    <section className="driver-signup py-5" id="driver-form">
      <div className="container">
        <div className="driver-signup-box">
          <h2 className="driver-signup-title">Driver Sign Up</h2>
          <p className="driver-signup-subtitle">
            Sign up below to start the application process to drive for us.
          </p>

          <form>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Name <span className="required">(Required)</span></label>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="First" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Last" />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Email <span className="required">(Required)</span></label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Phone <span className="required">(Required)</span></label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Primary Zip Code <span className="required">(Required)</span></label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Select Experience <span className="required">(Required)</span></label>
                <select className="form-select">
                  <option>Student</option>
                  <option>Less than 1 year</option>
                  <option>1-3 years</option>
                  <option>3+ years</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Do you have a valid CDL license? <span className="required">(Required)</span></label>
                <select className="form-select">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">
                  Do you have at least 3 months of recent, over-the-road tractor
                  trailer driving experience? <span className="required">(Required)</span>
                </label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="experience" id="expYes" />
                  <label className="form-check-label" htmlFor="expYes">Yes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="experience" id="expNo" />
                  <label className="form-check-label" htmlFor="expNo">No</label>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">
                  What type of equipment are you looking to drive? (Select all that apply) <span className="required">(Required)</span>
                </label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="dryVan" />
                  <label className="form-check-label" htmlFor="dryVan">Dry Van</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="reefer" />
                  <label className="form-check-label" htmlFor="reefer">Refrigerated</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="flatbed" />
                  <label className="form-check-label" htmlFor="flatbed">Flatbed</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="emailOptin" />
                  <label className="form-check-label" htmlFor="emailOptin">
                    Opt-in to receive email updates.
                  </label>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-driver-submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DriverSignupForm