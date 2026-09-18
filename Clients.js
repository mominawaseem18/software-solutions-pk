import React from "react";
import { useNavigate } from "react-router-dom";
import Client from "./Client";

function Clients() {
  const navigate = useNavigate();

  const clients = [
    {
      name: "24 Foods",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREebJ1g2ZwUZDcXEgA_R0O6dmMxQCm5l-IQFtWaPvOZQ&s",
    },
    {
      name: "Ambarsariya Restaurant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpMK-fqVWklvV8KdwPK7LU5nQKNbctT83bno3YUtytg&s=10",
    },
    {
      name: "Bingo Burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETPi41hbDva3fchQ06Xe1iFNUFj2yqL4GWnuxR42VOg&s=10",
    },
    {
      name: "Brown & Brew",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsENgWVR79aLnNd1QWHNX3bOrwZufP6OE-bfIBCMH4yQ&s=10",
    },
    {
      name: "Bubbly Saji",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4ti8zPeNJMsHsO6VSMMLe_IwEF-VoWfUO7EqEd8BvA&s=10",
    },
  ];

  const products = [
    {
      name: "MyPOS",
      path: "/products/pos",
    },
    {
      name: "BillBaaz",
      path: "/products/billbaaz",
    },
    {
      name: "Munshi",
      path: "/products/munshi",
    },
    {
      name: "Hotel Management System",
      path: "/products/hotel",
    },
  ];

  return (
    <div className="clients-page">
      {/* HERO */}
      <section className="clients-hero">
        <div className="clients-breadcrumb">Home / Clients</div>

        <div className="clients-badge">
          <span>OUR CLIENTS</span>
          <small>Across Pakistan</small>
        </div>

        <h1>
          Every evening, these counters open on <span>our software.</span>
        </h1>

        <p>
          Karahi houses and shinwari restaurants, pizza and burger outlets,
          cafes and tea shops, superstores and rice mills. Different businesses,
          different problems — the same thing asked of us: make the counter
          fast, make the kitchen accurate, and make the numbers true.
        </p>

        <div className="clients-buttons">
          <button onClick={() => navigate("/contact")}>Book a Free Demo</button>

          <button
            className="secondary-btn"
            onClick={() =>
              document.getElementById("client-logos")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            See the logos
          </button>
        </div>
      </section>

      {/* LOGOS */}
      <section className="clients-logos-section" id="client-logos">
        <div className="clients-section-heading">
          <span>THE WALL</span>

          <h2>Some of the businesses running ESASOFT</h2>

          <p>
            Shown with each business's permission. If you'd like to speak to
            someone in your own line of work before you decide, ask us — we'll
            put you in touch.
          </p>
        </div>

        <div className="clients-logo-grid">
          {clients.map((client, index) => (
            <Client key={index} name={client.name} image={client.image} />
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="clients-products-section">
        <div className="clients-section-heading">
          <span>OUR PRODUCTS</span>

          <h2>Our Products</h2>

          <p>Explore our business solutions.</p>
        </div>

        <div className="clients-products-grid">
          {products.map((product, index) => (
            <div
              className="client-product-card"
              key={index}
              onClick={() => navigate(product.path)}
            >
              <div className="product-number">0{index + 1}</div>

              <h3>{product.name}</h3>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(product.path);
                }}
              >
                View Product →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Clients;
