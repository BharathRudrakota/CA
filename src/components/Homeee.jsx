import React from 'react'

const Homeee = () => {
  return (
    <div>
         <section className="hero bg-blue-600  py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-semibold mb-4">Professional Chartered Accountant Services</h1>
          <p className="text-lg mb-6">Helping businesses and individuals with tax, accounting, and financial advisory services.</p>
          <a href="#services" className="btn btn-light">Explore Our Services</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-6">We are a trusted Chartered Accountant firm providing expert financial and tax advice to individuals and businesses.</p>
          <p>With years of experience, our team ensures your financial matters are in safe hands.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container">
          <h2 className="text-center text-3xl font-semibold mb-10">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title text-xl font-semibold mb-3">Tax Planning</h5>
                  <p className="card-text">We offer expert tax planning and preparation services tailored to your financial goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title text-xl font-semibold mb-3">Financial Advisory</h5>
                  <p className="card-text">Our team provides expert financial advice to help you make informed investment and financial decisions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title text-xl font-semibold mb-3">Business Consulting</h5>
                  <p className="card-text">We assist businesses in streamlining their operations and improving profitability with expert advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">Client Testimonials</h2>
          <div className="carousel slide" data-bs-ride="carousel" id="testimonialCarousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p className="text-lg">"The CA firm helped us streamline our accounting process. Their services are top-notch!"</p>
                <footer className="blockquote-footer mt-3">John Doe, CEO of XYZ Corp</footer>
              </div>
              <div className="carousel-item">
                <p className="text-lg">"We’ve been using their tax services for years and are extremely satisfied with their work."</p>
                <footer className="blockquote-footer mt-3">Jane Smith, Freelancer</footer>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">Feel free to reach out for any inquiries or to schedule a consultation.</p>
          <a href="mailto:contact@cafirm.com" className="btn btn-primary">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 CA Firm. All rights reserved.</p>
        </div>
      </footer>


    </div>
  )
}

export default Homeee