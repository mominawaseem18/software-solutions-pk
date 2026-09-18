import React from "react";

function Industries() {
  const industries = [
    {
      icon: "🍽️",
      title: "Restaurants & Cafes",
      text: "Dine-in, fast food, cloud kitchens and more.",
    },
    {
      icon: "🛒",
      title: "Retail & Supermarkets",
      text: "Inventory, sales and complete retail management.",
    },
    {
      icon: "💊",
      title: "Pharmacies",
      text: "Medical stores with stock and expiry management.",
    },
    {
      icon: "🏨",
      title: "Hotels & Guest Houses",
      text: "Bookings, rooms and complete hotel operations.",
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      text: "Production, inventory and business operations.",
    },
    {
      icon: "💇",
      title: "Salons & Beauty",
      text: "Appointments, staff and customer management.",
    },
    {
      icon: "🚗",
      title: "Auto Workshops",
      text: "Job cards, parts and workshop management.",
    },
    {
      icon: "📦",
      title: "Wholesale & Distribution",
      text: "Orders, stock and distribution management.",
    },
  ];

  return (
    <section className="industries-section">
      <div className="industries-header">
        <p className="section-label">WHO WE WORK WITH</p>

        <h2>Industries we serve</h2>

        <p>Software built around the way different businesses actually work.</p>
      </div>

      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <div className="industry-icon">{industry.icon}</div>

            <h3>{industry.title}</h3>

            <p>{industry.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Industries;
