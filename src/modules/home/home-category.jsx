import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <section className="category-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="category-wrap">
              <div className="category-title">
                <h2>Our Honey Category</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, eos fugit officiis error ipsum, dolor ducimus nam
                  ratione nulla deleniti inventore blanditiis.
                </p>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <img
                    src="/assets/img/category/icon-1.png"
                    alt="Queen Bee Honey Icon"
                  />
                </div>
                <div className="category-content">
                  <h2>
                    <Link to="/shop">Queen Bee Honey</Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing industry
                    has been the industry&apos;s standard eos fugit
                    industry&apos;s standard consectetur ipsum.
                  </p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <img
                    src="/assets/img/category/icon-2.png"
                    alt="Sunflower Honey Icon"
                  />
                </div>
                <div className="category-content">
                  <h2>
                    <Link to="/shop">Sunflower Honey</Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing industry
                    has been the industry&apos;s standard eos fugit
                    industry&apos;s standard consectetur ipsum.
                  </p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <img
                    src="/assets/img/category/icon-3.png"
                    alt="Manuka Honey Icon"
                  />
                </div>
                <div className="category-content">
                  <h2>
                    <Link to="/shop">Manuka Honey</Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing industry
                    has been the industry&apos;s standard eos fugit
                    industry&apos;s standard consectetur ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="category-img">
              <img
                src="/assets/img/category/category.jpg"
                alt="Honey Category"
              />
              <div className="ct-img">
                <img
                  src="/assets/img/category/icon-4.png"
                  alt="Decoration Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
