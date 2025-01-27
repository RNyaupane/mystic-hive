const HomeService = () => {
  const services = [
    {
      img: "/assets/img/support/1.png",
      title: "Free Shipping",
      description: "Order Over $560",
    },
    {
      img: "/assets/img/support/2.png",
      title: "Easy Payment",
      description: "100% Secure Payment",
    },
    {
      img: "/assets/img/support/3.png",
      title: "24/7 Support",
      description: "Any time Support",
    },
  ];

  return (
    <div className="service-area">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service-item">
                <div className="service-icon">
                  <span>
                    <img
                      draggable="false"
                      src={service.img}
                      alt={service.title}
                    />
                  </span>
                </div>
                <div className="service-icon-text">
                  <h2>{service.title}</h2>
                  <span>{service.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
