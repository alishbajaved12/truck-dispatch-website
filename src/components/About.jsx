import aboutImg from '../assets/about-truck.webp'

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img src={aboutImg} alt="Truck carrying oversized load" className="img-fluid " />
          </div>
          <div className="col-md-6">
            <p className="about-label">PROFESSIONAL FREIGHT SERVICES</p>
            <h2 className="about-title">Carrier Solutions</h2>
            <p className="about-text">
            Our dispatch team help carriers find suitable loads based on their equipment, preferred lanes, and business needs. We handle broker communication, rate negotiations, and dispatch paperwork so you can spend more time on the road.</p>
            <p className="about-text">
            Whether you're an independent owner-operator or managing multiple trucks, we're here to simplify the day-to-day dispatch process and keep your business moving.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About