import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section className="services-section py-5">
      <div className="container text-center">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          At Rapid Dispatching, we offer end-to-end dispatch solutions to
          meet your trucking needs. Choose the option that best fits your
          business:
        </p>

        <div className="row g-4 mt-4 text-start">
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Load Booking"
              description="We find the best loads that match your equipment and route preferences."
              link="/services#load-booking"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Rate Negotiation"
              description="We negotiate the best rates with brokers to maximize your revenue."
              link="/services#rate-negotiation"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Route Planning"
              description="Efficient routing to save time, reduce fuel costs, and increase profits."
              link="/services#route-planning"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="24/7 Support"
              description="Our team is available around the clock to support you on the road."
              link="/services#dispatch-support"
            />
          </div>
        </div>

        <a href="/services" className="btn btn-view-services mt-4">
          View All Services
        </a>
      </div>
    </section>
  )
}

export default Services