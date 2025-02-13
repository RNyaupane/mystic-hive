import { useState } from "react";
import { citiesByState, countries, statesByCountry } from "../../_mock/address";

const AddressForm = ({ onCancel, onSave, editMode, defaultValue }) => {
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    postal_code: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => onSave(formData);

  // Get states and cities based on the selected country and state
  const states = formData.country ? statesByCountry[formData.country] : [];
  const cities = formData.state ? citiesByState[formData.state] : [];

  return (
    <form
      id="commentform"
      className="comment-form px-4 py-4 my-5 accordian-border-top bg-light cart-wrapper"
    >
      <div className="form-inputs">
        <input type="text" style={{ display: "none" }} />

        {/* Country Select */}
        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="form-control bg-white mb-3"
        >
          <option value="" disabled>
            Select Country
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* State Select */}
        <label>State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="form-control bg-white mb-3"
          disabled={!formData.country}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* City Select */}
        <label>City</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control bg-white mb-3"
          disabled={!formData.state}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input className="d-none" />
        {/* Postal Code Input */}
        <label>Postal Code</label>
        <input
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          placeholder="Enter Postal Code..."
          type="text"
          className="form-control bg-white mb-3"
        />
      </div>

      <div className="form-submit d-flex">
        <div className="ms-auto d-flex gap-3 mt-2">
          <button
            type="button"
            className="btn bg-secondary text-white"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="button" className="btn btn-dark" onClick={handleSubmit}>
            Add Address
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
