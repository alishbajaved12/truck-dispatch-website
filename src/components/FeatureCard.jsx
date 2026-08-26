function FeatureCard({ icon, text }) {
  return (
    <div className="feature-card">
      <img src={icon} alt="" className="feature-icon" />
      <p className="feature-text">{text}</p>
    </div>
  )
}

export default FeatureCard