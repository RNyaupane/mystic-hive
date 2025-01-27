/* eslint-disable no-extra-boolean-cast */
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../../redux/api-service/productApi";
import { toast } from "react-toastify";
import { createCart, getCartItem } from "../../redux/reducers/cartSlice";
import { removeItemToWishList } from "../../redux/reducers/wishlistSlice";

const WishlistPage = () => {
  const { items } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.product);
  const { id } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const wishlistProducts = products?.filter((product) =>
    items?.some((item) => item?.id === product?.id)
  );

  const handleAddToCart = async (productId) => {
    if (!!id) {
      try {
        const res = await productApi.addItemToCart(
          {
            product_id: productId,
            quantity: 1,
          },
          id
        );
        if (res?.status === 201 || res?.status === 200) {
          toast.success("Added Item to cart");
          dispatch(getCartItem(id));
        }
        console.log(res);
      } catch (err) {
        toast.error("Add to cart Failed");
        console.error(err);
      }
    } else {
      dispatch(
        createCart({
          product_id: productId,
          quantity: 1,
        })
      );
    }
  };
  const handleRemoveFromCart = (prodId) => {
    dispatch(removeItemToWishList({ id: prodId }));
  };
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
                        <th className="images images-b">Image</th>
                        <th className="product-2">Product Name</th>
                        <th className="ptice">Price</th>
                        <th className="stock">Stock Status</th>
                        <th className="remove remove-b">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlistProducts &&
                        wishlistProducts?.map((item, index) => (
                          <tr key={index}>
                            <td className="images">
                              <img
                                src={
                                  item?.images?.[0]?.image ||
                                  "/assets/img/product/default-product.png"
                                }
                                alt={item?.name}
                              />
                            </td>
                            <td className="product">
                              <ul>
                                <li className="first-cart">
                                  {item?.name || ""}
                                </li>
                                <li>Brand : {item?.brand || "N/A"}</li>
                                <li>Size : {item?.size || "N/A"}</li>
                              </ul>
                            </td>
                            <td className="ptice">
                              $ {item?.unit_price || "N/A"}
                            </td>
                            {item?.inventory <= 0 ? (
                              <td className="stock">In Stock</td>
                            ) : (
                              <td className="stock">
                                <span className="badge rounded-pill bg-danger text-white lh-lg border-0">
                                  Out of Stock
                                </span>
                              </td>
                            )}
                            <td className="action">
                              <ul>
                                <li className="c-btn">
                                  <a
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Add to Cart"
                                    onClick={() => handleAddToCart(item?.id)}
                                    className="cursor-pointer"
                                  >
                                    <i className="fi flaticon-shopping-cart"></i>
                                  </a>
                                </li>
                                <li className="w-btn">
                                  <a
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Remove from Cart"
                                    onClick={() =>
                                      handleRemoveFromCart(item?.id)
                                    }
                                    className="cursor-pointer"
                                  >
                                    <i className="fi flaticon-delete"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))}
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
