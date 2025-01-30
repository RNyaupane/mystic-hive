import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget d-flex gap-4 justify-content-between">
                <div className="logo widget-title">
                  <Icon
                    icon="fa-solid:shipping-fast"
                    width="80"
                    height="80"
                    className="text-white"
                  />{" "}
                </div>
                <div>
                  <p
                    className="text-white fw-bold fs-3 mb-0"
                    style={{ lineHeight: "3rem" }}
                  >
                    Discreet Shippping
                  </p>
                  <span className="text-light ">
                    Management consulting includes a broad range of activities,
                    and the many firms and their members often define these
                    practices.
                  </span>
                </div>
              </div>
              <div className="widget about-widget d-flex gap-4 mt-5">
                <div className="logo widget-title">
                  <Icon
                    icon="fa6-solid:table-cells-row-lock"
                    width="80"
                    height="80"
                    className="text-white"
                  />
                </div>
                <div>
                  <p
                    className="text-white fw-bold fs-3 mb-0"
                    style={{ lineHeight: "3rem" }}
                  >
                    Privacy Guranteed
                  </p>
                  <span className="text-light font-sm">
                    We will NOT sell or share your personal information beyond
                    what is necessary to complete your order.
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget tp-service-link-widget">
                <div className="widget-title">
                  <p
                    className="text-white fw-bold fs-3 mb-0"
                    style={{ lineHeight: "3rem" }}
                  >
                    Customer Support
                  </p>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin"></i>Kathmandu, Nepal
                    </li>
                    <li>
                      <i className="fi flaticon-call"></i>+150543894392 ( USA
                      Office )
                    </li>
                    <li>
                      <i className="fi flaticon-call"></i>+9779851198750 ( Nepal
                      Office)
                    </li>
                    <li>
                      <i className="fi flaticon-envelope"></i>
                      support@mystichive.com
                    </li>
                  </ul>
                </div>
                <div className="widget about-widget">
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* My Account Section */}
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <p
                    className="text-white fw-bold fs-3 mb-0"
                    style={{ lineHeight: "3rem" }}
                  >
                    Explore
                  </p>
                </div>
                <ul>
                  <li>
                    <Link to="">Shpping and return policy</Link>
                  </li>
                  <li>
                    <Link to="/profile">Order History</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link to="/disclaimer">Disclaimer</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>You will .</p>
                <form>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit">
                      <i className="ti-email"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="tp-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                Copyright &copy; 2019-2025. <Link to="/">Mystic Hive</Link>. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Shapes */}
      <div className="footer-shape1">
        <i className="fi flaticon-honeycomb"></i>
      </div>
      <div className="footer-shape2">
        <i className="fi flaticon-honey-1"></i>
      </div>
    </footer>
  );
};

export default Footer;
