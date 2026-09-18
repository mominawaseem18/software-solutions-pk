import React from "react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      text: "We understand your business, workflow and the problems you want to solve.",
    },
    {
      number: "02",
      title: "See it in action",
      text: "Get a personalized demo of the right software for your business.",
    },
    {
      number: "03",
      title: "We set it up",
      text: "Our team configures the system, imports your data and connects the hardware.",
    },
    {
      number: "04",
      title: "Your team gets trained",
      text: "We train your staff so everyone knows exactly how to use the system.",
    },
  ];

  return (
    <section className="how-section">
      <div className="how-header">
        <p className="section-label">HOW IT WORKS</p>

        <h2>From first conversation to fully running.</h2>

        <p>We handle the setup so you can focus on running your business.</p>
      </div>

      <div className="how-grid">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <span className="how-number">{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

            {index !== steps.length - 1 && <span className="how-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
