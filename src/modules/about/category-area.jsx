import { Link } from "react-router-dom";

const CategoryArea = () => {
  return (
    <section className="category-area-s2 style-2 section-padding">
      <div className="container">
        <div className="category-wrap">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="category-item">
                <div className="category-icon">
                  <img src="/assets/img/category/icon-1.png" alt="" />
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
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="category-item">
                <div className="category-icon">
                  <img src="/assets/img/category/icon-2.png" alt="" />
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
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="category-item">
                <div className="category-icon">
                  <img src="/assets/img/category/icon-3.png" alt="" />
                </div>
                <div className="category-content">
                  <h2>
                    <Link to="/shop">Manuka Honey</Link>
                  </h2>
                  <p>
                    Explore our range of pure, natural honey sourced from the
                    finest flowers and crafted with care. Each variety offers a
                    unique flavor and health benefits, perfect for every taste
                    and need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryArea;
