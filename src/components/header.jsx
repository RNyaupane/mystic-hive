import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavWishlist from "../pages/wishlist/nav-wishlist";
import EmptyContent from "./empty-content";

const Header = () => {
  const [isOpenWishlist, setIsOpenWishlist] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  const { user, isAuthenticated, accessToken } = useSelector(
    (state) => state.auth
  );
  const wishListItem = useSelector((state) => state.wishlist?.items);
  const { items } = useSelector((state) => state.cart);

  const [boolean, setBoolean] = useState(false);

  const total = items?.reduce(
    (sum, item) => sum + parseFloat(item?.sub_total),
    0
  );

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <header
        id="header"
        style={{ minHeight: "50px" }}
        className={`site-header header-style-1 header-style-2 relative`}
        onClick={() => {
          if (boolean) setBoolean(false);
        }}
      >
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
                  <Link
                    className="navbar-brand"
                    to="/"
                    style={{ maxWidth: "120px" }}
                  >
                    <img
                      src="/assets/img/logo1.png"
                      alt=""
                      className="d-none d-md-block"
                    />

                    <img
                      src="/assets/img/logo-mobile.png"
                      className="d-md-none"
                      alt=""
                      width={50}
                    />
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
                      <Link to="/about">About</Link>
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
                  {isAuthenticated && accessToken && user && (
                    <>
                      <div className="header-profile-form-wrapper">
                        <Link to="/profile">
                          <button className="profile-toggle-btn">
                            <i className="fi flaticon-user"></i>
                          </button>
                        </Link>
                        {/* {boolean && (
                          <div className="header-profile-content ">
                            <ul>
                              <li>
                                <Link to="/profile">Profile</Link>
                              </li>
                              <li>
                                <Link>Settings</Link>
                              </li>
                              <li>
                                <Link>Order History</Link>
                              </li>
                              <li>
                                <Link onClick={handleLogout}>Logout</Link>
                              </li>
                            </ul>
                          </div>
                        )} */}
                      </div>
                      <div className="mini-cart">
                        <button
                          className="cart-toggle-btn"
                          onClick={() => setIsOpenCart(!isOpenCart)}
                        >
                          <i className="fi flaticon-bag"></i>
                          <span className="cart-count">
                            {items?.length || 0}
                          </span>
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
                            <i className="ti-close text-white"></i>
                          </button>
                          <div className="mini-cart-items">
                            {items?.length > 0 ? (
                              items?.map((item, index) => (
                                <div
                                  className="mini-cart-item clearfix"
                                  key={index}
                                >
                                  <div className="mini-cart-item-image">
                                    <Link to={`/product/${item?.id}`}>
                                      <img
                                        src={
                                          item?.product?.images?.[0]?.image ||
                                          "/assets/img/product/default-product.png"
                                        }
                                        alt={item?.product?.name}
                                      />
                                    </Link>
                                  </div>
                                  <div className="mini-cart-item-des">
                                    <Link to={`/product/${item?.id}`}>
                                      {item?.product?.name}
                                    </Link>
                                    <span className="mini-cart-item-price">
                                      {item?.product?.name}
                                    </span>
                                    <span className="mini-cart-item-quantity">
                                      {item?.quantity}
                                    </span>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <EmptyContent title="No Items in Cart " />
                            )}
                          </div>
                          <div className="mini-cart-action clearfix">
                            <span className="mini-checkout-price">
                              Total: ${total}
                            </span>
                            <div
                              className="mini-btn"
                              onClick={() => setIsOpenCart(!isOpenCart)}
                            >
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
                              src="/assets/img/shop/mini-cart/bee2.png"
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
                          <span className="cart-count">
                            {wishListItem?.length || 0}
                          </span>
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
                            <i className="ti-close text-white"></i>
                          </button>
                          <NavWishlist />
                          <div className="mini-cart-action clearfix">
                            <div
                              className="mini-btn"
                              onClick={() => setIsOpenWishlist(!isOpenWishlist)}
                            >
                              <Link to="/wishlist" className="view-cart-btn">
                                View Wishlist
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {!isAuthenticated && !accessToken && (
                    <div className="view-btn ">
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
