import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "../assets/style/About.css";

function About() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (

    <div className="about-page">

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

      <section className="about-hero">

        <div data-aos="fade-up">

          <span>
            THE STORY OF AURELIA
          </span>

          <h1>
            About Us
          </h1>

          <p>
            Creating fragrances that become memories.
          </p>

        </div>

      </section>


      {/* STORY */}

      <section className="story-section">

        <div
          className="story-image"
          data-aos="fade-right"
        >

          <img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=80"
            alt="Perfume"
          />

        </div>


        <div
          className="story-content"
          data-aos="fade-left"
        >

          <span>
            OUR STORY
          </span>

          <h2>
            A Fragrance
            <br />
            With A Meaning
          </h2>

          <p>
            Aurelia was created with one simple
            idea — fragrance should tell a story.
          </p>

          <p>
            Every perfume in our collection is
            carefully selected to create a unique
            experience. From delicate floral notes
            to rich woody aromas, our fragrances
            are made to stay with you.
          </p>

          <p>
            We believe your scent should feel
            personal, beautiful and unforgettable.
          </p>

        </div>

      </section>


      {/* VISION MISSION */}

      <section className="vision-section">

        <div
          className="vision-card"
          data-aos="fade-up"
        >

          <div>✨</div>

          <h2>
            Our Vision
          </h2>

          <p>
            To become a trusted fragrance brand
            that helps people express themselves
            through beautiful scents.
          </p>

        </div>


        <div
          className="vision-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div>🌸</div>

          <h2>
            Our Mission
          </h2>

          <p>
            To bring elegant, high-quality and
            memorable fragrances to everyone.
          </p>

        </div>


        <div
          className="vision-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >

          <div>💖</div>

          <h2>
            Our Values
          </h2>

          <p>
            Quality, creativity, elegance and
            customer happiness guide everything
            we do.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <div data-aos="zoom-in">

          <h2>
            Find Your Signature Scent
          </h2>

          <p>
            Explore our collection today.
          </p>

          <Link to="/menu">
            Explore Perfumes
          </Link>

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

export default About;