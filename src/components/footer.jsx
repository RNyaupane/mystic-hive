const Footer = () => {
  return (
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <a href="index.html">
                    <img src="/assets/images/logo.png" alt="Annahl Logo" />{" "}
                  </a>
                </div>
                <p>
                  Management consulting includes a broad range of activities,
                  and the many firms and their members often define these
                  practices.
                </p>
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

            {/* Contact Section */}
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget tp-service-link-widget">
                <div className="widget-title">
                  <h3>Contact</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin"></i>7 Green Lake Street
                      Crawfordsville, IN 47933
                    </li>
                    <li>
                      <i className="fi flaticon-call"></i>+1 800 123 456 789
                    </li>
                    <li>
                      <i className="fi flaticon-envelope"></i>Annahl@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* My Account Section */}
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>My Account</h3>
                </div>
                <ul>
                  <li>
                    <a href="project.html">Our Projects</a>
                  </li>
                  <li>
                    <a href="order.html">Order History</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>You will be notified when something new appears.</p>
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
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="tp-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                Copyright &copy; 2019-2025. <a href="index.html">Mystic Hive</a>
                . All Rights Reserved.
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
