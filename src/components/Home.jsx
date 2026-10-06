import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const perfumes = [
    {
      id: 1,
      name: "Rose Elegance",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Midnight Oud",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Vanilla Dream",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar" data-aos="fade-down">

        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          🌸 AURELIA
        </Link>

        <button
          className="toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "show" : ""
          }`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
          >
            Perfumes
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            Cart 🛒
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-content">

          <span data-aos="fade-down">
            THE AURELIA COLLECTION
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover Your
            <br />
            Signature Scent
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Luxury fragrances crafted for
            unforgettable moments.
          </p>

          <Link
            to="/menu"
            className="hero-btn"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Explore Collection
          </Link>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="intro-section">

        <div
          className="intro-text"
          data-aos="fade-right"
        >

          <span>
            WELCOME TO AURELIA
          </span>

          <h2>
            A Fragrance
            <br />
            Made For You
          </h2>

          <p>
            Discover elegant perfumes created
            with carefully selected ingredients
            and timeless fragrance notes.
          </p>

          <Link
            to="/about"
            className="outline-btn"
          >
            Our Story →
          </Link>

        </div>

        <div
          className="intro-image"
          data-aos="fade-left"
        >

          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80"
            alt="Luxury Perfume"
          />

        </div>

      </section>

      {/* ================= FEATURED PERFUMES ================= */}

      <section className="featured-section">

        <div
          className="section-title"
          data-aos="fade-up"
        >

          <span>
            OUR FAVOURITES
          </span>

          <h2>
            Signature Fragrances
          </h2>

          <p>
            Discover our most loved perfumes.
          </p>

        </div>

        <div className="featured-grid">

          {perfumes.map((item, index) => (

            <div
              className="featured-card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <div className="featured-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              <div className="featured-info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  Luxury Eau de Parfum
                </p>

                <strong>
                  ₹
                  {item.price.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>

          ))}

        </div>

        <Link
          to="/menu"
          className="view-btn"
          data-aos="zoom-in"
        >
          View All Perfumes
        </Link>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="quote-section">

        <div data-aos="zoom-in">

          <span>
            AURELIA
          </span>

          <h2>
            "Your fragrance is
            <br />
            your invisible signature."
          </h2>

          <p>
            Make every moment unforgettable.
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer data-aos="fade-up">

        <h2>
          🌸 AURELIA
        </h2>

        <p>
          Luxury fragrances for unforgettable moments.
        </p>

        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Perfumes
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        <p>
          © 2026 Aurelia. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;