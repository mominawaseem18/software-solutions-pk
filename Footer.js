import React from "react";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  // DIRECT PAGE NAVIGATION
  const goToPage = (path) => {
    window.location.href = path;
  };

  return (
    <footer className="footer">
      {/* DEMO SECTION */}
      <section className="demo-section">
        <div className="demo-content">
          <div className="demo-left">
            <h2>See it running on your own numbers.</h2>

            <p>
              Book a free demo and we'll walk you through the system with
              examples
              <br />
              from your own business — no obligation, no pressure.
            </p>

            <div className="demo-buttons">
              <button className="demo-btn" onClick={() => goToPage("/contact")}>
                Book a Free Demo
              </button>

              <button
                className="whatsapp-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/923214510041?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo.",
                    "_blank",
                  )
                }
              >
                WhatsApp Us
              </button>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-row">
              <span className="contact-icon">📞</span>

              <div>
                <strong>CALL OR WHATSAPP</strong>
                <span>+92 321 4510041</span>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">📍</span>

              <div>
                <strong>OFFICE</strong>
                <span>
                  135-J Main Broadway, Phase 6, DHA,
                  <br />
                  Lahore Cantt
                </span>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">🕘</span>

              <div>
                <strong>HOURS</strong>
                <span>Monday – Saturday, 10:00 am – 7:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="logo-text">
              <b>ES</b>
              <small>ESASOFT</small>
            </div>
          </div>

          <p>
            ESASOFT builds point-of-sale, ERP and
            <br />
            management software for restaurants,
            <br />
            retail, pharmacies, hotels, mills,
            <br />
            workshops, salons and housing schemes
            <br />
            across Pakistan.
          </p>

          <div className="social-icons">
            <div>
              <FaFacebookF />
            </div>

            <div>
              <FaTiktok />
            </div>

            <div
              onClick={() =>
                window.open("https://wa.me/923214510041", "_blank")
              }
            >
              <FaWhatsapp />
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="footer-column">
          <h3>PRODUCTS</h3>

          <a onClick={() => goToPage("/products/pos")}>
            MyPOS — Restaurant POS
          </a>

          <a onClick={() => goToPage("/products/billbaaz")}>
            BillBaaz — Offline Restaurant POS
          </a>

          <a onClick={() => goToPage("/products/munshi")}>
            Munshi — Supermarket POS
          </a>

          <a onClick={() => goToPage("/products/hotel")}>
            Hotel Management System
          </a>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <a onClick={() => goToPage("/about")}>About ESASOFT</a>

          <a onClick={() => goToPage("/services")}>Services</a>

          <a onClick={() => goToPage("/clients")}>Clients</a>

          <a onClick={() => goToPage("/contact")}>Contact</a>

          <a onClick={() => goToPage("/contact")}>Book a Demo</a>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-column touch-column">
          <h3>GET IN TOUCH</h3>

          <div className="touch-item">
            <span>📞</span>
            <strong>+92 321 4510041</strong>
          </div>

          <div
            className="touch-item"
            onClick={() =>
              window.open(
                "https://wa.me/923214510041?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20software.",
                "_blank",
              )
            }
          >
            <span>💬</span>
            <strong>WhatsApp chat</strong>
          </div>

          <div className="touch-item address">
            <span>📍</span>

            <p>
              135-J Main Broadway,
              <br />
              Phase 6, DHA, Lahore Cantt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
