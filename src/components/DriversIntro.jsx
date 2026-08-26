import TruckDriverImg from '../assets/TruckDriverImg.jpg'
import tickIcon from '../assets/icons/tick-icon.png'

function DriversIntro() {
  const points = [
    "Dry Van, Step-Deck, Flatbed, Reefer, and RGN Trailer Dispatch",
    "High-Paying Load Booking",
    "Rate Negotiation and Broker Communication",
    "Billing and Invoicing Management",
    "Document Handling and Paperwork Assistance",
    "DOT Compliance and Safety Monitoring",
    "24/7 Dedicated Dispatcher Support"
  ]

  return (
    <section className="drivers-intro py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="drivers-intro-title">
              Our Specialized Truck Dispatch Services
            </h2>
            <p className="drivers-intro-text">
              At <strong>Rapid Dispatching</strong>, we offer dispatch services tailored to the needs of owner-operators and fleet managers. Our goal is simple — streamline your operations and maximize your profitability. Here's how we can help:
            </p>

            <ul className="drivers-points">
              {points.map((point, index) => (
                <li key={index}>
                  <img src={tickIcon} alt="" className="drivers-tick" />
                  {point}
                </li>
              ))}
            </ul>

            <a href="tel:8777653346" className="btn btn-drivers-call">
              (877) 765-3346
            </a>
          </div>

          <div className="col-lg-6">
            <img src={TruckDriverImg} alt="Dispatcher on a call" className="drivers-intro-img d-none d-lg-block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DriversIntro