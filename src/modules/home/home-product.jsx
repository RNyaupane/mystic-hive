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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/1.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
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
                    <a href="product-single.html">Manuka Honey</a>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/2.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>-25%</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Raw Honey</a>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>$100.00</li>
                        <li>$158.00</li>
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
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/3.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>New</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Wildflower Honey</a>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>$75.00</li>
                        <li>$88.00</li>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/4.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Queen Bee Honey</a>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/8.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>-18%</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Mustard Flower Honey </a>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>$95.00</li>
                        <li>$108.00</li>
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
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/6.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>New</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Pure Hill Honey</a>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>$75.00</li>
                        <li>$88.00</li>
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
                          <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </span>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/7.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>-15%</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Black Seed Flower Honey</a>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>$75.00</li>
                        <li>$99.00</li>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="product-item">
                <div className="product-img">
                  <img src="/assets/images/product/5.png" alt="" />
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        href="cart.html"
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
                        href="wishlist.html"
                      >
                        <i className="fi flaticon-like"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>New</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <a href="product-single.html">Mango Flower Honey</a>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>$155.00</li>
                        <li>$198.00</li>
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
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
