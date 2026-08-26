function CtaBanner() {
  return (
    <section className="cta-banner py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="cta-text">
          <h3 className="cta-title">Ready to Grow Your Business?</h3>
          <p className="cta-subtitle">
            More loads, better rates, zero hassle. Let's get you moving.
          </p>
        </div>
        <a href="/contact" className="btn btn-cta">
          Get Started Today
        </a>
      </div>
    </section>
  )
}

export default CtaBanner