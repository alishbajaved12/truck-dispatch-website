import contactHeroImg from '../assets/trucks-scaled.jpg'

function ContactHero() {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${contactHeroImg})` }}
    >
      <div className="container">
        <h1 className="contact-hero-title">Contact Us</h1>
        <p className="contact-hero-subtitle">
          To get the best service and rates, reach out to us now. Your
          dedicated dispatcher will help you get set up quickly and keep
          you moving.
        </p>
      </div>
    </section>
  )
}

export default ContactHero