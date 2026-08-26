import heroImg from '../assets/hero.jpg'

function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">TRUCK DISPATCH SERVICES</h1>
          <p className="hero-subtitle">Your Loads. Our Support.</p>
          <p className="hero-text">
          We help owner-operators and fleet owners secure high-paying loads, negotiate top market rates, and eliminate back-office paperwork. Focus on driving while your dedicated dispatcher manages the rest</p>
          <a href="/services" className="btn btn-hero-quote">VIEW SERVICES</a>        </div>
      </div>
    </section>
  )
}

export default Hero