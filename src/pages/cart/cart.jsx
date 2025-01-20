/* eslint-disable no-extra-boolean-cast */
import { useDispatch, useSelector } from "react-redux";
import CartView from "../../modules/cart/cart-view";
import { useEffect } from "react";
import { getCartItem } from "../../redux/reducers/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!!id) {
      dispatch(getCartItem(id));
    }
  }, [dispatch, id]);
  return (
    <>
      <CartView />
    </>
  );
};

export default CartPage;
