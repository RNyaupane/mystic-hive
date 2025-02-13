import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser, googleLoginUser } from "../../redux/reducers/authSlice"; // Add googleLoginUser action
import { useGoogleLogin } from "@react-oauth/google";

import { toast } from "react-toastify";
import { useState } from "react";
import { Icon } from "@iconify/react";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_GOOOGLE_CLIENT_SECRET;
const clientSocialSecret = import.meta.env.VITE_SOCIAL_SECRET;

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log("Authorization Code:", codeResponse);

      // const userInfoResponse = await fetch(
      //   `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${codeResponse.access_token}`
      // );
      // const userInfo = await userInfoResponse.json();
      // console.log(userInfo);
      // Exchange the authorization code for tokens
      try {
        const tokenResponse = await fetch(
          "https://oauth2.googleapis.com/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              code: codeResponse.code,
              client_id: clientId,
              client_secret: clientSecret,
              redirect_uri: "http://localhost:5173",
              grant_type: "authorization_code",
            }),
          }
        );

        const tokens = await tokenResponse.json();
        console.log("Tokens:", tokens);

        // Now you should have both access_token and id_token
        const { id_token, access_token } = tokens;

        // Send the id_token to your backend
        const response = await dispatch(
          googleLoginUser({
            auth_token: id_token,
          })
        ).unwrap();

        toast.success(
          response?.message?.[0] || response?.message || "Login Successful"
        );
      } catch (error) {
        console.error("Token Exchange Error:", error);
        toast.error("Google login failed");
      }
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
      toast.error("Google Login Failed");
    },
    scope: "openid email profile",
    flow: "auth-code",
    responseType: "code", // Use authorization code flow
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)); // Dispatch login action
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
                    <img src="/assets/img/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="back-home">
                  <Link className="tp-accountBtn" to="/">
                    Back To Home
                  </Link>
                </div>
              </div>
              <div className="tp-accountForm form-style">
                <div className="fromTitle">
                  <h2>Login</h2>
                  <p>Sign into your account</p>
                </div>
                <div className="row">
                  {/* Email Field */}
                  <div className="col-lg-12">
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
                            placeholder="Enter email"
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
                  <div className="col-lg-12">
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="form-group mb-4">
                          <label htmlFor="password">Password</label>
                          <div
                            className="input-group align-items-center"
                            style={{ flexWrap: "nowrap" }}
                          >
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              {...field}
                              placeholder="Enter your password"
                              className={`form-control ${
                                errors.password ? "is-invalid" : ""
                              }`}
                            />
                            <div
                              className="cursor-pointer"
                              style={{
                                position: "absolute",
                                right: "10px",
                                zIndex: "99",
                              }}
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <Icon
                                  icon="fa6-regular:eye"
                                  className="text-secondary"
                                />
                              ) : (
                                <Icon
                                  icon="fa6-regular:eye-slash"
                                  className="text-secondary"
                                />
                              )}
                            </div>
                          </div>
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
                  <div className="col-lg-12">
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
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="tp-accountBtn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span
                          className="spinner-border spinner-border-sm mx-2"
                          role="status"
                        ></span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </div>
                <h4 className="or">
                  <span>OR</span>
                </h4>
                {/* Google Login Button */}
                <ul className="tp-socialLoginBtn">
                  <li>
                    <button
                      className="w-auto px-3 btn btn-secondary"
                      type="button"
                      onClick={googleLogin}
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
