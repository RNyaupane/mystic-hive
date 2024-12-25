const BlogView = () => {
  return (
    <section className="blog-pg-section s2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8 order-lg-2">
            <div className="blog-posts clearfix">
              {Array.from({ length: 3 }).map((item, index) => (
                <div className="post" key={index}>
                  <div className="entry-media">
                    <img src="/assets/images/blog/img-7.jpg" alt="" />
                  </div>
                  <div className="details">
                    <ul className="entry-meta">
                      <li>
                        <img src="/assets/images/blog/author.jpg" alt="" />
                        &nbsp; By <a href="#">Lily Anne</a>
                      </li>
                      <li>January 12,2021</li>
                    </ul>
                    <h3>
                      <a href="#">
                        How to get more traffic in your website of ecommerce
                      </a>
                    </h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isnt{" "}
                    </p>
                    <a href="#" className="read-more">
                      Read More..
                    </a>
                  </div>
                </div>
              ))}

              <div className="pagination-wrapper pagination-wrapper-left">
                <ul className="pg-pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <i className="ti-arrow-left"></i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 order-lg-1 col-12">
            <div className="blog-sidebar">
              <div className="widget search-widget">
                <h3>Search</h3>
                <form>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <i className="ti-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="widget category-widget">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      Queen Bee Honey <span>(10)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sunflower Honey <span>(07)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Manuka Honey <span>(09)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Wildflower Honey <span>(11)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Mango Flower Honey <span>(18)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Mustard Flower Honey <span>(17)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget recent-post-widget">
                <h3>Recent post</h3>
                <div className="posts">
                  <div className="post">
                    <div className="img-holder">
                      <img src="/assets/images/recent-posts/img-1.jpg" alt="" />
                    </div>
                    <div className="details">
                      <h4>
                        <a href="#">
                          Actual teachings of the great explorer of the truth.
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="post">
                    <div className="img-holder">
                      <img src="/assets/images/recent-posts/img-2.jpg" alt="" />
                    </div>
                    <div className="details">
                      <h4>
                        <a href="#">
                          The truth, the master-builder of human happiness
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="post">
                    <div className="img-holder">
                      <img src="/assets/images/recent-posts/img-3.jpg" alt="" />
                    </div>
                    <div className="details">
                      <h4>
                        <a href="#">
                          Explorer of the truth, the master-builder of human
                          happiness
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget tag-widget">
                <h3>Tags</h3>
                <ul>
                  <li>
                    <a href="#">Flower</a>
                  </li>
                  <li>
                    <a href="#">Hill</a>
                  </li>
                  <li>
                    <a href="#">Honey</a>
                  </li>
                  <li>
                    <a href="#">Forest</a>
                  </li>
                  <li>
                    <a href="#">Queen</a>
                  </li>
                  <li>
                    <a href="#">Manuka</a>
                  </li>
                  <li>
                    <a href="#">Mango</a>
                  </li>
                  <li>
                    <a href="#">Raw</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogView;
