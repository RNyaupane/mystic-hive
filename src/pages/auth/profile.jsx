import { useState } from "react";

const Profile = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleAddAddress = () => {
    console.log("object");
  };
  return (
    <div className="cart-area section-padding">
      <div className="container blog-single-section">
        <div className="comments-area">
          <div className="comments-section">
            <h3 className="comments-title mb-4">My Profile</h3>
            <ol className="comments cart-wrapper ">
              <li className="comment even thread-even depth-1" id="comment-1">
                <div id="div-comment-1" className="bg-transparent row">
                  <div className="comment-theme col-12 col-lg-3 position-static">
                    <div className="comment-image">
                      <img
                        style={{ height: "90%", width: "90%" }}
                        src="/assets/images/blog-details/comments-author/img-1.jpg"
                        alt
                      />
                    </div>
                    <div className=" mt-5 d-flex gap-3 px-3">
                      <button className="cursor-pointer btn btn-light w-100 ">
                        Edit
                      </button>
                      <button className="cursor-pointer btn btn-danger w-100 ">
                        Logout
                      </button>
                    </div>
                  </div>
                  <div className="comment-main-area col-12 col-lg-8 ps-1">
                    <div className="comment-wrapper">
                      <div className="comments-meta">
                        <h4>
                          John Abraham{" "}
                          <span className="comments-date">user@gmail.com</span>
                        </h4>
                      </div>
                      <div className="comment-area">
                        <p>
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth,{" "}
                        </p>
                      </div>
                    </div>

                    <div className="comment-respond  mt-5">
                      <div className="d-flex justify-content-between">
                        <h3 className="comment-reply-title">Addresses List</h3>
                        <div className="">
                          <div className="d-flex gap-2">
                            {!openForm && (
                              <a
                                className=" cursor-pointer btn btn-dark "
                                onClick={() => setOpenForm(true)}
                              >
                                + Add New
                              </a>
                            )}
                            {openForm && (
                              <a
                                className=" cursor-pointer btn btn-danger"
                                onClick={() => setOpenForm(false)}
                              >
                                Cancel
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      {openForm && (
                        <form
                          id="commentform"
                          className="comment-form border border px-4 py-4 mb-4"
                        >
                          <div className="form-inputs">
                            <input
                              placeholder=""
                              type="url"
                              style={{ display: "none" }}
                            />
                            <input placeholder="Enter City..." type="text" />
                            <input placeholder="Enter State..." type="text" />
                          </div>
                          <div className="form-submit d-flex">
                            <div className="ms-auto d-flex gap-3 mt-2">
                              <input
                                value="Cancel"
                                className="bg-light text-dark cursor-pointer text-center"
                                onClick={() => setOpenForm(false)}
                              />
                              <input
                                value="Add Address"
                                className="cursor-pointer text-center"
                                onClick={handleAddAddress}
                              />
                            </div>
                          </div>
                        </form>
                      )}
                      <div className="row ">
                        {Array.from({ length: 3 }).map((item, index) => (
                          <div
                            className="address-container col col-lg-6"
                            key={index}
                          >
                            <div className="comments-meta bg-light  py-3 px-4 mb-3 cursor-pointer">
                              <h5>
                                City &ensp; : &ensp;
                                <span>Kathmandu {index}</span>
                              </h5>
                              <h5>
                                State &ensp; : &ensp;<span>Kathmandu</span>
                              </h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Order List */}
        <div className="form">
          <h3 className="comments-title mt-5 mb-4" style={{ fontSize: "2rem" }}>
            All Orders
          </h3>
          <div className="cart-wrapper">
            <div className="row">
              <div className="col-12">
                <form action="">
                  <table className="table-responsive cart-wrap">
                    <thead>
                      <tr>
                        <th className="images images-b">Order ID</th>
                        <th className="product">Date</th>
                        <th className="ptice">Quantity</th>
                        <th className="ptice">Ship To</th>
                        <th className="">Total Price</th>
                        <th className="remove">Status</th>
                        <th className="action remove-b">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="images"># 8976A</td>
                        <td className="product">05 : 08 : 2019</td>
                        <td className="ptice">06</td>
                        <td className="name">Alex Genderia</td>
                        <td className="">$ 450</td>
                        <td className="Del">
                          <span>Delivered</span>
                        </td>
                        <td className="action">
                          <ul>
                            <li className="w-btn-view">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="View"
                                href="#"
                              >
                                <i className="fi ti-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images"># 8976A</td>
                        <td className="product">05 : 08 : 2019</td>
                        <td className="ptice">06</td>
                        <td className="name">Alex Genderia</td>
                        <td className="">$ 450</td>
                        <td className="stock">
                          <span>Pending</span>
                        </td>
                        <td className="action">
                          <ul>
                            <li className="w-btn-view">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="View"
                                href="#"
                              >
                                <i className="fi ti-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images"># 8976A</td>
                        <td className="product">05 : 08 : 2019</td>
                        <td className="ptice">06</td>
                        <td className="name">Alex Genderia</td>
                        <td className="">$ 450</td>
                        <td className="stocks">
                          <span>Pending</span>
                        </td>
                        <td className="action">
                          <ul>
                            <li className="w-btn-view">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="View"
                                href="#"
                              >
                                <i className="fi ti-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images"># 8976A</td>
                        <td className="product">05 : 08 : 2019</td>
                        <td className="ptice">06</td>
                        <td className="name">Alex Genderia</td>
                        <td className="">$ 450</td>
                        <td className="can">
                          <span>Canceled</span>
                        </td>
                        <td className="action">
                          <ul>
                            <li className="w-btn-view">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="View"
                                href="#"
                              >
                                <i className="fi ti-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images"># 8976A</td>
                        <td className="product">05 : 08 : 2019</td>
                        <td className="ptice">06</td>
                        <td className="name">Alex Genderia</td>
                        <td className="">$ 450</td>
                        <td className="pro">
                          <span>Processing</span>
                        </td>
                        <td className="action">
                          <ul>
                            <li className="w-btn-view">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="View"
                                href="#"
                              >
                                <i className="fi ti-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
