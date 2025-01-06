/* eslint-disable no-extra-boolean-cast */
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "../../hooks/use-params";
import { useEffect } from "react";
import { getProductDetail } from "../../redux/reducers/product/productDetailSlice";
import PreLoader from "../../components/pre-loader";

const mainCarouselOptions = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};

const thumbnailCarouselOptions = {
  loop: true,
  margin: 10,
  nav: true,
  dots: false,

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};
const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { details, isLoading } = useSelector((state) => state.productDetails);

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

  console.log(details);
  return (
    <div className="product-single-section section-padding mt-5">
      <div className="container">
        <div className="product-details">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="product-single-img">
                {/* Main Carousel */}
                <OwlCarousel
                  className="product-active"
                  {...mainCarouselOptions}
                >
                  {details?.images?.length > 0 &&
                    details?.images?.map((item, index) => (
                      <div className="item" key={index}>
                        <img src={item?.image} alt={item?.alt_text} />
                      </div>
                    ))}
                </OwlCarousel>

                {/* Thumbnail Carousel */}
                <OwlCarousel
                  className="product-thumbnil-active"
                  {...thumbnailCarouselOptions}
                  items={details?.images.length}
                >
                  {details?.images?.length > 0 &&
                    details?.images?.map((item, index) => (
                      <div className="item" key={index}>
                        <img src={item?.image} alt={item?.alt_text} />
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
                    <span>Weight :</span>
                    <ul>
                      <li className="color">
                        <input
                          id="wa1"
                          type="radio"
                          name="size"
                          value="30"
                          readOnly
                        />
                        <label htmlFor="wa1">4L</label>
                      </li>
                      <li className="color">
                        <input
                          id="wa2"
                          type="radio"
                          name="size"
                          value="30"
                          readOnly
                        />
                        <label htmlFor="wa2">2L</label>
                      </li>
                      <li className="color">
                        <input
                          id="wa3"
                          type="radio"
                          name="size"
                          value="30"
                          readOnly
                        />
                        <label htmlFor="wa3">500ML</label>
                      </li>
                      <li className="color">
                        <input
                          id="wa4"
                          type="radio"
                          name="size"
                          value="30"
                          readOnly
                        />
                        <label htmlFor="wa4">200ML</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pro-single-btn">
                  <div className="quantity cart-plus-minus">
                    <input type="number" defaultValue={1} />
                  </div>
                  <a href="#" className="theme-btn ">
                    Add to cart
                  </a>
                </div>
                {/* <div className="social-share">
                  <span>Share with : </span>
                  <ul className="socialLinks">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
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
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="Descriptions-item">
                      <p>{details?.description}</p>
                      <div className="Description-table">
                        <h4>Find Your Category :</h4>
                        <form
                          action="https://themepresss.com/tf/html/annahl-live/cart"
                          className="table-responsive"
                        >
                          <table>
                            <thead>
                              <tr>
                                <th>Size</th>
                                <th>Weight</th>
                                <th>Queen</th>
                                <th>Sunflower</th>
                                <th>Hill</th>
                                <th>Forest</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>S</td>
                                <td>250ML</td>
                                <td>60</td>
                                <td>10 - 12</td>
                                <td>20</td>
                                <td>22</td>
                              </tr>
                              <tr>
                                <td>M</td>
                                <td>500ML</td>
                                <td>62</td>
                                <td>12 - 14</td>
                                <td>21</td>
                                <td>23</td>
                              </tr>
                              <tr>
                                <td>L</td>
                                <td>1L</td>
                                <td>64</td>
                                <td>14 - 18</td>
                                <td>23</td>
                                <td>24</td>
                              </tr>
                              <tr>
                                <td>Xl</td>
                                <td>2L</td>
                                <td>66</td>
                                <td>18 - 20</td>
                                <td>24</td>
                                <td>25</td>
                              </tr>
                              <tr>
                                <td>2Xl</td>
                                <td>3L</td>
                                <td>68</td>
                                <td>20 - 22</td>
                                <td>25</td>
                                <td>26</td>
                              </tr>
                              <tr>
                                <td>3Xl</td>
                                <td>5L</td>
                                <td>76</td>
                                <td>22 - 24</td>
                                <td>27</td>
                                <td>28</td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Ratings"
              role="tabpanel"
              aria-labelledby="Ratings-tab"
            >
              <div className="container">
                <div className="rating-section">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-2">
                      <div className="rating-top">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="rating-sub">
                              <ul>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                              <span>( Based on 45.86K reviews)</span>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="rating-right">
                              <div className="rating-right-item">
                                <ul>
                                  <li>
                                    <ul>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="progress">
                                      <div
                                        className="bar"
                                        style={{ width: "70%" }}
                                      ></div>
                                    </div>
                                  </li>
                                  <li>70% ( 32.10k)</li>
                                </ul>
                              </div>
                              <div className="rating-right-item">
                                <ul>
                                  <li>
                                    <ul>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="progress">
                                      <div
                                        className="bar"
                                        style={{ width: "60%" }}
                                      ></div>
                                    </div>
                                  </li>
                                  <li>15% ( 6.88k)</li>
                                </ul>
                              </div>
                              <div className="rating-right-item">
                                <ul>
                                  <li>
                                    <ul>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="progress">
                                      <div
                                        className="bar"
                                        style={{ width: "40%" }}
                                      ></div>
                                    </div>
                                  </li>
                                  <li>10% ( 4.55k)</li>
                                </ul>
                              </div>
                              <div className="rating-right-item">
                                <ul>
                                  <li>
                                    <ul>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="progress">
                                      <div
                                        className="bar"
                                        style={{ width: "20%" }}
                                      ></div>
                                    </div>
                                  </li>
                                  <li>5% ( 2.29k)</li>
                                </ul>
                              </div>
                              <div className="rating-right-item">
                                <ul>
                                  <li>
                                    <ul>
                                      <li>
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>
                                        <i
                                          className="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="progress">
                                      <div
                                        className="bar"
                                        style={{ width: "0" }}
                                      ></div>
                                    </div>
                                  </li>
                                  <li>0% ( 0.00)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="rating-bottom">
                        <div className="write-review-btn">
                          <button className="theme-btn">Write A Review</button>
                        </div>

                        <div className="rating-give-section-items">
                          <div className="review-btn-btn">
                            <button className="theme-btn s2">
                              Cancel Review
                            </button>
                          </div>

                          <div className="rating-give-section">
                            <div className="rating-give-section-wrap">
                              <form>
                                <span>Give A Review</span>
                                <div className="give-rating">
                                  <label>
                                    <input
                                      type="radio"
                                      readOnly
                                      name="stars"
                                      value="1"
                                    />
                                    <span className="icon">★</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      readOnly
                                      name="stars"
                                      value="2"
                                    />
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                  </label>
                                  <label>
                                    <input
                                      readOnly
                                      type="radio"
                                      name="stars"
                                      value="3"
                                    />
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      readOnly
                                      name="stars"
                                      value="4"
                                    />
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                  </label>
                                  <label>
                                    <input
                                      readOnly
                                      type="radio"
                                      name="stars"
                                      value="5"
                                    />
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                    <span className="icon">★</span>
                                  </label>
                                </div>

                                <div className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Your Name..."
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Your Email..."
                                  />
                                </div>
                                <div className="form-group">
                                  <textarea
                                    name="rv"
                                    id="rv"
                                    cols="30"
                                    rows="10"
                                    placeholder="Your Review..."
                                  ></textarea>
                                </div>
                                <div className="form-group">
                                  <button type="button" className="theme-btn">
                                    Submit Review
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="review-rating-wrap">
                          <div className="rating-review">
                            <div className="rating-review-author">
                              <div className="rating-review-author-img">
                                <img
                                  src="/assets/images/product-details/author.png"
                                  alt=""
                                />
                              </div>
                              <div className="rating-review-author-text">
                                <div className="rating-review-author-text-inner">
                                  <ul className="ratting">
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                  </ul>
                                  <span>06/18/21</span>
                                </div>
                                <p>Ema Aliana</p>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam hendrerit sem porta dolor congue
                              sagittis Lorem ipsum dolor sit amet consectetur.
                            </p>
                          </div>
                          <div className="rating-review">
                            <div className="rating-review-author">
                              <div className="rating-review-author-img">
                                <img
                                  src="/assets/images/product-details/author2.png"
                                  alt=""
                                />
                              </div>
                              <div className="rating-review-author-text">
                                <div className="rating-review-author-text-inner">
                                  <ul className="ratting">
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                  </ul>
                                  <span>06/18/21</span>
                                </div>
                                <p>John Clyne</p>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam hendrerit sem porta dolor congue
                              sagittis Lorem ipsum dolor sit amet consectetur.
                            </p>
                          </div>
                          <div className="rating-review">
                            <div className="rating-review-author">
                              <div className="rating-review-author-img">
                                <img
                                  src="/assets/images/product-details/author3.png"
                                  alt=""
                                />
                              </div>
                              <div className="rating-review-author-text">
                                <div className="rating-review-author-text-inner">
                                  <ul className="ratting">
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </li>
                                  </ul>
                                  <span>06/18/21</span>
                                </div>
                                <p>Lily Jameson</p>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam hendrerit sem porta dolor congue
                              sagittis Lorem ipsum dolor sit amet consectetur.
                            </p>
                          </div>
                          <div className="rating-review">
                            <a href="#">Load More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Information"
              role="tabpanel"
              aria-labelledby="Information-tab"
            >
              <div className="container">
                <div className="Additional-wrap">
                  <div className="row">
                    <div className="col-12">
                      <table className="table-responsive">
                        <tbody>
                          <tr>
                            <td>Ratings</td>
                            <td className="ratting">
                              <ul>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Material Type</td>
                            <td>Hill Honey</td>
                          </tr>
                          <tr>
                            <td>weight</td>
                            <td>250 gm</td>
                          </tr>
                          <tr>
                            <td>Seller</td>
                            <td>Annahl</td>
                          </tr>
                          <tr>
                            <td>Size</td>
                            <td>Small Jar</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-product"></div>
    </div>
  );
};

export default ProductDetailsPage;
