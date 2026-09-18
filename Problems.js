import "../App.css";

function Problem() {
  const problems = [
    {
      icon: "●",
      title: "You don't know your real cost",
      text: "Sales figures are easy. Actual food cost, actual margin per item, actual profit after wastage and expenses — that's where the paperwork starts and the profit ends.",
    },
    {
      icon: "▣",
      title: "Leakage is invisible",
      text: "Unexplained discounts, stock variances, missing items, staff misuse — small losses add up fast. Without an audit trail, you don't know what you lost or who caused it.",
    },
    {
      icon: "▤",
      title: "Cloud-only systems stop",
      text: "Internet down, cloud hosting issue, or server outage? Your business shouldn't stop. Our POS products keep running even when the network is down.",
    },
  ];

  return (
    <section className="problem-section">
      <div className="problem-header">
        <p className="section-label">THE REAL PROBLEM</p>

        <h2>
          Most businesses don't lose money to bad sales.
          <br />
          They lose it to gaps.
        </h2>

        <p className="section-description">
          A register here, an Excel sheet there. WhatsApp group for the rest. By
          the time the numbers are added up, the money is already gone.
        </p>
      </div>

      <div className="problem-cards">
        {problems.map((problem, index) => (
          <div className="problem-card" key={index}>
            <div className="problem-icon">{problem.icon}</div>

            <h3>{problem.title}</h3>

            <p>{problem.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problem;
