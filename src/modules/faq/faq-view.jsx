import { useState } from "react";

const FaqView = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Is it legal to buy Mad Honey from Nepal?",
      answer:
        "Yes, it’s legal to purchase Mad Honey from Nepal. However, checking your country’s import regulations is essential to ensure compliance with any restrictions or requirements.",
    },
    {
      question: "Where can I buy authentic Mad Honey from Nepal?",
      answer:
        "You can buy authentic Mad Honey from Nepal from trusted online vendors specializing in Himalayan products or from Nepalese beekeepers and honey producers.",
    },
    {
      question:
        "How can I ensure the authenticity of Mad Honey purchased from Nepal?",
      answer:
        "To ensure authenticity, purchase Mad Honey from reputable sources that provide detailed information about the honey’s origin, production methods, and certifications. Look for products sourced directly from Nepalese beekeepers or producers with a track record of quality.",
    },
    {
      question:
        "Are there any specific certifications I should look for when buying Mad Honey from Nepal?",
      answer:
        "While there may not be specific certifications for Mad Honey from Nepal, look for products that adhere to international quality standards for honey production, such as organic or Good Manufacturing Practices (GMP) certifications.",
    },
    {
      question:
        "What factors should I consider when choosing where to buy Mad Honey from Nepal?",
      answer:
        "Consider factors such as product quality, reputation of the seller, transparency in sourcing and production methods, shipping policies, and customer reviews when selecting a vendor to buy Mad Honey from Nepal.",
    },
    {
      question: "Can I buy Mad Honey from Nepal in bulk quantities?",
      answer:
        "Yes, many vendors offer the option to purchase Mad Honey from Nepal in bulk quantities. However, be sure to inquire about pricing, shipping costs, and any discounts available for bulk orders.",
    },
    {
      question:
        "Are there any restrictions on shipping Mad Honey from Nepal to my country?",
      answer:
        "WE shipped to all the countries except South Korea and North Korea.",
    },
  ];
  return (
    <section className="category-area section-padding">
      <div className="container mt-4">
        <div className="row align-items-center">
          {/* ------------Accordion Section----------------- */}
          <div className="col-lg-12">
            <div className="category-wrap">
              <div className="category-title">
                <h2>Frequently Asked Questions </h2>
                <p>
                  Answers to the most common questions about Mad Honey from
                  Nepal. Get all the details you need before making a purchase.
                </p>
              </div>
              {faqData.map((item, index) => (
                <div
                  className={`category-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{
                    background: "#f8f8f8",
                    padding: "15px 30px",
                    marginBottom: "15px",
                  }}
                  key={index}
                >
                  <div
                    className="category-content"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>{item.question}</h5>
                      <i
                        className={`ti-angle-${
                          activeIndex === index ? "down" : "right"
                        }`}
                      ></i>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="category-details">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="category-img">
              <img src="/assets/img/login.png" alt="Honey Category" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FaqView;
