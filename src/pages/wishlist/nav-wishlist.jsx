import { useSelector } from "react-redux";

const NavWishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.product);

  const wishlistProducts = products?.filter((product) =>
    items?.some((item) => item?.id === product?.id)
  );

  return (
    <div className="mini-cart-items">
      {wishlistProducts &&
        wishlistProducts?.map((item, index) => (
          <div className="mini-cart-item clearfix" key={index}>
            <div className="mini-cart-item-image">
              <a href="product-single.html">
                <img
                  src={
                    item?.images?.[0]?.image ||
                    "/assets/images/product/default-product.png"
                  }
                  alt={item?.name}
                />
              </a>
            </div>
            <div className="mini-cart-item-des">
              <a href="product-single.html">{item?.name}</a>
              <span className="mini-cart-item-price">${item?.unit_price}</span>
              <span className="mini-cart-item-quantity">x 1</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NavWishlist;
