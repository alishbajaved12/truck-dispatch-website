import Navbar from '../components/Navbar'
import ServicesHero from '../components/ServicesHero'
import DispatchServiceCard from '../components/DispatchServiceCard'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

import loadBookingImg from '../assets/LoadBookingImg.jpg'
import rateNegotiationImg from '../assets/RateNegotiationImg.jpg'
import routePlanningImg from '../assets/RoutePlanningImg.jpg'
import customerSupportImg from '../assets/CustomerSupportImg.jpg'
import paperworkImg from '../assets/PaperworkImg.jpg'
import profitOptimizationImg from '../assets/ProfitOptimizationImg.jpg'

function Services() {
  return (
    <>
      <Navbar />
      <ServicesHero />

      <section className="services-page-section py-5">
        <div className="container text-center">
          <p className="services-page-label">What We Offer</p>
          <h2 className="services-page-title">Our Dispatch Services</h2>
          <p className="services-page-subtitle">
            We provide end-to-end dispatch support so you can focus on
            driving. Our goal is simple — more miles, more profit, less
            hassle.
          </p>

          <div className="row g-4 mt-4 text-start">
            <div className="col-md-6 col-lg-4" id="load-booking">
              <DispatchServiceCard
                image={loadBookingImg}
                title="Load Booking"
                description="We find the best loads that match your equipment, route preferences and deadhead reduction goals."
                points={["Best paying loads", "Consistent freight", "Verified brokers"]}
              />
            </div>
            <div className="col-md-6 col-lg-4" id="rate-negotiation">
              <DispatchServiceCard
                image={rateNegotiationImg}
                title="Rate Negotiation"
                description="Our experienced dispatchers negotiate the highest possible rates for every load."
                points={["Better rates", "More revenue", "Long term relationships"]}
              />
            </div>
            <div className="col-md-6 col-lg-4" id="route-planning">
              <DispatchServiceCard
                image={routePlanningImg}
                title="Route Planning"
                description="We plan efficient and practical routes to save time, reduce fuel costs and avoid unnecessary delays."
                points={["Optimal routes", "Fuel cost savings", "On-time deliveries"]}
              />
            </div>
            <div className="col-md-6 col-lg-4" id="dispatch-support">
              <DispatchServiceCard
                image={customerSupportImg}
                title="24/7 Dispatch Support"
                description="Our team is available 24/7 to assist you with any dispatch needs or on-road issues."
                points={["Round the clock support", "Quick problem resolution", "Peace of mind on the road"]}
              />
            </div>
            <div className="col-md-6 col-lg-4" id="paperwork">
              <DispatchServiceCard
                image={paperworkImg}
                title="Paperwork & Documents"
                description="We handle all the necessary paperwork so you can focus on driving and earning."
                points={["Rate confirmations", "BOL & paperwork", "Quick paperwork processing"]}
              />
            </div>
            <div className="col-md-6 col-lg-4" id="profit-optimization">
              <DispatchServiceCard
                image={profitOptimizationImg}
                title="Profit Optimization"
                description="We analyze and optimize your operations to maximize your profit and business growth."
                points={["Cost analysis", "Revenue growth", "Business consulting"]}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="services-cta-wrapper">
        <CtaBanner />
      </div>
      <Footer />
    </>
  )
}

export default Services