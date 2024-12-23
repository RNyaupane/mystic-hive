import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="tp-login-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form className="tp-accountWrapper" action="#">
              <div className="tp-accountInfo">
                <div className="tp-accountInfoHeader">
                  <Link to="/">
                    <img src="/assets/images/logo.png" alt="" /> Annahl
                  </Link>
                  <Link className="tp-accountBtn" to="/auth/register">
                    <span>Create Account</span>
                  </Link>
                </div>
                <div className="image">
                  <img src="/assets/images/login.png" alt="" />
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
                  <div className="col-lg-12 col-md-12 col-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="demo@gmail.com"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        className="pwd"
                        type="password"
                        id="password"
                        value="123456"
                        name="pass"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-default reveal"
                          type="button"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="check-box-wrap">
                      <div className="input-box">
                        <input
                          type="checkbox"
                          id="fruit4"
                          name="fruit-4"
                          value="Strawberry"
                        />
                        <label htmlFor="fruit4">Remember Me</label>
                      </div>
                      <div className="forget-btn">
                        <a href="forgot.html">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <button type="submit" className="tp-accountBtn">
                      Login
                    </button>
                  </div>
                </div>
                <h4 className="or">
                  <span>OR</span>
                </h4>
                <ul className="tp-socialLoginBtn">
                  <li>
                    <button className="facebook" type="button">
                      <span>
                        <i className="fa fa-facebook"></i>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="twitter" type="button">
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="linkedin" type="button">
                      <span>
                        <i className="fa fa-linkedin"></i>
                      </span>
                    </button>
                  </li>
                </ul>
                <p className="subText">
                  Don&apos;t have an account?{" "}
                  <a href="register.html">Create free account</a>
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
