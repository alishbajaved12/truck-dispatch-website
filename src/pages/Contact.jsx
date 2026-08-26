import Navbar from '../components/Navbar'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <section className="contact-section py-5" id="contact-form">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <ContactForm />
            </div>
            <div className="col-lg-5">
               <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact