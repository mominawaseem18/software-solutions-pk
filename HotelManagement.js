import React from "react";
import "../App.css";

function HotelManagement() {
  const modules = [
    {
      title: "Hotel Dashboard",
      image:
        "https://p16-hera-overseas.larksuitecdn.com/tos-mya-i-lojyj5t9n9/e3c8636f48bd4833a84682fc8e3f3c9d~tplv-lojyj5t9n9-image-v1%3A0%3A0.image",
      description:
        "See occupancy, revenue, bookings, arrivals and departures from one powerful dashboard.",
    },
    {
      title: "Room & Reservation",
      image: "https://www.hotelshow.gr/uploads/products-images/atZW1rBT9P.jpg",
      description:
        "Manage room availability, reservations, check-in and check-out with ease.",
    },
    {
      title: "Front Desk",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPv3eMwpvNitd50zEqYu455EmxeNh3jBgAxxTW6ApeA&s=10",
      description:
        "Give your reception team everything they need to manage guests and daily operations.",
    },
    {
      title: "Restaurant Management",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlf7x7N0GwKqpe2JxqwmiB2kNZW4h1zynYRotX9b-7A&s=10",
      description:
        "Manage restaurant orders, room service and guest food charges from one system.",
    },
    {
      title: "Housekeeping",
      image:
        "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/d9989f92-2885-4719-bb43-ff64e35b54a1.png?auto=format&fit=max&fm=png&h=450&w=600",
      description:
        "Track room cleaning, room status and housekeeping operations efficiently.",
    },
    {
      title: "Hotel Billing",
      image:
        "https://p16-hera-overseas.larksuitecdn.com/tos-mya-i-lojyj5t9n9/e3c8636f48bd4833a84682fc8e3f3c9d~tplv-lojyj5t9n9-image-v1%3A0%3A0.image",
      description:
        "Generate guest invoices and manage payments, discounts and outstanding balances.",
    },
    {
      title: "Guest Management",
      image: "https://s3.envato.com/files/730289272/05_preview.png",
      description:
        "Keep guest profiles, stays, booking history and payments organized.",
    },
    {
      title: "Business Reports",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8xrkRNfY1Ugu1_lfRL8iCgEArTBRzdsDyjhG27diug&s=10",
      description:
        "View occupancy, revenue, sales and important hotel performance reports.",
    },
  ];

  return (
    <div className="hotel-page">
      {/* HERO */}
      <section className="hotel-hero">
        <div className="hotel-hero-container">
          <div className="hotel-hero-content">
            <div className="hotel-breadcrumb">
              Home / Products / Hotel Management System
            </div>

            <div className="hotel-tag">HOTEL MANAGEMENT SYSTEM</div>

            <h1>
              Run your entire hotel —
              <br />
              <span>from front desk to check-out.</span>
            </h1>

            <p>
              A complete hotel management system for reservations, front desk,
              rooms, billing, restaurant, housekeeping, guests and business
              reports — all connected in one place.
            </p>

            <div className="hotel-buttons">
              <button className="hotel-primary-btn">Book a Free Demo</button>
            </div>

            <div className="hotel-stats">
              <div>
                <strong>24/7</strong>
                <span>Hotel operations</span>
              </div>

              <div>
                <strong>360°</strong>
                <span>Business control</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Connected system</span>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hotel-hero-image">
            <div className="hotel-image-window">
              <div className="hotel-window-bar">
                <span></span>
                <span></span>
                <span></span>

                <small>Hotel Management System</small>
              </div>

              <img
                src="https://p16-hera-overseas.larksuitecdn.com/tos-mya-i-lojyj5t9n9/e3c8636f48bd4833a84682fc8e3f3c9d~tplv-lojyj5t9n9-image-v1%3A0%3A0.image"
                alt="Hotel Management Dashboard"
              />

              <div className="hotel-image-caption">
                <strong>Complete hotel dashboard.</strong>
                Manage rooms, guests, reservations, billing and daily hotel
                operations from one system.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="hotel-feature-strip">
        <span>✓ Room Booking</span>
        <span>✓ Front Desk</span>
        <span>✓ Guest Management</span>
        <span>✓ Restaurant</span>
        <span>✓ Housekeeping</span>
        <span>✓ Billing</span>
        <span>✓ Reports</span>
      </div>

      {/* INTRO */}
      <section className="hotel-intro">
        <div className="hotel-intro-content">
          <div className="hotel-section-label">WHAT IT IS</div>

          <h2>
            Everything your hotel needs —
            <br />
            connected in one system
          </h2>

          <p>
            Hotel Management System brings your reservations, rooms, guests,
            billing, restaurant and housekeeping together. Your staff can manage
            daily operations without switching between multiple systems.
          </p>
        </div>
      </section>

      {/* MODULES WITH PICTURES */}
      <section className="hotel-modules">
        <div className="hotel-modules-header">
          <div className="hotel-section-label">HOTEL MODULES</div>

          <h2>Everything your hotel needs</h2>

          <p>
            Manage your complete hotel operation from connected and easy-to-use
            modules.
          </p>
        </div>

        <div className="hotel-modules-grid">
          {modules.map((module, index) => (
            <div className="hotel-module-card" key={index}>
              <div className="hotel-module-image">
                <img src={module.image} alt={module.title} />
              </div>

              <div className="hotel-module-content">
                <span className="hotel-module-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{module.title}</h3>

                <p>{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="hotel-problems">
        <div className="hotel-problems-header">
          <div className="hotel-section-label">THE PROBLEMS</div>

          <h2>What happens when hotel operations are disconnected</h2>
        </div>

        <div className="hotel-problems-grid">
          <div className="hotel-problem-card">
            <div className="hotel-problem-icon">◒</div>

            <h3>Room availability becomes difficult to track</h3>

            <p>
              When reservations are managed manually, reception teams can
              struggle to maintain accurate room availability.
            </p>
          </div>

          <div className="hotel-problem-card">
            <div className="hotel-problem-icon">▥</div>

            <h3>Guest billing gets complicated</h3>

            <p>
              Room charges, restaurant bills and other services can become
              difficult to manage without a connected system.
            </p>
          </div>

          <div className="hotel-problem-card">
            <div className="hotel-problem-icon">▣</div>

            <h3>Staff lose time between systems</h3>

            <p>
              When front desk, housekeeping and restaurant operations are
              separate, communication becomes slower and less efficient.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="hotel-who">
        <div className="hotel-who-header">
          <div className="hotel-section-label">WHO IT'S FOR</div>

          <h2>Built for modern hospitality businesses</h2>
        </div>

        <div className="hotel-who-grid">
          <div className="hotel-who-card">
            <h3>🏨 Hotels</h3>
            <p>
              Complete room, guest, billing and operational management for
              hotels.
            </p>
          </div>

          <div className="hotel-who-card">
            <h3>🏡 Guest Houses</h3>
            <p>
              Manage reservations, rooms and guest information with one
              connected system.
            </p>
          </div>

          <div className="hotel-who-card">
            <h3>🛎️ Resorts</h3>
            <p>
              Manage rooms, guests, restaurant services and daily resort
              operations.
            </p>
          </div>

          <div className="hotel-who-card">
            <h3>🏢 Hotel Managers</h3>
            <p>
              Get better control over rooms, staff, revenue and hotel
              performance.
            </p>
          </div>

          <div className="hotel-who-card">
            <h3>👨‍💼 Front Desk Teams</h3>
            <p>
              Handle reservations, check-in, check-out and guest billing
              efficiently.
            </p>
          </div>

          <div className="hotel-who-card">
            <h3>🍽️ Restaurant Teams</h3>
            <p>
              Manage restaurant orders and connect charges with hotel guests.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hotel-faq">
        <div className="hotel-faq-header">
          <div className="hotel-section-label">FAQ</div>

          <h2>Frequently asked questions</h2>

          <p>Everything you need to know about our Hotel Management System.</p>
        </div>

        <div className="hotel-faq-container">
          <details className="hotel-faq-item">
            <summary>
              Can I manage room reservations?
              <span>+</span>
            </summary>

            <p>
              Yes. The system is designed to manage room availability,
              reservations, check-in and check-out.
            </p>
          </details>

          <details className="hotel-faq-item">
            <summary>
              Can I manage hotel billing?
              <span>+</span>
            </summary>

            <p>
              Yes. Guest invoices, payments and hotel service charges can be
              managed from the system.
            </p>
          </details>

          <details className="hotel-faq-item">
            <summary>
              Does it support restaurant management?
              <span>+</span>
            </summary>

            <p>
              Yes. Restaurant operations can be connected with hotel guest
              accounts and billing.
            </p>
          </details>

          <details className="hotel-faq-item">
            <summary>
              Can housekeeping track room status?
              <span>+</span>
            </summary>

            <p>
              Yes. Housekeeping teams can manage room cleaning and room status.
            </p>
          </details>

          <details className="hotel-faq-item">
            <summary>
              Can I see hotel reports?
              <span>+</span>
            </summary>

            <p>
              Yes. Business reports can help you understand occupancy, sales,
              revenue and daily operations.
            </p>
          </details>

          <details className="hotel-faq-item">
            <summary>
              How can I see the system?
              <span>+</span>
            </summary>

            <p>
              You can book a free demo to see how the Hotel Management System
              can fit your business.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default HotelManagement;
