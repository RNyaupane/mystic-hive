import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/authSlice";

// Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)); // Ensure this is an async action
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
                  {/* <Link className="tp-accountBtn" to="/auth/register">
                    <span>Create Account</span>
                  </Link> */}
                </div>
                <div className="image">
                  {/* <img src="/assets/img/login.png" alt="" width={300} /> */}
                </div>
                <div className="back-home">
                  <Link className="tp-accountBtn" to="/">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
              <div className="tp-accountForm form-style">
                <div className="fromTitle">
                  <h2>Login</h2>
                  <p>Sign into your pages account</p>
                </div>
                <div className="row">
                  {/* Email Field */}
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
                            {...field}
                            placeholder="demo@gmail.com"
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

                  {/* Password Field */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="form-group mb-4">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            {...field}
                            placeholder="Enter your password"
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

                  {/* Remember Me */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="check-box-wrap">
                      <div className="input-box">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                      </div>
                      <div className="forget-btn">
                        <Link to="/auth/forgot-password">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <button
                      type="submit"
                      className="tp-accountBtn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && (
                        <span
                          className="spinner-border spinner-border-sm mx-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      {isSubmitting ? "Logging in..." : "Login"}
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
                        <i className="fa fa-google"></i> &ensp; Login with
                        Google
                      </span>
                    </button>
                  </li>
                </ul>

                {/* Footer */}
                <p className="subText mt-1">
                  Don&apos;t have an account?{" "}
                  <Link to="/auth/register">Create free account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
