import FeatureCard from './FeatureCard'

import barChartIcon from '../assets/icons/bar-chart-icon.png'
import contractIcon from '../assets/icons/contract-icon.png'
import creditCardIcon from '../assets/icons/credit-card-icon.png'
import customerServiceIcon from '../assets/icons/customer-service-icon.png'
import deliveryTruckIcon from '../assets/icons/delivery-truck-icon.png'
import insuranceIcon from '../assets/icons/insurance-icon.png'
import loadingTruckIcon from '../assets/icons/loading-truck-icon.png'
import locationIcon from '../assets/icons/location-icon.png'
import usersIcon from '../assets/icons/multiple-users-silhouette.png'
import networkIcon from '../assets/icons/network-icon.png'
import newspaperIcon from '../assets/icons/newspaper-icon.png'
import starIcon from '../assets/icons/star-icon.png'

function Features() {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-6 col-md-3">
            <FeatureCard icon={deliveryTruckIcon} text="High Paying Loads" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={locationIcon} text="Nationwide Coverage" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={customerServiceIcon} text="Dedicated Support" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={contractIcon} text="Paperwork Assistance" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={usersIcon} text="One-on-One Logistics Specialists" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={creditCardIcon} text="Fast Invoicing & Factoring" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={starIcon} text="5/5 Star Rated Service" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={insuranceIcon} text="Broker Credit Checks" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={newspaperIcon} text="Market Rate Insights" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={networkIcon} text="Full Back-Office Support" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={loadingTruckIcon} text="All Freight Types Covered" />
          </div>
          <div className="col-6 col-md-3">
            <FeatureCard icon={barChartIcon} text="Scale Your Revenue" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features