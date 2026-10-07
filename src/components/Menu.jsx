import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/Menu.css";

function Menu() {
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
      category: "Floral",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Midnight Oud",
      category: "Woody",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Vanilla Dream",
      category: "Sweet",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Ocean Mist",
      category: "Fresh",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 5,
      name: "Royal Musk",
      category: "Musk",
      price: 2199,
      image:
        "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,
      name: "Lavender Bliss",
      category: "Lavender",
      price: 1399,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/12/567419369/CY/ND/GT/247466226/luxury-car-perfume-lavender-bliss-air-freshener-bottle.jpg",
    },
  ];

  const addToCart = (product) => {
    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="menu-page">

      {/* NAVBAR */}
      <nav className="navbar" data-aos="fade-down">

        <div className="logo">
          🌸 AURELIA
        </div>

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

      {/* HERO */}
      <section className="menu-hero">

        <div
          className="menu-hero-content"
          data-aos="zoom-in"
        >

          <span>
            THE AURELIA COLLECTION
          </span>

          <h1>
            Discover Your
            <br />
            Signature Scent
          </h1>

          <p>
            Explore our collection of elegant
            and unforgettable fragrances.
          </p>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="products-section">

        <div
          className="section-title"
          data-aos="fade-up"
        >

          <span>OUR PERFUMES</span>

          <h2>
            Luxury Fragrance Collection
          </h2>

          <p>
            Find the fragrance that speaks to you.
          </p>

        </div>

        <div className="product-grid">

          {perfumes.map((product, index) => (

            <div
              className="product-card"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span>
                  {product.category}
                </span>

              </div>

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  Premium luxury fragrance
                </p>

                <div className="product-bottom">

                  <strong>
                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* COLLECTION BANNER */}
      <section
        className="collection-banner"
        data-aos="zoom-in"
      >

        <div>

          <span>
            FIND YOUR SIGNATURE
          </span>

          <h2>
            A Fragrance For
            <br />
            Every Moment
          </h2>

          <p>
            From soft florals to rich woody notes,
            discover your perfect fragrance.
          </p>

          <Link
            to="/about"
            className="collection-btn"
          >
            Discover Aurelia
          </Link>

        </div>

      </section>

      {/* FOOTER */}
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

export default Menu;