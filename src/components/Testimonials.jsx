import flatbedImg from '../assets/flatbed-image.jpg'

function Testimonials() {
  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${flatbedImg})` }}
    >
      <div className="testimonials-panel">
        <h2 className="testimonials-title">Customer Experience</h2>
        <p className="testimonials-subtitle">See what our clients have to say</p>

        <div className="row g-4 mt-3">
          <div className="col-md-6 col-lg-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Very good company with excellent service, clear communication, and fair rates. I would definitely use them again."
              </p>
              <p className="testimonial-name">— Gary Barannikov</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The team is professional, responsive, and always keeps my trucks rolling. I highly recommend their dispatching services."
              </p>
              <p className="testimonial-name">— Marcello Carmona</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I can call or text anytime and always get a quick response. The personalized service makes me feel like a priority."
              </p>
              <p className="testimonial-name">— Muang Soe</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I've been using this company for six months and couldn't be happier. They keep our trucks on the road and communicate exceptionally well."
              </p>
              <p className="testimonial-name">— Corey Herbert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials