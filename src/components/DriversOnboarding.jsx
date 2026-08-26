import truckRouteImg from '../assets/TruckRoute.jpg'
import tickIcon from '../assets/icons/tick-icon.png'

function DriversOnboarding() {
  const requirements = [
    "Signed Truck Dispatch Service Agreement",
    "Factoring Information (if any)",
    "General Power Of Attorney (allows us to contact brokers on your behalf)",
    "Copy Of Your MC Authority Letter",
    "Copy Of The Insurance Certificate",
    "Driver's Contact Info",
    "Copy Of W-9 Form"
  ]

  return (
    <section className="drivers-onboarding py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img src={truckRouteImg} alt="Highway truck route" className="drivers-onboarding-img" />
          </div>

          <div className="col-lg-6">
            <h2 className="drivers-onboarding-title">
              Getting Started With Rapid Dispatching
            </h2>
            <p className="drivers-onboarding-text">
              Getting started is simple. Once you're ready to work with us,
              we'll send you a carrier application. After we receive your
              paperwork, you'll be introduced to your personal dispatcher
              and can start right away. Here's what you need to sign up:
            </p>

            <ul className="drivers-points">
              {requirements.map((item, index) => (
                <li key={index}>
                  <img src={tickIcon} alt="" className="drivers-tick" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DriversOnboarding