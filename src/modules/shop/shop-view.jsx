/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "./filter-section";
import ShopProductView from "./shop-product-view";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/reducers/product/productSlice";

const ShopView = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products = [], isLoading } = useSelector((state) => state.product);

  // Filter products based on search query
  const filteredProducts = products?.filter((product) =>
    product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );
  return (
    <div className="shop-section">
      <div className="container">
        <div className="row">
          <FilterSection
            searchValue={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />

          <ShopProductView products={filteredProducts} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ShopView;
