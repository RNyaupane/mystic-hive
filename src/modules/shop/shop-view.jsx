import FilterSection from "./filter-section";
import ShopProductView from "./shop-product-view";

const ShopView = () => {
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
