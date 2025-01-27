import { Link } from "react-router-dom";

const AboutStart = () => {
  return (
    <section className="about-section section-padding p-t-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-5 col-12">
            <div className="video-area">
              <img src="/assets/img/abou2.jpg" alt />
              <div className="video-holder">
                <a
                  href="https://www.youtube.com/embed/Z54bL6kjyOI"
                  className="video-btn"
                  data-type="iframe"
                  tabIndex="0"
                >
                  <i className="fi flaticon-play-button"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-lg-7 col-12">
            <div className="about-area">
              <div className="about-wrap">
                <div className="about-title">
                  <small>About our Company</small>
                  <h2>
                    All in one <span>to make a</span> different structure
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  placeat consectetur sapiente tempore nobis iure quos neque
                  laboriosam, doloribus labore ad assumenda veritatis asperiores
                  possimus, tenetur id dolorum minus ipsa, quam eligendi odit
                  accusamus necessitatibus. Dicta aut delectus minima atque illo
                  hic, totam deleniti magni nam, ex perferendis, excepturi
                  impedit voluptates ipsam.
                </p>
                <Link to="/about" className="btn theme-btn" tabIndex="0">
                  More About<i className="fa fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStart;
