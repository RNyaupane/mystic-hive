import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeTestimonials = () => {
  const testimonials = [
    {
      img: "/assets/images/testimonial/1.png",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book has survived not has been the industry's standard consectetur adipisicing elit only five centuries the industry's standard consectetur.",
      name: "Rachel Matthews",
      position: "CEO, Deixfes",
    },
    {
      img: "/assets/images/testimonial/3.png",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book has survived not has been the industry's standard consectetur adipisicing elit only five centuries the industry's standard consectetur.",
      name: "David Warner",
      position: "CEO, TBR",
    },
    {
      img: "/assets/images/testimonial/2.png",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book has survived not has been the industry's standard consectetur adipisicing elit only five centuries the industry's standard consectetur.",
      name: "Ken Williamson",
      position: "CEO, Bexim",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Optional: Add navigation buttons if required
  };

  return (
    <section className="testimonial-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>
                Client <span>Testimonial</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry standard consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-wrap">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index}>
                <div className="testimonial-img">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className="t-quote">
                    <i className="fi flaticon-left-quote"></i>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.position}</span>
                  </div>
                  <div className="t-content-quote">
                    <i className="fi flaticon-left-quote"></i>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
