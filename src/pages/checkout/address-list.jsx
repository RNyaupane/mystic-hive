/* eslint-disable no-unused-vars */
import { useState } from "react";

const countries = ["Nepal", "India", "USA"];
const statesByCountry = {
  Nepal: ["Bagmati", "Gandaki", "Karnali"],
  India: ["Maharashtra", "Karnataka", "Tamil Nadu"],
  USA: ["California", "Texas", "New York"],
};
const citiesByState = {
  Bagmati: ["Kathmandu", "Lalitpur", "Bhaktapur"],
  Gandaki: ["Pokhara", "Gorkha", "Lamjung"],
  Karnali: ["Surkhet", "Jumla", "Dolpa"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Texas: ["Houston", "Dallas", "Austin"],
  "New York": ["New York City", "Buffalo", "Rochester"],
};

const AddressList = ({
  address = [],
  addLoad = false,
  activeAccordion,
  toggleAccordion,
  isNewAdd,
  setIsNewAdd,
  setSelectedAddress,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Get states and cities based on the selected country and state
  const states = formData.country ? statesByCountry[formData.country] : [];
  const cities = formData.state ? citiesByState[formData.state] : [];

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
                    onChange={(e) => {
                      setSelectedAddress(e.target.value), setIsNewAdd(false);
                    }}
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
                <>
                  <div className="billing-adress">
                    <div className="contact-form form-style">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                          <label htmlFor="Country">Country</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-control"
                          >
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                          <label htmlFor="Country">State</label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!formData.country}
                          >
                            {states.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                          <label htmlFor="Country">City</label>
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!formData.country}
                          >
                            {cities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12">
                          <label htmlFor="postalCode">Post Code</label>
                          <input
                            name="postal_code"
                            value={formData.postal_code}
                            onChange={handleChange}
                            placeholder="Enter Postal Code..."
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressList;
