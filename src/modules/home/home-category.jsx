import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <section className="category-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="category-wrap">
              <div className="category-title">
                <h2>Our Honey Collection</h2>
                <p>
                  Explore our range of pure, natural honey sourced from the
                  finest flowers and crafted with care. Each variety offers a
                  unique flavor and health benefits, perfect for every taste and
                  need.
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
                    A premium honey sourced from the nectar of wildflowers,
                    offering a rich, smooth taste with natural antioxidants.
                    Perfect for tea, desserts, or a spoonful of daily goodness.
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
                    Light and mildly sweet, sunflower honey is packed with
                    vitamins and minerals. A perfect natural sweetener for your
                    morning toast, yogurt, or smoothies.
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
                    Known for its powerful antibacterial properties, Manuka
                    honey supports immunity and digestion. Enjoy its rich,
                    earthy flavor straight from the spoon or in herbal teas.
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
