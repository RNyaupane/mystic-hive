import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contactApi } from "../../redux/api-service/contactApi";
import { toast } from "react-toastify";

// Yup validation schema
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z ]+$/, "Name can only contain letters and spaces"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .trim(),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  address: yup
    .string()
    .required("Address is required")
    .max(100, "Address must not exceed 100 characters"),
  description: yup
    .string()
    .required("Description is required")
    .max(200, "Description must not exceed 200 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await contactApi.postContactData(data);
      if (res?.status === 200 || res?.status === 201) {
        toast.success(res?.message);
        reset();
      }
      console.log(res);
    } catch (err) {
      toast.error("Network Error !!!");
      console.warn(err);
    }
  };

  return (
    <div className="col col-lg-6 col-12">
      <div className="contact-form-area">
        <div className="section-title-s3">
          <h2>Quick Contact Form</h2>
        </div>
        <div className="contact-form">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-validation-active"
            id="contact-form"
          >
            <div>
              <input
                type="text"
                className={`form-control ${
                  errors.name ? "is-invalid-field" : ""
                }`}
                name="name"
                id="name"
                placeholder="Name*"
                {...register("name")}
              />
              <p className="fs-7 text-danger">{errors.name?.message}</p>
            </div>
            <div>
              <input
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid-field" : ""
                }`}
                name="email"
                id="email"
                placeholder="Email*"
                {...register("email")}
              />
              <p className="fs-7 text-danger">{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="text"
                className={`form-control ${
                  errors.phone ? "is-invalid-field" : ""
                }`}
                name="phone"
                id="phone"
                placeholder="Phone*"
                {...register("phone")}
              />
              <p className="fs-7 text-danger">{errors.phone?.message}</p>
            </div>
            <div>
              <input
                type="text"
                className={`form-control ${
                  errors.address ? "is-invalid-field" : ""
                }`}
                name="address"
                id="address"
                placeholder="Address*"
                {...register("address")}
              />
              <p className="fs-7 text-danger">{errors.address?.message}</p>
            </div>
            <div className="comment-area">
              <textarea
                name="description"
                id="note"
                className={`form-control ${
                  errors.description ? "is-invalid-field" : ""
                }`}
                placeholder="Enter your message "
                {...register("description")}
              ></textarea>
              <p className="fs-7 text-danger">{errors.description?.message}</p>
            </div>
            <div className="submit-area">
              <button
                disabled={isSubmitting}
                type="submit"
                className="theme-btn"
              >
                {isSubmitting && (
                  <span
                    className="spinner-border spinner-border-sm mx-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}

                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
