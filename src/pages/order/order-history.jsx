const OrderHistoryPage = () => {
  return (
    <div className="cart-area section-padding">
      <div className="container">
        <div className="form">
          <div className="cart-wrapper">
            <div className="row">
              <div className="col-12">
                <form>
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

export default OrderHistoryPage;
