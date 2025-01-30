import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyContent from "../../components/empty-content";

const NavWishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.product);

  const wishlistProducts = products?.filter((product) =>
    items?.some((item) => item?.id === product?.id)
  );

  return (
    <div className="mini-cart-items">
      {wishlistProducts?.length > 0 ? (
        wishlistProducts?.map((item, index) => (
          <div className="mini-cart-item clearfix" key={index}>
            <div className="mini-cart-item-image">
              <Link to={`/product/${item?.id}`}>
                <img
                  src={
                    item?.images?.[0]?.image ||
                    "/assets/img/product/default-product.png"
                  }
                  alt={item?.name}
                />
              </Link>
            </div>
            <div className="mini-cart-item-des">
              <Link to={`/product/${item?.id}`}>{item?.name}</Link>
              <span className="mini-cart-item-price">${item?.unit_price}</span>
              <span className="mini-cart-item-quantity">x 1</span>
            </div>
          </div>
        ))
      ) : (
        <EmptyContent title="No items in wishlist" />
      )}
    </div>
  );
};

export default NavWishlist;
