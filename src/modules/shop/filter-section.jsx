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

const RadioList = ({ items, name }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <label className="topcoat-radio-button__label">
          {item.label}
          <input type="radio" name={name} />
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

const FilterSection = () => {
  const priceOptions = [
    { label: "All prices" },
    { label: "$50 – $100 (1)" },
    { label: "$100 – $200 (21)" },
    { label: "$200 – $300 (13)" },
    { label: "$300 – $400 (3)" },
    { label: "$400 and more (2)" },
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
                />
                <button type="submit">
                  <i className="ti-search"></i>
                </button>
              </div>
            </form>
          </div>
        </FilterItem>

        <FilterItem title="Price">
          <RadioList items={priceOptions} name="topcoat" />
        </FilterItem>

        <FilterItem title="Size">
          <RadioList items={sizeOptions} name="topcoat2" />
        </FilterItem>

        <FilterItem title="Color">
          <div className="shop-filter-item color">
            <ColorList colors={colorOptions} />
          </div>
        </FilterItem>

        <FilterItem title="Brand">
          <RadioList items={brandOptions} name="topcoat3" />
        </FilterItem>
      </div>
    </div>
  );
};

export default FilterSection;
