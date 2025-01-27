import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Page404 = () => {
  return (
    <>
      <Header />

      <section className="error-404-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="content clearfix">
                <div className="error">
                  <img src="/assets/img/error-404.png" alt="" />
                </div>
                <div className="error-message">
                  <h3>Oops! Page Not Found!</h3>
                  <p>
                    We’re sorry but we can’t seem to find the page you
                    requested. This might be because you have typed the web
                    address incorrectly.
                  </p>
                  <Link to="/" className="theme-btn">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page404;
