/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "./filter-section";
import ShopProductView from "./shop-product-view";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/reducers/product/productSlice";

const ShopView = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products = [], isLoading } = useSelector((state) => state.product);
  const filteredProducts = products?.filter((product) =>
    product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "date-posted":
        return new Date(b.created_at) - new Date(a.created_at);
      case "price-high-low":
        return parseFloat(b.unit_price) - parseFloat(a.unit_price);
      case "price-low-high":
        return parseFloat(a.unit_price) - parseFloat(b.unit_price);
      default:
        return 0;
    }
  });
  return (
    <div className="shop-section">
      <div className="container">
        <div className="row">
          <FilterSection
            searchValue={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />

          <ShopProductView
            products={sortedProducts}
            isLoading={isLoading}
            onSortChange={(e) => setSortOption(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopView;
