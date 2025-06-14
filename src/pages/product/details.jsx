/* eslint-disable no-extra-boolean-cast */
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "../../hooks/use-params";
import { useEffect, useState } from "react";
import { getProductDetail } from "../../redux/reducers/product/productDetailSlice";
import PreLoader from "../../components/pre-loader";
import Description from "../../modules/productDetail/description";
import Rating from "../../modules/productDetail/rating";
import AdditionalInformation from "../../modules/productDetail/additional-info";
import { productApi } from "../../redux/api-service/productApi";
import { createCart, getCartItem } from "../../redux/reducers/cartSlice";
import { toast } from "react-toastify";

const thumbnailCarouselOptions = {
  loop: false,
  margin: 10,
  nav: true,
  dots: false,

  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};
const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [currentImage, setCurrentImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { details, isLoading } = useSelector((state) => state.productDetails);
  const { id } = useSelector((state) => state.cart);

  const handleAddToCart = async (productId) => {
    if (quantity < 1) {
      toast.warning("Quantity must be greater than 1");
      return;
    }
    if (!!id) {
      try {
        const res = await productApi.addItemToCart(
          {
            product_id: productId,
            quantity: quantity,
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

  useEffect(() => {
    if (!!params?.id) {
      dispatch(
        getProductDetail({
          id: params?.id,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <div className="product-single-section section-padding">
      <div className="container">
        <div className="product-details">
          <div className="row align-items-start">
            <div className="col-lg-5">
              <div className="product-single-img ">
                <div
                  className="d-flex justify-content-center"
                  style={{
                    width: "350px",
                    height: "350px",
                    margin: "auto",
                  }}
                >
                  <img
                    src={currentImage || details?.images?.[0]?.image}
                    alt="Product Image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                {/* Thumbnail Carousel */}
                <OwlCarousel
                  className="product-thumbnail-active mt-3"
                  {...thumbnailCarouselOptions}
                  items={details?.images?.length}
                >
                  {details?.images?.map((item, index) => (
                    <div
                      className={`item ${
                        currentImage === item?.image ? "active" : ""
                      }`} // Highlight active thumbnail
                      key={index}
                      onClick={() => setCurrentImage(item?.image)}
                    >
                      <img
                        src={item?.image}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                          height: "100px",
                          width: "100px",
                          objectFit: "cover",
                          cursor: "pointer",
                          border:
                            currentImage === item?.image
                              ? "2px solidrgb(201, 171, 0)"
                              : "1px solid #ddd",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product-single-content">
                <h5>{details?.name}</h5>
                <h6>{details?.unit_price} USD</h6>
                <ul className="rating">
                  {details?.average_rating &&
                    [...Array(5)].map((_, index) => (
                      <li key={index}>
                        <i
                          className={`fa ${
                            index < details?.average_rating
                              ? "fa-star"
                              : "fa-star-o"
                          }`}
                          aria-hidden="true"
                        ></i>
                      </li>
                    ))}
                </ul>
                <p className="mb-5">
                  {details?.description?.length > 300
                    ? `${details.description.slice(0, 300)}...`
                    : details?.description}
                </p>

                <div className="product-filter-item color filter-size">
                  <div className="color-name">
                    <span>Size :</span>
                    <ul>
                      <li className="color">
                        <input
                          id="wa3"
                          type="radio"
                          name="size"
                          value="30"
                          readOnly
                        />
                        <label htmlFor="wa3">500 ML</label>
                      </li>
                      <li className="color">
                        <input
                          id="wa4"
                          type="radio"
                          name="size"
                          value="30"
                          readOnly
                        />
                        <label htmlFor="wa4">1000 ML</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pro-single-btn">
                  <div className="quantity cart-plus-minus">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      // min={1}
                    />
                  </div>
                  <a
                    className="theme-btn cursor-pointer"
                    onClick={() => handleAddToCart(details?.id)}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tab-area">
          <ul className="nav nav-mb-3 main-tab" id="tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="descripton-tab"
                data-bs-toggle="pill"
                data-bs-target="#descripton"
                type="button"
                role="tab"
                aria-controls="descripton"
                aria-selected="true"
              >
                Descripton
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Information-tab"
                data-bs-toggle="pill"
                data-bs-target="#Information"
                type="button"
                role="tab"
                aria-controls="Information"
                aria-selected="false"
              >
                Additional Information
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Ratings-tab"
                data-bs-toggle="pill"
                data-bs-target="#Ratings"
                type="button"
                role="tab"
                aria-controls="Ratings"
                aria-selected="false"
              >
                Ratings
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="descripton"
              role="tabpanel"
              aria-labelledby="descripton-tab"
            >
              <Description details={details} />
            </div>
            <div
              className="tab-pane fade"
              id="Ratings"
              role="tabpanel"
              aria-labelledby="Ratings-tab"
            >
              <Rating
                rating={details?.reviews}
                averageRating={details?.average_rating}
              />
            </div>
            <div
              className="tab-pane fade"
              id="Information"
              role="tabpanel"
              aria-labelledby="Information-tab"
            >
              <AdditionalInformation details={details} />
            </div>
          </div>
        </div>
      </div>
      <div className="related-product"></div>
    </div>
  );
};

export default ProductDetailsPage;
