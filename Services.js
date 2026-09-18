import "../App.css";

function Services() {
  const services = [
    {
      title: "Custom Software Development",
      text: "Software solutions designed around your exact business requirements.",
    },
    {
      title: "POS & ERP Solutions",
      text: "Complete point-of-sale and business management systems for daily operations.",
    },
    {
      title: "Web Development",
      text: "Fast, responsive and professional websites for modern businesses.",
    },
    {
      title: "Mobile App Development",
      text: "Powerful mobile applications built for Android and iOS platforms.",
    },
    {
      title: "UI/UX Design",
      text: "Simple and user-friendly interfaces that make software easy to use.",
    },
    {
      title: "Cloud Solutions",
      text: "Reliable cloud-based solutions to keep your business connected.",
    },
    {
      title: "Software Support",
      text: "Ongoing technical support, maintenance and software updates.",
    },
    {
      title: "IT Consulting",
      text: "Expert guidance to help you choose the right technology for your business.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="section-label">OUR SERVICES</p>

        <h2>
          Technology that works
          <br />
          for your business
        </h2>

        <p>
          From software development to ongoing support, we help businesses
          build, manage and grow with the right technology.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-number">0{index + 1}</div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>

      <div className="services-button">
        <button>See All Services →</button>
      </div>
    </section>
  );
}

export default Services;
