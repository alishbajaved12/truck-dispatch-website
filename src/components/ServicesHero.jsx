import servicesHeroImg from '../assets/trucking-country-transport.webp'

function ServicesHero() {
  return (
    <section
      className="services-hero"
      style={{ backgroundImage: `url(${servicesHeroImg})` }}
    >
      <div className="container">
        <h1 className="services-hero-title">Our Dispatch Services</h1>
        <p className="services-hero-subtitle">
          Comprehensive dispatch solutions to keep your trucks moving and
          your business profitable.
        </p>
      </div>
    </section>
  )
}

export default ServicesHero