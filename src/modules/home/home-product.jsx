/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/product/productSlice";
import { productApi } from "../../redux/api-service/productApi";
import { createCart, getCartItem } from "../../redux/reducers/cartSlice";
import { toast } from "react-toastify";
import { addItemToWishList } from "../../redux/reducers/wishlistSlice";
import PreLoader from "../../components/pre-loader";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.cart);
  const { products = [], isLoading } = useSelector((state) => state.product);
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
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <PreLoader />;
  }

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
            {products?.map((item, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              >
                <div className="product-item">
                  <div className="product-img">
                    <img
                      src={
                        item?.images?.[0]?.image ||
                        "/assets/img/product/default-product.png"
                      }
                      alt=""
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
                          {[...Array(5)].map((_, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
