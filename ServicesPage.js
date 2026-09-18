import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "ERP Solutions",
      icon: "⚙️",
      description:
        "End-to-end business systems that tie sales, inventory, purchasing, accounts and HR into one connected system.",
      points: [
        "Double-entry accounting",
        "Multi-branch consolidation",
        "Role-based access",
        "Audit trails on money",
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      description:
        "Corporate websites, product landing pages, portals and custom web applications built around your business.",
      points: [
        "Mobile-first design",
        "SEO structure & schema",
        "WordPress or custom",
        "Speed optimisation",
      ],
    },
    {
      title: "Web Applications",
      icon: "💻",
      description:
        "Browser-based systems your team can open from any computer, tablet or phone without installing software.",
      points: [
        "Responsive on every screen",
        "Secure logins & sessions",
        "Internal dashboards",
        "Business workflows",
      ],
    },
    {
      title: "Mobile Applications",
      icon: "📱",
      description:
        "Android and iOS applications designed around real business workflows and customer requirements.",
      points: [
        "Android & iOS",
        "User-friendly interface",
        "Push notifications",
        "API integration",
      ],
    },
    {
      title: "Hardware Integration",
      icon: "🖨️",
      description:
        "Connect POS hardware, printers, scanners, displays and other devices directly with your software.",
      points: [
        "POS hardware",
        "Receipt printers",
        "Barcode scanners",
        "Kitchen printers",
      ],
    },
    {
      title: "Cloud & On-Premise",
      icon: "☁️",
      description:
        "Deploy your software in the cloud or on your own local infrastructure depending on your business requirements.",
      points: [
        "Cloud deployment",
        "Local servers",
        "Data backup",
        "Secure access",
      ],
    },
    {
      title: "On-Site Training",
      icon: "🎓",
      description:
        "Practical training for your staff so your team can confidently use the system from day one.",
      points: [
        "Staff training",
        "System walkthrough",
        "Operational guidance",
        "Training material",
      ],
    },
    {
      title: "Ongoing Support",
      icon: "🛠️",
      description:
        "Continuous technical support, maintenance and assistance to keep your business systems running smoothly.",
      points: [
        "Technical support",
        "System maintenance",
        "Remote assistance",
        "Regular updates",
      ],
    },
  ];

  const products = [
    {
      name: "MyPOS",
      description: "Restaurant management & point of sale",
      path: "/products/pos",
    },
    {
      name: "BillBaaz",
      description: "Offline restaurant POS — desktop, no cloud",
      path: "/products/billbaaz",
    },
    {
      name: "Munshi",
      description: "Supermarket & pharmacy POS + ERP",
      path: "/products/munshi",
    },
    {
      name: "Hotel Management System",
      description: "Front desk, billing, restaurant & store",
      path: "/products/hotel-management",
    },
  ];

  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-breadcrumb">Home / Services</div>

        <div className="services-badge">
          <span>SERVICES</span>
          What we build and support
        </div>

        <h1>
          Software, built around <span>how you actually work.</span>
        </h1>

        <p>
          Our eight products cover the industries we know best. Everything else
          — custom systems, integrations, deployment and the support that keeps
          it all running — is what this page is about.
        </p>

        <div className="services-buttons">
          <button
            className="services-primary-btn"
            onClick={() => navigate("/contact")}
          >
            Discuss your project
          </button>

          <button
            className="services-secondary-btn"
            onClick={() => {
              document
                .getElementById("services-products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See our products
          </button>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="services-strip">
        <span>✓ Custom development</span>
        <span>✓ Hardware integration</span>
        <span>✓ Cloud & on-premise</span>
        <span>✓ On-site training</span>
        <span>✓ Ongoing support</span>
      </section>

      {/* SERVICES */}
      <section className="services-list-section">
        <div className="services-section-heading">
          <span>WHAT WE DO</span>
          <h2>Eight things we're asked for most</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-points">
                {service.points.map((point, i) => (
                  <span key={i}>✓ {point}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="services-products-section" id="services-products">
        <div className="services-section-heading">
          <span>OUR PRODUCTS</span>

          <h2>Software that works for your business</h2>

          <p>
            Choose from our business solutions and explore the product that fits
            your requirements.
          </p>
        </div>

        <div className="services-products-grid">
          {products.map((product, index) => (
            <div
              className="services-product-card"
              key={index}
              onClick={() => navigate(product.path)}
            >
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <button>View Product →</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <span>LET'S WORK TOGETHER</span>

        <h2>Have a project in mind?</h2>

        <p>
          Tell us what you need and we'll help you find the right solution for
          your business.
        </p>

        <button onClick={() => navigate("/contact")}>
          Discuss your project →
        </button>
      </section>
    </div>
  );
}

export default Services;
