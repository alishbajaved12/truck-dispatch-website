import flatbedImg from '../assets/flatbed-image.jpg'

function DriversHero() {
  return (
    <section
      className="drivers-hero"
      style={{ backgroundImage: `url(${flatbedImg})` }}
    >
      <div className="container">
        <h1 className="drivers-hero-title">Drive With Us</h1>
        <p className="drivers-hero-subtitle">
          You drive, we handle the rest — better loads, better rates, and
          a dispatch team that actually has your back.
        </p>
      </div>
    </section>
  )
}

export default DriversHero