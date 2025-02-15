import { requests } from "../restApi";

export const contactApi = {
  postContactData: (data) =>
    requests.post(`contact-form/`, data, { headers: { Authorization: "" } }),
};
