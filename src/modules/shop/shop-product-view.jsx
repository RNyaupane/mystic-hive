/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PreLoader from "../../components/pre-loader";
import { productApi } from "../../redux/api-service/productApi";
import { toast } from "react-toastify";
import { createCart, getCartItem } from "../../redux/reducers/cartSlice";
import { addItemToWishList } from "../../redux/reducers/wishlistSlice";
import EmptyContent from "../../components/empty-content";

const ShopProductView = ({ products, isLoading, onSortChange }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.cart);
  const { items } = useSelector((state) => state?.wishlist);
  const handleAddToCart = async (productId) => {
    if (!!id) {
      try {
        const res = await productApi.addItemToCart(
          {
            product_id: productId,
            quantity: 1,
          },
          id
        );
        if (res?.status === 201 || res?.status === 200) {
          toast.success("Added Item to cart");
          dispatch(getCartItem(id));
        }
      } catch (err) {
        toast.error("Add to cart Failed");
        console.error(err);
      }
    } else {
      dispatch(
        createCart({
          product_id: productId,
          quantity: 1,
        })
      );
    }
  };
  const handleAddToWishlist = (productId) => {
    const item = { id: productId };
    dispatch(addItemToWishList(item));
    setTimeout(() => {
      toast.success("Added To Wishlist");
    }, 400);
  };

  if (isLoading) {
    return <PreLoader />;
  }
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
              <select name="sort" onChange={onSortChange}>
                <option value="date-posted">Date posted</option>
                <option value="price-high-low">Price high-low</option>
                <option value="price-low-high">Price low-high</option>
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
              {products?.length > 0 ? (
                products?.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                  >
                    <div className="product-item">
                      <div className="product-img">
                        <img
                          src={
                            item?.images?.[0]?.image ||
                            "/assets/img/product/default-product.png"
                          }
                          alt="Product Image"
                        />
                        <ul>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Cart"
                              onClick={() => handleAddToCart(item?.id)}
                            >
                              <i className="fi flaticon-shopping-cart"></i>
                            </a>
                          </li>
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#popup-quickview"
                          >
                            <Link
                              to={`/product/${item?.id}`}
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                            >
                              <i className="fi ti-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <a
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              className="cursor-pointer"
                              title="Add to Wishlist"
                              onClick={() => handleAddToWishlist(item?.id)}
                            >
                              <i
                                className="fi flaticon-like"
                                style={{
                                  color: items?.some((i) => i.id === item?.id)
                                    ? "#910000"
                                    : "",
                                }}
                              ></i>
                            </a>
                          </li>
                        </ul>
                        <div className="offer-thumb">
                          <span>-28%</span>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to={`/product/${item?.id}`}>{item?.name}</Link>
                        </h3>
                        <div className="product-btm">
                          <div className="product-price">
                            <ul>
                              <li>${item?.unit_price}</li>
                              <li></li>
                            </ul>
                          </div>
                          <div className="product-ratting">
                            <ul>
                              {item?.average_rating &&
                                [...Array(5)].map((_, index) => (
                                  <li key={index}>
                                    <i
                                      className={`fa ${
                                        index < item?.average_rating
                                          ? "fa-star"
                                          : "fa-star-o"
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
                ))
              ) : (
                <EmptyContent />
              )}
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
              {products?.length > 0 &&
                products?.map((item, index) => (
                  <div key={index} className="col-xl-12 col-12">
                    <div className="product-item">
                      <div
                        className="product-img"
                        style={{ minHeight: "100%" }}
                      >
                        <div
                          className=""
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            width: "200px",
                          }}
                        >
                          <img
                            src={
                              item?.images?.[0]?.image ||
                              "/assets/img/product/default-product.png"
                            }
                            alt="Product Image"
                          />
                        </div>
                        <ul>
                          <li>
                            <a
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              style={{ cursor: "pointer" }}
                              title="Add to Cart"
                              onClick={() => handleAddToCart(item?.id)}
                            >
                              <i className="fi flaticon-shopping-cart"></i>
                            </a>
                          </li>
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#popup-quickview"
                          >
                            <Link
                              to={`/product/${item?.id}`}
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                            >
                              <i className="fi ti-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <a
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Wishlist"
                              onClick={() => handleAddToWishlist(item?.id)}
                            >
                              <i className="fi flaticon-like"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="offer-thumb">
                          <span>-28%</span>
                        </div>
                      </div>
                      <div
                        className="product-content"
                        style={{ minHeight: "250px" }}
                      >
                        <h3>
                          <Link to={`/product/${item?.id}`}>{item?.name}</Link>
                        </h3>
                        <div className="product-btm">
                          <div className="product-price">
                            <ul>
                              <li>${item?.unit_price}</li>
                              <li></li>
                            </ul>
                          </div>
                          <div className="product-ratting">
                            <ul>
                              {item?.average_rating &&
                                [...Array(5)].map((_, index) => (
                                  <li key={index}>
                                    <i
                                      className={`fa ${
                                        index < item?.average_rating
                                          ? "fa-star"
                                          : "fa-star-o"
                                      }`}
                                      aria-hidden="true"
                                    ></i>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                        <p className="product-description">
                          {" "}
                          {item?.description?.length > 150
                            ? `${item.description.slice(0, 150)}...`
                            : item?.description}
                        </p>
                        <div
                          className=""
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                          }}
                        >
                          <Link
                            to={`/product/${item?.id}`}
                            className="btn theme-btn"
                            tabIndex="0"
                            style={{
                              padding: "5px 30px",
                              textTransform: "capitalize",
                            }}
                          >
                            View
                          </Link>
                        </div>
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
