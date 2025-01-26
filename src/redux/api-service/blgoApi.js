import { requests } from "../restApi";

export const blogApi = {
  getBlogs: () => requests.get("docs/blogs/", {}),
  getBlogDetail: (data) => requests.get(`shop/blogs/${data?.id}`),
};
