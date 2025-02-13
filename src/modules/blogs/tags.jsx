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
  console.log("HGI", tags);
  return (
    <div className="widget tag-widget">
      <h3>Tags</h3>
      <ul>
        {tags?.map((item, index) => (
          <li key={index}>
            <a
              className="cursor-pointer"
              style={{ textTransform: "capitalize" }}
            >
              {item?.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTags;
