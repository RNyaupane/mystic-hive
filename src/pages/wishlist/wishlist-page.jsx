const WishlistPage = () => {
  return (
    <div className="cart-area section-padding">
      <div className="container">
        <div className="form">
          <div className="cart-wrapper">
            <div className="row">
              <div className="col-12">
                <form action="https://themepresss.com/tf/html/annahl-live/cart">
                  <table className="table-responsive cart-wrap">
                    <thead>
                      <tr>
                        <th className="images images-b">Image</th>
                        <th className="product-2">Product Name</th>
                        <th className="ptice">Price</th>
                        <th className="stock">Stock Status</th>
                        <th className="remove remove-b">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="images">
                          <img src="/assets/images/cart/img-1.png" alt="" />
                        </td>
                        <td className="product">
                          <ul>
                            <li className="first-cart">Mango Flower Honey</li>
                            <li>Brand : Thoney</li>
                            <li>Size : Small jar</li>
                          </ul>
                        </td>
                        <td className="ptice">$ 250</td>
                        <td className="stock">In Stock</td>
                        <td className="action">
                          <ul>
                            <li className="c-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Add to Cart"
                                href="#"
                              >
                                <i className="fi flaticon-shopping-cart"></i>
                              </a>
                            </li>
                            <li className="w-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Remove from Cart"
                                href="#"
                              >
                                <i className="fi flaticon-delete"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images">
                          <img src="/assets/images/cart/img-2.png" alt="" />
                        </td>
                        <td className="product">
                          <ul>
                            <li className="first-cart">
                              Black Seed Flower Honey
                            </li>
                            <li>Brand : Thoney</li>
                            <li>Size : medium</li>
                          </ul>
                        </td>
                        <td className="ptice">$ 350</td>
                        <td className="stock">Stock Out</td>
                        <td className="action">
                          <ul>
                            <li className="c-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Add to Cart"
                                href="#"
                              >
                                <i className="fi flaticon-shopping-cart"></i>
                              </a>
                            </li>
                            <li className="w-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Remove from Cart"
                                href="#"
                              >
                                <i className="fi flaticon-delete"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images">
                          <img src="/assets/images/cart/img-3.png" alt="" />
                        </td>
                        <td className="product">
                          <ul>
                            <li className="first-cart">Pure Hill Honey</li>
                            <li>Brand : Thoney</li>
                            <li>Size : medium</li>
                          </ul>
                        </td>
                        <td className="ptice">$ 450</td>
                        <td className="stock">In Stock</td>
                        <td className="action">
                          <ul>
                            <li className="c-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Add to Cart"
                                href="#"
                              >
                                <i className="fi flaticon-shopping-cart"></i>
                              </a>
                            </li>
                            <li className="w-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Remove from Cart"
                                href="#"
                              >
                                <i className="fi flaticon-delete"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images">
                          <img src="/assets/images/cart/img-4.png" alt="" />
                        </td>
                        <td className="product">
                          <ul>
                            <li className="first-cart">Manuka Honey</li>
                            <li>Brand : Thoney</li>
                            <li>Size : Lerge</li>
                          </ul>
                        </td>
                        <td className="ptice">$ 550</td>
                        <td className="stock">Stock Out</td>
                        <td className="action">
                          <ul>
                            <li className="c-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Add to Cart"
                                href="#"
                              >
                                <i className="fi flaticon-shopping-cart"></i>
                              </a>
                            </li>
                            <li className="w-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Remove from Cart"
                                href="#"
                              >
                                <i className="fi flaticon-delete"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="images">
                          <img src="/assets/images/cart/img-5.png" alt="" />
                        </td>
                        <td className="product">
                          <ul>
                            <li className="first-cart">Wildflower Honey</li>
                            <li>Brand : Thoney</li>
                            <li>Size : Lerge</li>
                          </ul>
                        </td>
                        <td className="ptice">$ 550</td>
                        <td className="stock">In Stock</td>
                        <td className="action">
                          <ul>
                            <li className="c-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Add to Cart"
                                href="#"
                              >
                                <i className="fi flaticon-shopping-cart"></i>
                              </a>
                            </li>
                            <li className="w-btn">
                              <a
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Remove from Cart"
                                href="#"
                              >
                                <i className="fi flaticon-delete"></i>
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

export default WishlistPage;
