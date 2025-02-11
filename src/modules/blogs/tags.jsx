import { useEffect, useState } from "react";
import { blogApi } from "../../redux/api-service/blgoApi";

const BlogTags = () => {
  const [tags, setTags] = useState([]);
  const fetchTags = async () => {
    try {
      const res = await blogApi.getTags();
      setTags(res?.data);
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    fetchTags();
  }, []);
  console.log(tags);
  return (
    <div className="widget tag-widget">
      <h3>Tags</h3>
      <ul>
        <li>
          <a href="#">Honey</a>
        </li>
        <li>
          <a href="#">Harvest</a>
        </li>
        <li>
          <a href="#">Organic</a>
        </li>
        <li>
          <a href="#">Bees</a>
        </li>
      </ul>
    </div>
  );
};

export default BlogTags;
