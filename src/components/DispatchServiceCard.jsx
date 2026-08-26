import checkIcon from '../assets/icons/check-rounded-icon.png'

function DispatchServiceCard({ image, title, description, points }) {
  return (
    <div className="dispatch-card">
      <div className="dispatch-card-text">
        <h4 className="dispatch-card-title">{title}</h4>
        <p className="dispatch-card-description">{description}</p>
        <ul className="dispatch-card-points">
          {points.map((point, index) => (
            <li key={index}>
              <img src={checkIcon} alt="" className="dispatch-check" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <img src={image} alt={title} className="dispatch-card-image" />
    </div>
  )
}

export default DispatchServiceCard