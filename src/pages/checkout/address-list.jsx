const AddressList = ({
  address = [],
  addLoad = false,
  activeAccordion,
  toggleAccordion,
  isNewAdd,
  setIsNewAdd,
  setSelectedAddress,
}) => {
  return (
    <div className="caupon-wrap s2">
      <div className="biling-item">
        <div
          className={`coupon coupon-3 ${
            activeAccordion.address
              ? "accordian-border-top"
              : " accordian-border-left "
          }`}
          onClick={() => toggleAccordion("address")}
        >
          <label id="toggle2">Billing Address</label>
        </div>
        {activeAccordion.address && (
          <div className="billing-adress" id="open2">
            <div className="contact-form form-style">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  {addLoad ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm mx-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <label htmlFor="Country">Loading Address</label>
                    </>
                  ) : (
                    <label htmlFor="Country">Select Your Address</label>
                  )}
                  <select
                    name="address"
                    id="address"
                    defaultValue={0}
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    className="form-control"
                  >
                    <option disabled value={0}>
                      Select Address
                    </option>
                    {!addLoad && address.length > 0 ? (
                      address?.map((item, index) => (
                        <option
                          className="py-4 my-3"
                          key={index}
                          value={item?.id}
                        >
                          {`${item.address_line1}, ${
                            item.address_line2 ? item.address_line2 + ", " : ""
                          }${item.city}, ${item.state}, ${item.country} - ${
                            item.postal_code
                          }`}
                        </option>
                      ))
                    ) : (
                      <option>No Address</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="biling-item-2">
              <input
                id="toggle3"
                type="checkbox"
                checked={isNewAdd}
                onChange={() => {}}
                onClick={() => setIsNewAdd(!isNewAdd)}
              />
              <label className="fontsize ps-2 cursor-pointer" htmlFor="toggle3">
                Ship to a different address?
              </label>
              {isNewAdd && (
                <div className="billing-adress">
                  <div className="contact-form form-style">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <label htmlFor="Country">Country</label>
                        <select
                          name="address"
                          id="Country"
                          className="form-control"
                        >
                          <option disabled="">United State</option>
                          <option>Bangladesh</option>
                          <option>India</option>
                          <option>Srilanka</option>
                          <option>Pakisthan</option>
                          <option>Afgansthan</option>
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12">
                        <label htmlFor="district">Dristrict</label>
                        <input
                          type="text"
                          placeholder=""
                          id="district"
                          name="district"
                        />
                      </div>

                      <div className="col-lg-6 col-md-12 col-12">
                        <label htmlFor="postalCode">Post Code</label>
                        <input
                          type="text"
                          placeholder=""
                          id="postalCode"
                          name="postalCode"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-12">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          placeholder=""
                          id="city"
                          name="city"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="submit-btn-area">
                <ul>
                  <li>
                    <button
                      className="theme-btn"
                      type="button"
                      onClick={() => toggleAccordion("payment")}
                    >
                      Save & continue
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressList;
