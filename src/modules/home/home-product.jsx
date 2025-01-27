import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/reducers/product/productSlice";

const HomeProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="product-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>
                100% Fresh <span>Honey</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry&apos;s standard consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="row align-items-center">
            {Array.from({ length: 8 }).map((i, idx) => (
              <div
                key={idx}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              >
                <div className="product-item">
                  <div className="product-img">
                    <img src="/assets/img/product/1.png" alt="" />
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Add to Cart"
                        >
                          <i className="fi flaticon-shopping-cart"></i>
                        </a>
                      </li>
                      <li
                        data-bs-toggle="modal"
                        data-bs-target="#popup-quickview"
                      >
                        <button
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Quick View"
                        >
                          <i className="fi ti-eye"></i>
                        </button>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Add to Wishlist"
                        >
                          <i className="fi flaticon-like"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="offer-thumb">
                      <span>-28%</span>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="#">Manuka Honey</a>
                    </h3>
                    <div className="product-btm">
                      <div className="product-price">
                        <ul>
                          <li>$85.00</li>
                          <li>$98.00</li>
                        </ul>
                      </div>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
