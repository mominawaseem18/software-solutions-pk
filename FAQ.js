import React, { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "Do your systems work without internet?",
      answer:
        "Our POS products run on your computers over your local network, so billing, printing, and reports keep working even when the internet disconnects.",
    },
    {
      question: "Do you customize the software for our business?",
      answer:
        "Yes. We configure the system according to your business requirements and workflow.",
    },
    {
      question: "What hardware do we need?",
      answer:
        "Hardware depends on your business. We support commonly used printers, scanners, cash drawers and other required devices.",
    },
    {
      question: "How long does it take to go live?",
      answer:
        "The timeline depends on the size and requirements of your business, but we guide you through setup and training.",
    },
    {
      question: "Where is our data stored, and is it safe?",
      answer:
        "Your business data is handled with appropriate security measures and access controls.",
    },
    {
      question: "Do you provide training and after-sales support?",
      answer:
        "Yes. We provide training and ongoing support so your team can use the system confidently.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <p className="section-label">QUESTIONS</p>

        <h2>Frequently asked</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
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
  );
}

export default FAQ;
