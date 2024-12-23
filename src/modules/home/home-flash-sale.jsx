const HomeFlashSale = () => {
  return (
    <section className="flash-Sale-area product-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>
                Flash <span>Sale</span> Items
              </h2>
              <div className="flash-text">
                <div className="product_timing">
                  <div data-countdown="2022-10-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="row align-items-center">
            {[
              {
                img: "/assets/images/product/1.png",
                discount: "28% OFF",
                name: "Manuka Honey",
                price: "$85.00",
                oldPrice: "$98.00",
                rating: 4.5,
              },
              {
                img: "/assets/images/product/8.png",
                discount: "45% OFF",
                name: "Mustard Flower Honey",
                price: "$95.00",
                oldPrice: "$108.00",
                rating: 5,
              },
              {
                img: "/assets/images/product/6.png",
                discount: "30% OFF",
                name: "Pure Hill Honey",
                price: "$75.00",
                oldPrice: "$88.00",
                rating: 4.3,
              },
              {
                img: "/assets/images/product/5.png",
                discount: "50% OFF",
                name: "Mango Flower Honey",
                price: "$155.00",
                oldPrice: "$198.00",
                rating: 5,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              >
                <div className="product-item">
                  <div className="product-img">
                    <img src={product.img} alt={product.name} />
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
                      <span>{product.discount}</span>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-single.html">{product.name}</a>
                    </h3>
                    <div className="product-btm">
                      <div className="product-price">
                        <ul>
                          <li>{product.price}</li>
                          <li>{product.oldPrice}</li>
                        </ul>
                      </div>
                      <div className="product-ratting">
                        <ul>
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i
                                className={`fa fa-star${
                                  i >= Math.floor(product.rating) ? "-o" : ""
                                }`}
                                aria-hidden="true"
                              ></i>
                            </li>
                          ))}
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

export default HomeFlashSale;
