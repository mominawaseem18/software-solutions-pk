import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const products = [
    {
      name: "MyPOS",
      description:
        "A complete Point of Sale solution designed to simplify sales, billing and business management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      link: "/products/pos",
    },
    {
      name: "BillBaaz",
      description:
        "Smart billing software that helps businesses manage invoices, sales and daily transactions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      link: "/products/billbaaz",
    },
    {
      name: "Munshi",
      description:
        "A powerful accounting and business management solution for keeping financial records organized.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
      link: "/products/munshi",
    },
    {
      name: "Hotel Management System",
      description:
        "A complete hotel management solution for rooms, bookings, guests and hotel operations.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      link: "/products/hotel",
    },
  ];

  /* =========================
     ABOUT FAQ
  ========================= */

  const faqs = [
    {
      question: "What is ESASOFT?",
      answer:
        "ESASOFT provides reliable and easy-to-use software solutions that help businesses manage their daily operations and work more efficiently.",
    },
    {
      question: "Which products does ESASOFT offer?",
      answer:
        "ESASOFT offers MyPOS, BillBaaz, Munshi and Hotel Management System. Each product is designed to solve specific business management needs.",
    },
    {
      question: "Who can use ESASOFT software?",
      answer:
        "Our software solutions are suitable for restaurants, retail businesses, supermarkets, pharmacies, hotels and other businesses looking to improve their daily operations.",
    },
    {
      question: "Can ESASOFT customize software for my business?",
      answer:
        "Yes. ESASOFT can customize and configure software according to your business requirements, workflow and operational needs.",
    },
    {
      question: "Why should I choose ESASOFT?",
      answer:
        "We focus on simple, reliable and practical software solutions that are built around real business requirements and designed to grow with your business.",
    },
    {
      question: "How can I get started with ESASOFT?",
      answer:
        "You can get started by contacting our team through the Get in Touch button. We can discuss your requirements and help you choose the right ESASOFT solution.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="about-page">
      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">ABOUT ESASOFT</span>

          <h1>
            Technology that helps
            <span> businesses grow.</span>
          </h1>

          <p>
            We create reliable and easy-to-use software solutions that help
            businesses simplify their daily operations and work smarter.
          </p>

          <div className="about-buttons">
            <Link to="/contact" className="about-primary-btn">
              Get in Touch
            </Link>

            <a href="#our-products" className="about-secondary-btn">
              See Our Products
            </a>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-circle">
            <div className="about-inner-card">
              <span>ESASOFT</span>
              <strong>Smart Software</strong>
              <small>Powering modern businesses</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHO WE ARE
      ========================= */}

      <section className="about-intro">
        <div className="about-intro-image">
          <div className="about-image-box">
            <span>ESASOFT</span>
          </div>
        </div>

        <div className="about-intro-content">
          <span className="section-small-title">WHO WE ARE</span>

          <h2>
            Building software
            <span> for real business needs.</span>
          </h2>

          <p>
            ESASOFT focuses on creating practical software solutions that make
            business management simpler, faster and more efficient.
          </p>

          <p>
            From point-of-sale systems and billing to accounting and hotel
            management, our products are designed around the everyday needs of
            modern businesses.
          </p>
        </div>
      </section>

      {/* =========================
          PRODUCTS
      ========================= */}

      <section className="about-products" id="our-products">
        <div className="about-section-heading">
          <span className="section-small-title">OUR PRODUCTS</span>

          <h2>
            Software built for
            <span> your business.</span>
          </h2>

          <p>
            Explore our software solutions and find the right tools for your
            business.
          </p>
        </div>

        <div className="about-product-grid">
          {products.map((product, index) => (
            <Link to={product.link} className="about-product-card" key={index}>
              <div className="about-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="about-product-content">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <span className="product-view">View Product →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================
          WHY ESASOFT
      ========================= */}

      <section className="about-why">
        <div className="about-section-heading">
          <span className="section-small-title">WHY ESASOFT</span>

          <h2>
            Simple solutions.
            <span> Powerful results.</span>
          </h2>
        </div>

        <div className="about-feature-grid">
          <div className="about-feature-card">
            <div className="feature-number">01</div>

            <h3>Easy to Use</h3>

            <p>
              Our software is designed with simple and user-friendly interfaces.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-number">02</div>

            <h3>Business Focused</h3>

            <p>
              We build solutions around real business requirements and
              workflows.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-number">03</div>

            <h3>Reliable</h3>

            <p>
              Our solutions help businesses manage their important operations
              with confidence.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-number">04</div>

            <h3>Scalable</h3>

            <p>
              Our software can grow with your business as your requirements
              increase.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta">
        <div>
          <span className="section-small-title">LET'S WORK TOGETHER</span>

          <h2>
            Ready to improve
            <span> your business?</span>
          </h2>

          <p>
            Let's discuss how ESASOFT can help you with the right software
            solution.
          </p>
        </div>

        <Link to="/contact" className="about-cta-btn">
          Get in Touch →
        </Link>
      </section>

      {/* =========================
          ABOUT FAQ
          SAME AS HOME FAQ
      ========================= */}

      <section className="faq-section" id="faq">
        <div className="faq-header">
          <p className="section-label">QUESTIONS</p>

          <h2>Frequently asked</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openFAQ === index ? "⌃" : "⌄"}
                </span>
              </button>

              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
