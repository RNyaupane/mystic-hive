/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Breadcrumb = ({ title = "" }) => {
  return (
    <div className="tp-breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-breadcumb-wrap">
              <h2>{title}</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span>{title}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-img-1">
        <img src="/assets/images/slider/img-2.png" alt="" />
      </div>
      <div className="hero-shape-img-2">
        <img src="/assets/images/slider/img-3.png" alt="" />
      </div>
    </div>
  );
};

export default Breadcrumb;
