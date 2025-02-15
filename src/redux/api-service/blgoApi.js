import { requests } from "../restApi";

export const blogApi = {
  getBlogs: () =>
    requests.get("docs/blogs/", {}, { headers: { Authorization: "" } }),
  getBlogDetail: (data) =>
    requests.get(
      `shop/blogs/${data?.id}`,
      {},
      { headers: { Authorization: "" } }
    ),
  getTags: () =>
    requests.get("docs/tags/", {}, { headers: { Authorization: "" } }),
};
