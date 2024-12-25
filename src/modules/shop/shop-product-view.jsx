import { Link } from "react-router-dom";

const ShopProductView = () => {
  return (
    <div className="col-lg-8">
      <div className="shop-section-top-inner">
        <div className="shoping-list">
          <ul className="nav nav-mb-3 main-tab" id="tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="grid-tab"
                data-bs-toggle="pill"
                data-bs-target="#grid"
                type="button"
                role="tab"
                aria-controls="grid"
                aria-selected="true"
              >
                <i className="fa fa-th "></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="list-tab"
                data-bs-toggle="pill"
                data-bs-target="#list"
                type="button"
                role="tab"
                aria-controls="list"
                aria-selected="false"
              >
                <i className="fa fa-list "></i>
              </button>
            </li>
          </ul>
        </div>
        {/* <div className="shoping-product">
          <span>Showing Products 1 - 9 Of 13 Result</span>
        </div> */}
        <div className="short-by">
          <ul>
            <li>Sort By :</li>
            <li>
              <select name="show">
                <option value="">Date posted</option>
                <option value="">Price high-low</option>
                <option value="">Price low-high</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="grid"
          role="tabpanel"
          aria-labelledby="grid-tab"
        >
          <div className="product-wrap">
            <div className="row align-items-center">
              {Array.from({ length: 12 }).map((item, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                >
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
                        <Link to="/product/2">Manuka Honey</Link>
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
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
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
        <div
          className="tab-pane fade product-list"
          id="list"
          role="tabpanel"
          aria-labelledby="list-tab"
        >
          <div className="product-wrap">
            <div className="row align-items-center">
              {Array.from({ length: 5 }).map((item, index) => (
                <div key={index} className="col-xl-12 col-12">
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
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aperiam consequuntur laudantium quod ratione nulla
                        modi? Repudiandae quidem dicta quia eveniet dignissimos.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductView;
