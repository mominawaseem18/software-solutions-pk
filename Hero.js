import "../App.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <div className="hero-badge">
            <span>ESASOFT</span>
            <p>Business software built in Pakistan</p>
          </div>

          <h1>
            Software that runs your whole
            <span> business</span> — not just your billing.
          </h1>

          <p className="hero-description">
            POS, ERP and management systems for restaurants, retail stores,
            pharmacies, hotels and housing schemes. Built for how businesses
            actually work — from pricing, GST, khata, CNC records, and documents
            that keep selling when the internet drops.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Book a Free Demo</button>

            <button className="secondary-btn">See Our Products</button>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="stat">
              <strong>8</strong>
              <span>Complete products</span>
            </div>

            <div className="stat">
              <strong>170+</strong>
              <span>Built-in reports</span>
            </div>

            <div className="stat">
              <strong>100%</strong>
              <span>Offline-capable POS</span>
            </div>

            <div className="stat">
              <strong>Lahore</strong>
              <span>Local support</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="software-card">
            <div className="software-top">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>

              <span className="software-title">MyPOS — restaurant billing</span>
            </div>

            <div className="software-body">
              <div className="software-sidebar">
                <div className="side-item active">Dashboard</div>
                <div className="side-item">Products</div>
                <div className="side-item">Orders</div>
                <div className="side-item">Customers</div>
                <div className="side-item">Reports</div>
              </div>

              <div className="dashboard">
                <div className="dashboard-header">
                  <h3>Restaurant Dashboard</h3>
                  <button>New Order</button>
                </div>

                <div className="dashboard-cards">
                  <div className="dashboard-card">
                    <small>Today's Sales</small>
                    <strong>Rs. 248,500</strong>
                  </div>

                  <div className="dashboard-card">
                    <small>Orders</small>
                    <strong>126</strong>
                  </div>

                  <div className="dashboard-card">
                    <small>Customers</small>
                    <strong>84</strong>
                  </div>
                </div>

                <div className="chart-area">
                  <div className="chart-title">Sales Overview</div>

                  <div className="bars">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
