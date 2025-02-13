import { useState } from "react";
import { useSelector } from "react-redux";
import PreLoader from "../../components/pre-loader";
import { Link } from "react-router-dom";
import EmptyContent from "../../components/empty-content";
import BlogTags from "./tags";

const BlogView = () => {
  const { isLoading, blogs = [] } = useSelector((state) => state.blog);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Show 5 blogs per page

  if (isLoading) return <PreLoader />;

  // Filtering blogs based on search
  const filteredBlogs = blogs?.filter((blog) =>
    blog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="blog-pg-section s2 section-padding">
      <div className="container">
        {/* Blog Posts */}
        {currentBlogs?.length < 1 ? (
          <div style={{ height: "90vh" }}>
            <EmptyContent title={"No Blogs Found"} />
          </div>
        ) : (
          <div className="row">
            <div className="col col-lg-8 order-lg-2">
              <div className="blog-posts clearfix w-100 h-100">
                {currentBlogs?.map((blog) => (
                  <div className="post" key={blog.id}>
                    <div className="entry-media">
                      <img
                        src={
                          blog.images[0]?.image || "/assets/img/blog/img-7.jpg"
                        }
                        alt={blog.images[0]?.alt_text || "Blog Image"}
                      />
                    </div>
                    <div className="details">
                      <ul className="entry-meta">
                        <li>Category: {blog.category.name}</li>
                        <li>{new Date(blog.created_at).toDateString()}</li>
                      </ul>
                      <h3>
                        <Link to={`/blog/${blog.id}`}>{blog.name}</Link>
                      </h3>
                      <p>{blog.description.substring(0, 150)}...</p>
                      <Link to={`/blog/${blog.id}`} className="read-more">
                        Read More..
                      </Link>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                {currentBlogs?.length > 0 && (
                  <div className="pagination-wrapper pagination-wrapper-left">
                    <ul className="pg-pagination">
                      <li>
                        <a
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <i className="ti-arrow-left"></i>
                        </a>
                      </li>
                      {Array.from({
                        length: Math.ceil(filteredBlogs?.length / blogsPerPage),
                      }).map((_, index) => (
                        <li
                          key={index}
                          className={currentPage === index + 1 ? "active" : ""}
                        >
                          <a onClick={() => paginate(index + 1)}>{index + 1}</a>
                        </li>
                      ))}
                      <li>
                        <a
                          onClick={() => paginate(currentPage + 1)}
                          disabled={
                            currentPage ===
                            Math.ceil(filteredBlogs?.length / blogsPerPage)
                          }
                        >
                          <i className="ti-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col col-lg-4 order-lg-1 col-12">
              <div className="blog-sidebar">
                {/* Search Widget */}
                <div className="widget search-widget">
                  <h3>Search</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCurrentPage(1);
                    }}
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="submit">
                        <i className="ti-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Categories Widget */}
                <div className="widget category-widget">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Mad Honey <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Raw Honey <span>(7)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="widget recent-post-widget">
                  <h3>Recent Posts</h3>
                  <div className="posts">
                    {blogs?.slice(0, 3).map((recentBlog) => (
                      <div className="post" key={recentBlog.id}>
                        <div className="img-holder">
                          <img
                            src={
                              recentBlog.images[0]?.image ||
                              "/assets/img/recent-posts/img-1.jpg"
                            }
                            alt={
                              recentBlog.images[0]?.alt_text || "Recent Post"
                            }
                          />
                        </div>
                        <div className="details">
                          <h4>
                            <Link to={`/blog/${recentBlog.id}`}>
                              {recentBlog.name}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Widget */}
                <BlogTags />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogView;
