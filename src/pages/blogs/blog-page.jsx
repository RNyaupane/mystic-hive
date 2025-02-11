import { useDispatch } from "react-redux";
import BlogView from "../../modules/blogs/blog-view";
import { useEffect } from "react";
import { getBlogs } from "../../redux/reducers/blogs/blogSlice";

const BlogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <>
      <BlogView />
    </>
  );
};

export default BlogPage;
