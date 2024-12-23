import { Link } from "react-router-dom";

const Register = () => {
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
                  <Link className="tp-accountBtn" to="/auth/login">
                    <span>Log in</span>
                  </Link>
                </div>
                <div className="image">
                  <img src="/assets/images/login.png" alt="" />
                </div>
                <div className="back-home">
                  <Link className="tp-accountBtn" to="">
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
                  <div className="col-lg-12 col-md-12 col-12">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name here.."
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <label>Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Your email here.."
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="pwd2"
                        type="password"
                        placeholder="Your password here.."
                        name="pass"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-default reveal3"
                          type="button"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        className="pwd3"
                        type="password"
                        placeholder="Your password here.."
                        name="pass"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-default reveal2"
                          type="button"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <button type="submit" className="tp-accountBtn">
                      Signup
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
                  I have an account <a href="login.html">Login account</a>
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
