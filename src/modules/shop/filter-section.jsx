/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FilterItem = ({ title, children }) => (
  <div className="filter-item">
    <div className="shop-filter-item">
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);

const RadioList = ({ items, name, handlePriceRangeChange }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <label className="topcoat-radio-button__label">
          {item.label}
          <input
            type="radio"
            name={name}
            onChange={() => handlePriceRangeChange(item.min, item.max)}
          />
          <span className="topcoat-radio-button"></span>
        </label>
      </li>
    ))}
  </ul>
);

const ColorList = ({ colors }) => (
  <div className="color-name">
    <ul>
      {colors.map((color, index) => (
        <li className={`color${index + 1}`} key={index}>
          <input
            id={`cl${index + 1}`}
            type="radio"
            name="col"
            value={color.value}
          />
          <label htmlFor={`cl${index + 1}`}></label>
        </li>
      ))}
    </ul>
  </div>
);

const FilterSection = ({
  searchValue,
  onSearchChange,
  setSelectedPriceRange,
  selectedPriceRange,
}) => {
  const priceOptions = [
    { label: "All prices", min: null, max: null },
    { label: "$50 – $100", min: 50, max: 100 },
    { label: "$100 – $200", min: 100, max: 200 },
    { label: "$200 – $300", min: 200, max: 300 },
    { label: "$300 – $400", min: 300, max: 400 },
    { label: "$400 and more", min: 400, max: null },
  ];

  const sizeOptions = [
    { label: "Small Jar" },
    { label: "Large Jar" },
    { label: "Medium Jar" },
    { label: "Extra large Jar" },
  ];

  const colorOptions = Array.from({ length: 7 }, (_, i) => ({ value: 30 }));

  const brandOptions = [
    { label: "Flower" },
    { label: "Hill" },
    { label: "Forest" },
    { label: "Queen" },
  ];

  const handlePriceRangeChange = (min, max) => {
    setSelectedPriceRange({ min, max });
  };

  return (
    <div className="col-lg-4">
      <div className="shop-filter-wrap">
        <FilterItem title="Search">
          <div className="shop-filter-search">
            <form>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchValue}
                  onChange={onSearchChange}
                />
                <button type="submit">
                  <i className="ti-search"></i>
                </button>
              </div>
            </form>
          </div>
        </FilterItem>

        <FilterItem title="Price">
          <RadioList
            items={priceOptions}
            name="topcoat"
            handlePriceRangeChange={handlePriceRangeChange}
          />
        </FilterItem>

        <FilterItem title="Size">
          <RadioList items={sizeOptions} name="topcoat2" />
        </FilterItem>

        {/* <FilterItem title="Color">
          <div className="shop-filter-item color">
            <ColorList colors={colorOptions} />
          </div>
        </FilterItem> */}

        <FilterItem title="Category">
          <RadioList items={brandOptions} name="topcoat3" />
        </FilterItem>
      </div>
    </div>
  );
};

export default FilterSection;
