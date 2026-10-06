import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "../assets/style/Cart.css";

function Cart() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    AOS.init({
      duration: 900,
      once: true,
    });

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);

  }, []);


  const updateCart = (updatedCart) => {

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };


  const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    updateCart(updatedCart);
  };


  const decreaseQuantity = (id) => {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };


  const removeItem = (id) => {

    const updatedCart =
      cart.filter((item) => item.id !== id);

    updateCart(updatedCart);
  };


  const clearCart = () => {

    setCart([]);

    localStorage.removeItem("cart");
  };


  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (

    <div className="cart-page">

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

      <section className="cart-hero">

        <div data-aos="fade-up">

          <span>
            YOUR SELECTION
          </span>

          <h1>
            Shopping Cart
          </h1>

          <p>
            Review your favourite fragrances.
          </p>

        </div>

      </section>


      {/* CART */}

      <section className="cart-section">

        {cart.length === 0 ? (

          <div
            className="empty-cart"
            data-aos="zoom-in"
          >

            <div className="empty-icon">
              🛒
            </div>

            <h2>
              Your Cart is Empty
            </h2>

            <p>
              Discover our beautiful fragrance
              collection and choose your favourite.
            </p>

            <Link
              to="/menu"
              className="shop-btn"
            >
              Explore Perfumes
            </Link>

          </div>

        ) : (

          <div className="cart-container">

            {/* ITEMS */}

            <div className="cart-items">

              <div className="cart-heading">

                <h2>
                  Your Items
                </h2>

                <button
                  className="clear-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

              </div>


              {cart.map((item, index) => (

                <div
                  className="cart-item"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div className="cart-details">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <div className="quantity">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <strong>
                        {item.quantity}
                      </strong>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>


                  <div className="item-right">

                    <strong>
                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString("en-IN")}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* SUMMARY */}

            <div
              className="summary"
              data-aos="fade-left"
            >

              <h2>
                Order Summary
              </h2>

              <div className="summary-row">

                <span>
                  Items
                </span>

                <span>
                  {totalItems}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹
                  {totalPrice.toLocaleString("en-IN")}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <span className="free">
                  FREE
                </span>

              </div>


              <hr />


              <div className="grand-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹
                  {totalPrice.toLocaleString("en-IN")}
                </strong>

              </div>


              <button
                className="checkout-btn"
                onClick={() =>
                  alert(
                    "Thank you! Your order has been placed."
                  )
                }
              >
                Place Order
              </button>


              <Link
                to="/menu"
                className="continue-btn"
              >
                ← Continue Shopping
              </Link>

            </div>

          </div>

        )}

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

export default Cart;