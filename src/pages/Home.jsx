import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Services from '../components/Services'
import CtaBanner from '../components/CtaBanner'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home