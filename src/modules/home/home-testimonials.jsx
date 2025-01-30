import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import { profileApi } from "../../redux/api-service/profileApi";

const HomeTestimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  const fetchTestimonials = async () => {
    try {
      const res = await profileApi.getTestimonials();
      setTestimonial(res?.data);
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
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
            {testimonial &&
              testimonial?.map((item, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="testimonial-img">
                    <img src={item?.author_photo} alt={item.author_name} />
                    <div className="t-quote">
                      <i className="fi flaticon-left-quote"></i>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>{item?.message}</p>
                    <div className="testimonial-author">
                      <h3>{item?.author_name}</h3>
                      <span>{item.author_position}</span>
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
