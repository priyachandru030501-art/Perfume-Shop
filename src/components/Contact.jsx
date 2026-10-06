import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "../assets/style/Contact.css";

function Contact() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    AOS.init({
      duration: 900,
      once: true,
    });

  }, []);


  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Thank you! Your message has been received."
    );

  };


  return (

    <div className="contact-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          🌸 AURELIA
        </div>

        <button
          className="toggle-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "show" : ""
          }`}
        >

          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Perfumes
          </Link>

          <Link to="/cart">
            Cart 🛒
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <section className="contact-hero">

        <div data-aos="fade-up">

          <span>
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

          <h1>
            Contact Us
          </h1>

          <p>
            Have a question? We're here to help.
          </p>

        </div>

      </section>


      {/* CONTACT AREA */}

      <section className="contact-section">

        {/* INFO */}

        <div
          className="contact-info"
          data-aos="fade-right"
        >

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Let's Talk
          </h2>

          <p>
            Whether you have a question about
            our perfumes, your order or anything
            else, our team is ready to help.
          </p>


          <div className="info-item">

            <div>
              📍
            </div>

            <div>
              <h3>
                Visit Us
              </h3>

              <p>
                24 Rose Avenue,
                <br />
                Bengaluru, India
              </p>
            </div>

          </div>


          <div className="info-item">

            <div>
              📞
            </div>

            <div>
              <h3>
                Call Us
              </h3>

              <p>
                +91 12345 12345
              </p>
            </div>

          </div>


          <div className="info-item">

            <div>
              ✉️
            </div>

            <div>
              <h3>
                Email
              </h3>

              <p>
                hello@aurelia.com
              </p>
            </div>

          </div>

        </div>


        {/* FORM */}

        <div
          className="contact-form-box"
          data-aos="fade-left"
        >

          <h2>
            Send Us A Message
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

            </div>


            <input
              type="text"
              placeholder="Subject"
              required
            />


            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* SUPPORT */}

      <section className="support-section">

        <div data-aos="fade-up">

          <span>
            NEED HELP?
          </span>

          <h2>
            We're Here For You
          </h2>

          <p>
            Our customer support team is available
            to answer your questions and help you
            choose your perfect fragrance.
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <h2>
          🌸 AURELIA
        </h2>

        <p>
          Luxury fragrances for unforgettable moments.
        </p>

        <p>
          © 2026 Aurelia. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Contact;