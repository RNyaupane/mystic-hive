const Post = () => (
  <div className="post">
    <div className="entry-media">
      <img src="/assets/img/blog/img-7.jpg" alt="Post" />
    </div>
    <ul className="entry-meta">
      <li>
        <img src="/assets/img/blog/author.jpg" alt="Author" />
        &nbsp; By <a href="#">Lily Anne</a>
      </li>
      <li>January 12,2021</li>
    </ul>
    <h2>How to get more traffic in your website of ecommerce</h2>
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form...
    </p>
    <blockquote>
      “If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn’t anything embarrassing hidden in the middle of text.”
    </blockquote>
    <p>
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum
      et Malorum by Cicero, written in 45 BC...
    </p>
  </div>
);

const TagShare = () => (
  <div className="tag-share clearfix">
    <div className="tag">
      <ul>
        <li>
          <a href="#">Raw</a>
        </li>
        <li>
          <a href="#">Flower</a>
        </li>
        <li>
          <a href="#">Hill</a>
        </li>
      </ul>
    </div>
    <div className="share">
      <ul>
        <li>
          <a href="#">
            <i className="ti-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ti-twitter-alt"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ti-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ti-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const AuthorBox = () => (
  <div className="author-box">
    <div className="author-avatar">
      <a href="#">
        <img src="/assets/img/blog/author.jpg" alt="Author" />
      </a>
    </div>
    <div className="author-content">
      <a href="#" className="author-name">
        Henry Joyes
      </a>
      <p>
        Lorem Ipsum available, but the majority have suffered alteration in some
        form...
      </p>
      <div className="socials">
        <ul className="social-link">
          <li>
            <a href="#">
              <i className="ti-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ti-twitter-alt"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ti-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ti-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const CommentsArea = () => (
  <div className="comments-area">
    <h3 className="comments-title">Comments</h3>
    {/* Add comments dynamically */}
    <div className="comment-respond">
      <h3 className="comment-reply-title">Post Comments</h3>
      <form className="comment-form">
        <div className="form-textarea">
          <textarea placeholder="Write Your Comments..."></textarea>
        </div>
        <div className="form-inputs">
          <input placeholder="Website" type="url" />
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="email" />
        </div>
        <div className="form-submit">
          <input value="Post Comment" type="submit" />
        </div>
      </form>
    </div>
  </div>
);

const DetailView = () => (
  <section className="blog-single-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-lg-10 offset-lg-1">
          <div className="blog-content clearfix">
            <Post />
            <TagShare />
            <AuthorBox />
            <CommentsArea />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DetailView;
