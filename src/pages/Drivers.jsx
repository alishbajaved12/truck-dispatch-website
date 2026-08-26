import Navbar from '../components/Navbar'
import DriversHero from '../components/DriversHero'
import DriversIntro from '../components/DriversIntro'
import DriversOnboarding from '../components/DriversOnboarding'
import DriverSignupForm from '../components/DriverSignupForm'
import Footer from '../components/Footer'

function Drivers(){
    return (
        <>
      <Navbar />
      <DriversHero />
      <DriversIntro />
      <DriversOnboarding />
      <DriverSignupForm />
      <Footer />
        </>
    )
}
export default Drivers
