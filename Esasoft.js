import React from "react";

function WhyEsasoft() {
  const features = [
    "Offline-first where it counts",
    "Real accounting inside",
    "Audit trails on every",
    "Local realities handled",
    "People you can actually reach",
  ];

  const cards = [
    {
      icon: "📊",
      title: "170+",
      text: "Built-in reports across our eight products — no separate BI tool needed.",
    },
    {
      icon: "🔐",
      title: "Role-based",
      text: "You decide, module by module, what each staff member can see and do.",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      text: "Bills, statements, shift timings and reminders shared straight from the system.",
    },
    {
      icon: "🖥️",
      title: "Hardware",
      text: "Thermal printers, scales, scanners and cash drawers supported out of the box.",
    },
  ];

  return (
    <section className="why-esasoft">
      <div className="why-container">
        {/* LEFT SIDE */}
        <div className="why-content">
          <span className="why-label">WHY ESASOFT</span>

          <h2>
            Built here. <span>Supported here.</span>
          </h2>

          <p className="why-description">
            Foreign software gets translated for Pakistan. Ours was written for
            it from the first line — which is why the things that matter locally
            are standard features, not paid add-ons.
          </p>

          <div className="why-list">
            {features.map((feature, index) => (
              <div className="why-list-item" key={index}>
                <span className="check-icon">✓</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <button className="why-button">See how it works →</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-cards">
          {cards.map((card, index) => (
            <div className="why-card" key={index}>
              <div className="why-card-icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyEsasoft;
