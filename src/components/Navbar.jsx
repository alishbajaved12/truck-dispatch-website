import logo from '../assets/logo.png'
import telephoneIcon from '../assets/icons/telephone-icon.png'
import emailIcon from '../assets/icons/email-icon.png'

function Navbar() {
  return (
    <>
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-2">
       <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <span className="me-md-4 mb-1 mb-md-0 d-flex align-items-center">
         <img src={telephoneIcon} alt="" className="top-bar-icon" />
         (877) 765-3346
        </span>
        <span className="d-flex align-items-center">
         <img src={emailIcon} alt="" className="top-bar-icon" />
          info@rapiddispatching.com
        </span>
      </div>
        <a href="/drivers#driver-form" className="text-white text-decoration-none d-none d-md-block">Become a Driver</a>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-1 sticky-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Company Logo" height="85"/>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/drivers">Drivers</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              <li className="nav-item">
              <a href="/contact#contact-form" className="btn btn-nav-quote ms-3">REQUEST DISPATCH</a>              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar