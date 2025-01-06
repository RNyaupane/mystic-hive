import { useDispatch } from "react-redux";
import FilterSection from "./filter-section";
import ShopProductView from "./shop-product-view";
import { useEffect } from "react";
import { getProducts } from "../../redux/reducers/product/productSlice";

const ShopView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="shop-section">
      <div className="container">
        <div className="row">
          <FilterSection />

          <ShopProductView />
        </div>
      </div>
    </div>
  );
};

export default ShopView;
