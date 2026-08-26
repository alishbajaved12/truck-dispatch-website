import checkIcon from '../assets/icons/check-icon.png'

function ServiceCard({ title, description, link }) {
  return (
    <div className="service-card">
      <img src={checkIcon} alt="" className="service-check" />
      <h4 className="service-title">{title}</h4>
      <p className="service-description">{description}</p>
      <a href={link} className="service-link">Learn More →</a>
    </div>
  )
}

export default ServiceCard