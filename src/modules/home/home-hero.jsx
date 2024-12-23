const HomeHero = () => {
  return (
    <section className="hero hero-style-1">
      <div className="hero-slider">
        <div className="slide">
          <img
            src="/assets/images/slider/slide-1.jpg"
            alt=""
            className="slider-bg"
          />
          <div className="container">
            <div className="row">
              <div className="col col-lg-5 slide-caption">
                <div className="slide-title">
                  <h2>
                    <span>Fresh</span> Organic <span>Honey</span>
                  </h2>
                </div>
                <div className="btns">
                  <a href="shop.html" className="btn theme-btn">
                    Shop Now <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-image">
            <div className="simg-1">
              <img src="/assets/images/slider/img-1.png" alt="" />
            </div>
            <div className="simg-2">
              <img src="/assets/images/slider/img-2.png" alt="" />
            </div>
          </div>
          <div className="hero-shape-img">
            <img src="/assets/images/slider/img-3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
