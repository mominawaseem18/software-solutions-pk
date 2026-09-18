import React from "react";
import "../App.css";

function Munshi() {
  return (
    <div className="pos-page munshi-page">
      {/* ================= HERO ================= */}
      <section className="pos-hero">
        <div className="pos-hero-container">
          <div className="pos-hero-content">
            <div className="pos-breadcrumb">Home / Products / Munshi</div>

            <div className="pos-tag">MUNSHI</div>

            <h1>
              Your shop's munshi —
              <br />
              billing, inventory,
              <br />
              <span>accounts — all in one system.</span>
            </h1>

            <p>
              Munshi is a complete supermarket, retail and pharmacy management
              system built for fast billing, inventory, purchasing, credit
              management and accounting.
            </p>

            <div className="pos-buttons">
              <button className="pos-primary-btn">Book a Free Demo</button>
            </div>

            <div className="pos-stats">
              <div>
                <strong>100%</strong>
                <span>Complete POS</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Stock tracking</span>
              </div>

              <div>
                <strong>360°</strong>
                <span>Business control</span>
              </div>
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="pos-hero-image">
            <div className="pos-image-window">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>

                <small>Munshi — supermarket & pharmacy management</small>
              </div>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWG8s0ItiWoyXmTehEF6VZ_xqrJbK4gKpFs6TDJ5Vjw&s=10"
                alt="Munshi Dashboard"
              />

              <div className="image-caption">
                <strong>The Munshi dashboard.</strong>
                Manage billing, inventory, purchasing, customers, suppliers and
                accounts from one system.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}

      <div className="pos-feature-strip">
        <span>✓ Barcode billing</span>

        <span>✓ Pharmacy management</span>

        <span>✓ Inventory control</span>

        <span>✓ Batch & expiry</span>

        <span>✓ Weighing scale</span>

        <span>✓ Retail & wholesale</span>

        <span>✓ Credit management</span>
      </div>

      {/* ================= WHAT IT IS ================= */}

      <section className="pos-intro">
        <div className="pos-intro-content">
          <div className="pos-section-label">WHAT IT IS</div>

          <h2>
            Everything your shop needs —
            <br />
            from barcode billing to accounts
          </h2>

          <p>
            Munshi brings your retail, supermarket and pharmacy operations
            together in one complete system. Manage products, stock, purchases,
            customers, suppliers, credit, billing and accounting without
            depending on multiple applications.
          </p>
        </div>
      </section>

      {/* ================= WHY MUNSHI ================= */}

      <section className="why-mypos">
        <div className="why-mypos-header">
          <div className="pos-section-label">WHY MUNSHI</div>

          <h2>Powerful modules for complete shop management</h2>
        </div>

        <div className="why-mypos-grid">
          {/* 1 */}
          <div className="why-card">
            <span>1</span>

            <h3>Barcode Billing</h3>

            <p>
              Scan products quickly and generate accurate bills while keeping
              product and pricing information connected with your inventory.
            </p>
          </div>

          {/* 2 */}
          <div className="why-card">
            <span>2</span>

            <h3>Pharmacy Management</h3>

            <p>
              Manage medicines, batches, expiry dates, suppliers and pharmacy
              sales from one system.
            </p>
          </div>

          {/* 3 */}
          <div className="why-card">
            <span>3</span>

            <h3>Inventory Management</h3>

            <p>
              Track stock movement, available quantities, purchases, sales,
              wastage and adjustments.
            </p>
          </div>

          {/* 4 */}
          <div className="why-card">
            <span>4</span>

            <h3>Batch & Expiry Control</h3>

            <p>
              Track product batches and expiry dates so your business can
              identify products that need attention.
            </p>
          </div>

          {/* 5 */}
          <div className="why-card">
            <span>5</span>

            <h3>Weighing Scale Billing</h3>

            <p>
              Support weight-based products and connect weighing operations with
              fast counter billing.
            </p>
          </div>

          {/* 6 */}
          <div className="why-card">
            <span>6</span>

            <h3>Retail & Wholesale</h3>

            <p>
              Manage retail and wholesale pricing while keeping sales and
              customer information organized.
            </p>
          </div>

          {/* 7 */}
          <div className="why-card">
            <span>7</span>

            <h3>Credit Management</h3>

            <p>
              Track customer credit, outstanding balances, payment history and
              credit limits.
            </p>
          </div>

          {/* 8 */}
          <div className="why-card">
            <span>8</span>

            <h3>Purchasing & Suppliers</h3>

            <p>
              Manage suppliers, purchase invoices, product costs and incoming
              stock in one place.
            </p>
          </div>

          {/* 9 */}
          <div className="why-card">
            <span>9</span>

            <h3>Reports & Accounting</h3>

            <p>
              View sales, purchases, stock, profit, credit and accounting
              reports for better business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROBLEMS ================= */}

      <section className="pos-leaks">
        <div className="pos-leaks-header">
          <div className="pos-section-label">THE PROBLEMS</div>

          <h2>What happens when shop management is disconnected</h2>
        </div>

        <div className="pos-leaks-grid">
          <div className="pos-leak-card">
            <div className="leak-icon">◒</div>

            <h3>Stock becomes difficult to track</h3>

            <p>
              When purchases and sales are managed separately, it becomes
              difficult to know the actual stock available in the shop.
            </p>
          </div>

          <div className="pos-leak-card">
            <div className="leak-icon">▥</div>

            <h3>Expiry management becomes risky</h3>

            <p>
              Pharmacies and grocery businesses need proper batch and expiry
              tracking to identify products before they become a problem.
            </p>
          </div>

          <div className="pos-leak-card">
            <div className="leak-icon">▣</div>

            <h3>Credit records get complicated</h3>

            <p>
              Customer credit and outstanding payments can become difficult to
              manage when records are maintained manually.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHO IT'S FOR ================= */}

      <section className="who-mypos">
        <div className="who-mypos-header">
          <div className="pos-section-label">WHO IT'S FOR</div>

          <h2>Built for businesses that manage products every day</h2>
        </div>

        <div className="who-mypos-grid">
          <div className="who-card">
            <h3>🛒 Supermarkets</h3>

            <p>
              Fast barcode billing, inventory and customer management for
              supermarket operations.
            </p>
          </div>

          <div className="who-card">
            <h3>💊 Pharmacies</h3>

            <p>
              Manage medicines, batches, expiry dates, suppliers and pharmacy
              billing.
            </p>
          </div>

          <div className="who-card">
            <h3>🏪 Retail Shops</h3>

            <p>
              Manage products, sales, purchasing and customer credit from one
              system.
            </p>
          </div>

          <div className="who-card">
            <h3>📦 Wholesale Businesses</h3>

            <p>Manage wholesale pricing, customers, purchases and inventory.</p>
          </div>

          <div className="who-card">
            <h3>🧾 Cashiers</h3>

            <p>
              Quickly create accurate bills using barcode and product-based
              billing.
            </p>
          </div>

          <div className="who-card">
            <h3>👨‍💼 Shop Owners</h3>

            <p>
              Get sales, stock, profit and credit information for better
              business decisions.
            </p>
          </div>

          <div className="who-card">
            <h3>👥 Store Managers</h3>

            <p>
              Control inventory, purchasing, employees and daily shop
              operations.
            </p>
          </div>

          <div className="who-card">
            <h3>🏭 Distributors</h3>

            <p>
              Manage products, customers, suppliers, wholesale sales and stock
              movement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SCREENSHOTS ================= */}

      <section className="munshi-screens">
        <div className="munshi-screens-header">
          <div className="pos-section-label">MUNSHI MODULES</div>

          <h2>Everything connected in one system</h2>

          <p>
            Manage your daily shop operations from simple and connected screens.
          </p>
        </div>

        <div className="munshi-screens-grid">
          <div className="munshi-screen-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96CwM6zEBgXfbI6Lmr8LkqIb7cyT3RQbOdGcrEiQjGw&s=10"
              alt="Munshi Billing"
            />

            <h3>Fast Barcode Billing</h3>

            <p>Quickly scan products and generate customer bills.</p>
          </div>

          <div className="munshi-screen-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAw9P9HlpDtp8skgKHMJWszMGWdJVZN4HbDsrRQcfdQ&s=10"
              alt="Munshi Inventory"
            />

            <h3>Inventory Management</h3>

            <p>Track stock, purchases, sales and product movement.</p>
          </div>

          <div className="munshi-screen-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3jFI8Lgux_l9udKqk7Ja-CfbyQl67NOspy00FXe2GA&s=10"
              alt="Munshi Pharmacy"
            />

            <h3>Pharmacy & Expiry</h3>

            <p>Manage medicines, batches and expiry information.</p>
          </div>

          <div className="munshi-screen-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNakkuYRAxVjshh_Y-Lpwr5OM570oF_XcWu216zk0zjA&s=10"
              alt="Munshi Reports"
            />

            <h3>Business Reports</h3>

            <p>View sales, stock, profit and business performance.</p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section" id="faq">
        <div className="faq-header">
          <div className="section-label">FAQ</div>

          <h2>Frequently asked questions</h2>

          <p>
            Everything you need to know about Munshi supermarket, retail and
            pharmacy management system.
          </p>
        </div>

        <div className="faq-container">
          <details className="faq-item">
            <summary>
              Can Munshi handle barcode billing?
              <span>+</span>
            </summary>

            <p>
              Yes. Munshi supports barcode-based billing for fast and accurate
              retail and supermarket sales.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Can Munshi manage pharmacy products?
              <span>+</span>
            </summary>

            <p>
              Yes. Pharmacy products can be managed with batch and expiry
              information.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Does Munshi manage inventory?
              <span>+</span>
            </summary>

            <p>
              Yes. Munshi can manage purchases, sales, stock movement,
              adjustments and inventory.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Does Munshi support weighing scales?
              <span>+</span>
            </summary>

            <p>
              Yes. Munshi is designed to support weight-based product billing.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Can I manage customer credit?
              <span>+</span>
            </summary>

            <p>
              Yes. Customer credit, outstanding balances and payment records can
              be managed.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Can I use Munshi for wholesale?
              <span>+</span>
            </summary>

            <p>
              Yes. Munshi can manage retail as well as wholesale products,
              pricing and customers.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Does Munshi provide reports?
              <span>+</span>
            </summary>

            <p>
              Yes. Munshi provides business information covering sales,
              purchases, stock and other important operations.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              How can I see Munshi?
              <span>+</span>
            </summary>

            <p>
              You can book a free demo to see Munshi and understand how it can
              fit your business.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Munshi;
