import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authService } from "../../redux/actions/authActions"; // Replace with your actual action

// Validation schema
const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Form submission handler
  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
      first_name: data.first_name,
      last_name: data.last_name,
    };
    try {
      await dispatch(authService.register(payload));
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="tp-login-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form
              className="tp-accountWrapper"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="tp-accountInfo">
                <div className="tp-accountInfoHeader">
                  <Link to="/">
                    <img src="/assets/img/logo.png" alt="" />
                  </Link>
                </div>
                <div className="back-home d-flex gap-2">
                  <Link className="tp-accountBtn" to="/">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
              <div className="tp-accountForm form-style">
                <div className="fromTitle">
                  <h2>Signup</h2>
                  <p>Sign into your pages account</p>
                </div>
                <div className="row">
                  {/* First Name */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <Controller
                      name="first_name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="form-group mb-4">
                          <label htmlFor="first_name">First Name</label>
                          <input
                            type="text"
                            id="first_name"
                            placeholder="Your first name here.."
                            {...field}
                            className={`form-control ${
                              errors.first_name ? "is-invalid" : ""
                            }`}
                          />
                          {errors.first_name && (
                            <div className="invalid-feedback">
                              {errors.first_name.message}
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <Controller
                      name="last_name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="form-group mb-4">
                          <label htmlFor="last_name">Last Name</label>
                          <input
                            type="text"
                            id="last_name"
                            placeholder="Your last name here.."
                            {...field}
                            className={`form-control ${
                              errors.last_name ? "is-invalid" : ""
                            }`}
                          />
                          {errors.last_name && (
                            <div className="invalid-feedback">
                              {errors.last_name.message}
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="form-group mb-4">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            id="email"
                            placeholder="Your email here.."
                            {...field}
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Password */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="form-group mb-4">
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Your password here.."
                            {...field}
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                          />
                          {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password.message}
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <button
                      type="submit"
                      className="tp-accountBtn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing up..." : "Signup"}
                    </button>
                  </div>
                </div>

                <h4 className="or">
                  <span>OR</span>
                </h4>
                <ul className="tp-socialLoginBtn">
                  <li>
                    <button
                      className=" w-auto px-3 btn btn-secondary"
                      type="button"
                    >
                      <span>
                        <i className="fa fa-google"></i> &ensp; Sign up with
                        Google
                      </span>
                    </button>
                  </li>
                </ul>
                <p className="subText">
                  I have an account <Link to="/auth/login">Login account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
