import { Link } from "react-router-dom";

const HomeOffer = () => {
  return (
    <section className="offer-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="offer-img">
              <img src="/assets/img/honey.png" alt="Fresh Sunflower Honey" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="offer-wrap">
              <div className="offer-title">
                <small>Exclusive Deal for Honey Lovers</small>
                <h2>
                  Fresh Sunflower <span>Organic Honey</span> <br /> Up to 58%
                  Off!
                </h2>
              </div>
              <p>
                Enjoy the rich taste and natural goodness of our fresh sunflower
                honey. Sourced from the finest sunflower fields, it&apos;s
                packed with nutrients, antioxidants, and a smooth, floral
                sweetness perfect for every occasion.
              </p>
              <Link to="/shop" className="btn theme-btn" tabIndex="0">
                Shop Now <i className="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOffer;
