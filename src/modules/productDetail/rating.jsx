import AvatarByText from "../../components/avatar-by-text";

const Rating = ({ rating, averageRating }) => {
  const totalReviews = rating?.length || 0;

  // Calculate percentage for each star level
  const starLevels = [5, 4, 3, 2, 1];
  const starCounts = starLevels.map(
    (stars) => rating.filter((r) => r.rating === stars).length
  );
  const totalRatings = starCounts.reduce((acc, count) => acc + count, 0);
  const starPercentages = starCounts.map(
    (count) => (count / totalRatings) * 100 || 0
  );

  return (
    <div className="container">
      <div className="rating-section">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="rating-top">
              <div className="row">
                <div className="col-lg-4">
                  <div className="rating-sub">
                    <ul>
                      {averageRating &&
                        [...Array(5)].map((_, index) => {
                          const isFullStar = index < Math.floor(averageRating);
                          const isHalfStar =
                            index === Math.floor(averageRating) &&
                            averageRating % 1 !== 0; // Check for fractional part
                          return (
                            <li key={index}>
                              <i
                                className={`fa ${
                                  isFullStar
                                    ? "fa-star"
                                    : isHalfStar
                                    ? "fa-star-half-o"
                                    : "fa-star-o"
                                }`}
                                aria-hidden="true"
                              ></i>
                            </li>
                          );
                        })}
                    </ul>

                    <span>( Based on {totalReviews} reviews)</span>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="rating-right">
                    {starLevels.map((stars, index) => (
                      <div className="rating-right-item" key={stars}>
                        <ul>
                          <li>
                            <ul>
                              {[...Array(5)].map((_, idx) => (
                                <li key={idx}>
                                  <i
                                    className={`fa ${
                                      idx < stars ? "fa-star" : "fa-star-o"
                                    }`}
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <div className="progress">
                              <div
                                className="bar"
                                style={{
                                  width: `${starPercentages[index]}%`,
                                }}
                              ></div>
                            </div>
                          </li>
                          <li>
                            {starPercentages[index].toFixed(1)}% (
                            {starCounts[index]})
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-12">
            <div className="rating-bottom">
              <div className="review-rating-wrap">
                {rating?.map((review, idx) => (
                  <div className="rating-review" key={idx}>
                    <div className="rating-review-author">
                      <AvatarByText firstName={"Ro"} lastName={"Nyaupane"} />
                      <div className="rating-review-author-text">
                        <div className="rating-review-author-text-inner">
                          <ul className="ratting">
                            {[...Array(5)].map((_, starIdx) => (
                              <li key={starIdx}>
                                <i
                                  className={`fa ${
                                    starIdx < review.rating
                                      ? "fa-star"
                                      : "fa-star-o"
                                  }`}
                                  aria-hidden="true"
                                ></i>
                              </li>
                            ))}
                          </ul>
                          <span>
                            {new Date(review.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <p>
                          {review?.user?.first_name || "Anonymous"}{" "}
                          {review?.user?.last_name || ""}
                        </p>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
                <div className="rating-review">
                  <a href="#">Load More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
