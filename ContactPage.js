import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    business: "",
    city: "",
    product: "",
    setup: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      mobile: "",
      business: "",
      city: "",
      product: "",
      setup: "",
    });
  };

  const faqs = [
    {
      question: "How can I get a free demo?",
      answer:
        "Simply fill out the contact form and our team will contact you to understand your requirements and arrange a free demo.",
    },
    {
      question: "Which ESASOFT product is right for my business?",
      answer:
        "We offer different solutions including MyPOS, BillBaaz, Munshi, and Hotel Management System. Our team can help you choose the right product for your business.",
    },
    {
      question: "Can you customize the software for my business?",
      answer:
        "Yes. We can customize and configure the software according to your business requirements, workflow, branches, and operations.",
    },
    {
      question: "Can you integrate my existing hardware and software?",
      answer:
        "Yes. We can integrate supported hardware, payment systems, APIs, and other software with your existing setup.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation time depends on your business size, requirements, number of branches, and the level of customization needed.",
    },
    {
      question: "Do you provide training and support?",
      answer:
        "Yes. We provide training and ongoing technical support to help your team use the software effectively.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? -1 : index);
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="breadcrumb">
            Home <span>/</span> Contact
          </div>

          <p className="contact-label">LET'S TALK</p>

          <h1>
            Tell us what
            <br />
            you're <span>building.</span>
          </h1>

          <p className="contact-description">
            Whether you need a POS system, ERP solution, custom software, or
            help integrating your existing setup, tell us what you need. We'll
            get back to you with the right solution.
          </p>

          {/* CONTACT BUTTONS */}
          <div className="contact-buttons">
            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@esasoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email-btn"
            >
              Email us
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/923214510041?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section">
        <div className="contact-form-info">
          <p className="section-label">START A CONVERSATION</p>

          <h2>
            Let's build something
            <span> useful.</span>
          </h2>

          <p>
            Fill in the form and tell us a little about your business. Our team
            will contact you to understand your requirements and recommend the
            best solution.
          </p>

          <div className="contact-benefits">
            <div>
              <span>01</span>
              <strong>Tell us about your business</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Choose the product you need</strong>
            </div>

            <div>
              <span>03</span>
              <strong>We'll discuss your requirements</strong>
            </div>
          </div>
        </div>

        {/* FORM BOX */}
        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="03XX XXXXXXX"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Business Name *</label>

                <input
                  type="text"
                  name="business"
                  placeholder="Your business name"
                  value={formData.business}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>City *</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Lahore"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* PRODUCT */}
            <div className="form-group full-width">
              <label>Which product are you interested in? *</label>

              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
              >
                <option value="">Select a product</option>
                <option value="MyPOS">MyPOS</option>
                <option value="BillBaaz">BillBaaz</option>
                <option value="Munshi">Munshi</option>
                <option value="Hotel Management System">
                  Hotel Management System
                </option>
              </select>
            </div>

            {/* SETUP */}
            <div className="form-group full-width">
              <label>Tell us about your setup</label>

              <textarea
                name="setup"
                placeholder="Tell us about your business, number of branches, current software, hardware or anything else we should know..."
                value={formData.setup}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>

            {/* CHECKBOX */}
            <div className="form-checkbox">
              <input type="checkbox" id="contact-check" required />

              <label htmlFor="contact-check">
                I agree to be contacted by ESASOFT regarding my request.
              </label>
            </div>

            {/* BUTTON */}
            <button type="submit" className="demo-submit-btn">
              Request a Free Demo
              <span>→</span>
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your request has been submitted successfully. Our
                team will contact you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* WHAT WE ARE GOOD AT */}
      <section className="good-at-section">
        <div className="section-heading">
          <p className="section-label">WHAT WE'RE GOOD AT</p>

          <h2>
            Software that fits
            <span> your business.</span>
          </h2>
        </div>

        <div className="good-at-grid">
          <div className="good-card">
            <span>01</span>
            <h3>Custom Software</h3>
            <p>Software designed around your actual business processes.</p>
          </div>

          <div className="good-card">
            <span>02</span>
            <h3>POS & ERP</h3>
            <p>Reliable POS and ERP solutions for growing businesses.</p>
          </div>

          <div className="good-card">
            <span>03</span>
            <h3>Web & Mobile</h3>
            <p>Modern web and mobile applications built for your users.</p>
          </div>

          <div className="good-card">
            <span>04</span>
            <h3>Integrations</h3>
            <p>Connect software, hardware, payment systems and APIs.</p>
          </div>
        </div>
      </section>

      {/* CONTACT PAGE FAQ */}
      <section className="faq-section">
        <div className="faq-header">
          <p className="section-label">QUESTIONS</p>

          <h2>Frequently asked</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              style={{ background: "transparent" }}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>

                <span className="faq-icon">{open === index ? "⌃" : "⌄"}</span>
              </button>

              {open === index && (
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

export default ContactPage;
