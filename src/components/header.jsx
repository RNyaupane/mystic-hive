import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpenWishlist, setIsOpenWishlist] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  return (
    <header id="header" className="site-header header-style-1 header-style-2">
      <nav className="navigation navbar navbar-expand-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="navbar-header">
                <button type="button" className="navbar-toggler open-btn">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar first-angle"></span>
                  <span className="icon-bar middle-angle"></span>
                  <span className="icon-bar last-angle"></span>
                </button>
                <Link className="navbar-brand" to="/">
                  <img src="/assets/images/logo.png" alt="" /> MYSTIC HIVE
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                id="navbar"
                className="collapse navbar-collapse navigation-holder"
              >
                <a className="menu-close" href="#">
                  <i className="fi flaticon-cancel"></i>
                </a>
                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <Link to="/about">About 0.1</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header-right d-flex">
                <div className="mini-cart">
                  <button
                    className="cart-toggle-btn"
                    onClick={() => setIsOpenCart(!isOpenCart)}
                  >
                    <i className="fi flaticon-bag"></i>
                    <span className="cart-count">2</span>
                  </button>
                  <div
                    className="mini-cart-content"
                    style={{
                      opacity: isOpenCart ? 1 : 0,
                      visibility: isOpenCart ? "inherit" : "hidden",
                      right: isOpenCart ? 0 : 1,
                    }}
                  >
                    <button
                      className="mini-cart-close"
                      onClick={() => setIsOpenCart(!isOpenCart)}
                    >
                      <i className="ti-close"></i>
                    </button>
                    <div className="mini-cart-items">
                      <div className="mini-cart-item clearfix">
                        <div className="mini-cart-item-image">
                          <a href="product-single.html">
                            <img
                              src="/assets/images/shop/mini-cart/img-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mini-cart-item-des">
                          <a href="product-single.html">Wildflower Honey</a>
                          <span className="mini-cart-item-price">$20.15</span>
                          <span className="mini-cart-item-quantity">x 1</span>
                        </div>
                      </div>
                      <div className="mini-cart-item clearfix">
                        <div className="mini-cart-item-image">
                          <a href="product-single.html">
                            <img
                              src="/assets/images/shop/mini-cart/img-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mini-cart-item-des">
                          <a href="product-single.html">Queen Bee Honey</a>
                          <span className="mini-cart-item-price">$13.25</span>
                          <span className="mini-cart-item-quantity">x 2</span>
                        </div>
                      </div>
                    </div>
                    <div className="mini-cart-action clearfix">
                      <span className="mini-checkout-price">
                        Total: $215.14
                      </span>
                      <div className="mini-btn">
                        <Link to="/checkout" className="view-cart-btn s1">
                          Checkout
                        </Link>
                        <Link to="/cart" className="view-cart-btn">
                          View Cart
                        </Link>
                      </div>
                    </div>
                    <div className="visible-icon">
                      <img
                        src="/assets/images/shop/mini-cart/bee2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="header-wishlist-form-wrapper">
                  <button
                    className="wishlist-toggle-btn"
                    onClick={() => setIsOpenWishlist(!isOpenWishlist)}
                  >
                    <i className="fi flaticon-heart"></i>
                    <span className="cart-count">2</span>
                  </button>
                  <div
                    className="mini-wislist-content"
                    style={{
                      opacity: isOpenWishlist ? 1 : 0,
                      visibility: isOpenWishlist ? "inherit" : "hidden",
                      right: isOpenWishlist ? 0 : 1,
                    }}
                  >
                    <button
                      className="mini-cart-close"
                      onClick={() => setIsOpenWishlist(!isOpenWishlist)}
                    >
                      <i className="ti-close"></i>
                    </button>
                    <div className="mini-cart-items">
                      <div className="mini-cart-item clearfix">
                        <div className="mini-cart-item-image">
                          <a href="product-single.html">
                            <img
                              src="/assets/images/shop/mini-cart/img-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mini-cart-item-des">
                          <a href="product-single.html">Wildflower Honey</a>
                          <span className="mini-cart-item-price">$20.15</span>
                          <span className="mini-cart-item-quantity">x 1</span>
                        </div>
                      </div>
                      <div className="mini-cart-item clearfix">
                        <div className="mini-cart-item-image">
                          <a href="product-single.html">
                            <img
                              src="/assets/images/shop/mini-cart/img-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mini-cart-item-des">
                          <a href="product-single.html">Queen Bee Honey</a>
                          <span className="mini-cart-item-price">$13.25</span>
                          <span className="mini-cart-item-quantity">x 2</span>
                        </div>
                      </div>
                    </div>
                    <div className="mini-cart-action clearfix">
                      <span className="mini-checkout-price">
                        Total: $215.14
                      </span>
                      <div className="mini-btn">
                        <Link to="/wishlist" className="view-cart-btn">
                          View Wishlist
                        </Link>
                      </div>
                    </div>
                    <div className="visible-icon">
                      <img
                        src="/assets/images/shop/mini-cart/bee2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="view-btn">
                  <Link
                    className="theme-btn"
                    to="/auth/login"
                    style={{
                      padding: "6px 20px",
                      borderRadius: "22px",
                      textTransform: "capitalize",
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
