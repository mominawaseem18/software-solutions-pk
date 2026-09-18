import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // ================= CONTACT =================
  const goToContact = () => {
    navigate("/contact");
  };

  // ================= NAVBAR =================
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ================= LOGO ================= */}

        <Link to="/" className="logo">
          <div className="logo-symbol">
            <span>ES</span>
          </div>

          <div className="logo-text">
            <strong>ESASOFT</strong>
            <small>SOFTWARE SOLUTIONS</small>
          </div>
        </Link>

        {/* ================= NAV LINKS ================= */}

        <div className="nav-links">
          {/* HOME */}
          <Link
            to="/"
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          {/* ================= PRODUCTS ================= */}

          <div className="nav-products">
            <button
              type="button"
              className={`products-link ${
                location.pathname.startsWith("/products") ? "active" : ""
              }`}
            >
              Products <span>⌃</span>
            </button>

            <div className="products-dropdown">
              {/* MY POS */}
              <Link to="/products/pos">
                <strong>MyPOS</strong>
                <small>Restaurant management & point of sale</small>
              </Link>

              {/* BILLBAAZ */}
              <Link to="/products/billbaaz">
                <strong>BillBaaz</strong>
                <small>Offline restaurant POS — desktop, no cloud</small>
              </Link>

              {/* MUNSHI */}
              <Link to="/products/munshi">
                <strong>Munshi</strong>
                <small>Supermarket & pharmacy POS + ERP</small>
              </Link>

              {/* HOTEL */}
              <Link to="/products/hotel">
                <strong>Hotel Management System</strong>
                <small>Front desk, billing, restaurant & store</small>
              </Link>
            </div>
          </div>

          {/* SERVICES */}

          <Link
            to="/services"
            className={`nav-item ${
              location.pathname === "/services" ? "active" : ""
            }`}
          >
            Services
          </Link>

          {/* CLIENTS */}

          <Link
            to="/clients"
            className={`nav-item ${
              location.pathname === "/clients" ? "active" : ""
            }`}
          >
            Clients
          </Link>

          {/* ABOUT */}

          <Link
            to="/about"
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>

          {/* ================= LOCATION ================= */}

          <Link
            to="/location"
            className={`nav-item ${
              location.pathname === "/location" ? "active" : ""
            }`}
          >
            Location
          </Link>

          {/* CONTACT */}

          <button
            type="button"
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={goToContact}
          >
            Contact
          </button>
        </div>

        {/* ================= DEMO BUTTON ================= */}

        <button type="button" className="demo-btn" onClick={goToContact}>
          Book a Free Demo
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
