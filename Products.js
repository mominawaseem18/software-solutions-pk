import "../App.css";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      name: "MyPOS",
      subtitle: "Restaurant Management & POS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfqjCWXb9VzKun_4q-x_Acv4UU14r0hJ7roqjaF_zYw&s=10",
      description:
        "Run your restaurant — counter, kitchen, store and delivery — from one place. Manage recipes, tables, live screens and your real food cost per dish.",
      tags: [
        "Counter & dine-in billing",
        "Kitchen Display",
        "Table waiter app",
      ],
      link: "/products/pos",
    },

    {
      name: "BillBaaz",
      subtitle: "Office Restaurant POS & Accounts",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIWjsjT-Fi1SMuHxBSL0T9HdHLnm6TB2N7stuiT-X1g&s=10",
      description:
        "The offline restaurant, retail and business machine — no cloud, no internet dependency. Built for fast billing, inventory and accounting.",
      tags: ["No internet needed", "Multi-user", "GST", "Payroll"],
      link: "/products/billbaaz",
    },

    {
      name: "Munshi",
      subtitle: "Supermarket & Pharmacy POS + ERP",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOyKXCv9O8EcOuUd929f7kFCTffiSB8mcgEZql9mjRw&s=10",
      description:
        "Your shop's munshi — never sleeps, never forgets. Barcode and weighing-scale billing with credit limits, batch & expiry control, retail and wholesale accounting.",
      tags: [
        "Barcode billing",
        "Weighing scale",
        "Expiry / batch",
        "Credit & expiry",
      ],
      link: "/products/munshi",
    },

    {
      name: "Hotel Management System",
      subtitle: "Front desk to check-out",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJ1p2bxcUEnQql30g6aFMsTE15thHkKBmv2Ic0NlulA&s=10",
      description:
        "Run your entire hotel from one screen. Bookings, check-in/out, GDS, invoicing, restaurant and staff management — everything in one place.",
      tags: [
        "Room booking",
        "Restaurant & room service",
        "Housekeeping",
        "Reports",
      ],

      // IMPORTANT
      link: "/products/hotel",
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <p className="section-label">OUR PRODUCTS</p>

        <h2>Complete software solutions for your business</h2>

        <p>Each product is built for the specific needs of your business.</p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-wrapper" key={index}>
            <Link to={product.link} className="product-link">
              <div className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>

                  <span className="product-subtitle">{product.subtitle}</span>

                  <p>{product.description}</p>

                  <div className="product-tags">
                    {product.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                  </div>

                  <span className="product-explore">
                    Explore {product.name} →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
