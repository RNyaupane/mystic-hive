import { useEffect, useState } from "react";
import { requests } from "../../redux/restApi";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import { logoutUser } from "../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const ProfilePicture = ({ src, onEdit, onLogout }) => (
  <div className="comment-theme col-12 col-lg-3 position-static">
    <div className="comment-image">
      <img
        style={{ height: "90%", width: "90%" }}
        src={
          src ||
          "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
        }
        alt="Profile"
      />
    </div>
    <div className="my-5 d-flex gap-3 px-3">
      <button className="cursor-pointer btn btn-light w-100" onClick={onEdit}>
        Edit
      </button>
      <button
        className="cursor-pointer btn btn-danger w-100"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  </div>
);

const AddressForm = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => onSave(formData);

  return (
    <form
      id="commentform"
      style={{ background: "#ebebeb" }}
      className="comment-form border px-4 py-4 mb-4"
    >
      <div className="form-inputs">
        <input type="text" style={{ display: "none" }} />
        {["city", "state", "postalCode", "country"].map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Enter ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }...`}
            type="text"
            className="form-control mb-2"
          />
        ))}
      </div>
      <div className="form-submit d-flex">
        <div className="ms-auto d-flex gap-3 mt-2">
          <button
            type="button"
            className="btn bg-light text-dark"
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

const AddressList = ({ addresses }) => (
  <div className="row">
    {addresses.map((address, index) => (
      <div className="address-container col-12 col-lg-6" key={index}>
        <div className="comments-meta bg-light rounded-3 py-3 px-4 mb-3">
          <h5>
            City &ensp; : &ensp; <span>{address.city}</span>
          </h5>
          <h5>
            State &ensp; : &ensp; <span>{address.state}</span>
          </h5>
        </div>
      </div>
    ))}
  </div>
);

const OrderList = ({ orders }) => (
  <div className="cart-wrapper">
    <table className="table-responsive cart-wrap">
      <thead>
        <tr>
          {[
            "Order ID",
            "Date",
            "Quantity",
            "Ship To",
            "Total Price",
            "Status",
            "Action",
          ].map((heading, idx) => (
            <th key={idx} className={heading.toLowerCase().replace(" ", "-")}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <tr key={idx}>
            <td className="images">{order.id}</td>
            <td className="product">{order.date}</td>
            <td className="ptice">{order.quantity}</td>
            <td className="name">{order.shipTo}</td>
            <td className="ptice">${order.totalPrice}</td>
            <td className={order.status.toLowerCase()}>
              <span>{order.status}</span>
            </td>
            <td className="action">
              <ul>
                <li className="w-btn-view">
                  <a href="#" title="View">
                    <i className="fi ti-eye"></i>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const res = await requests.get("auth/profile/me/");
        setUserProfile(res?.data || {});
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleAddAddress = async (data) => {
    try {
      await requests.post("auth/address/", {
        ...data,
        address_line1: data.state,
      });
      toast.success("Address added successfully");
      setOpenForm(false);
      setUserProfile((prev) => ({
        ...prev,
        addresses: [...(prev.addresses || []), data],
      }));
    } catch (err) {
      console.error(err);
      toast.error("Failed to add address");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logged out successfully");
  };

  return (
    <div className="cart-area section-padding">
      <div className="container blog-single-section">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="comments-area">
              <h3 className="comments-title mb-4">My Profile</h3>
              <div className="comments-section cart-wrapper py-4 px-3">
                <div className="row">
                  <ProfilePicture
                    src={userProfile.profile_picture}
                    onEdit={() => alert("Edit profile")}
                    onLogout={handleLogout}
                  />
                  <div className="comment-main-area col-12 col-lg-8 ps-1">
                    <div className="comments-meta">
                      <h4>
                        {`${userProfile.first_name || ""} ${
                          userProfile.last_name || ""
                        }`}
                        <span className="comments-date">
                          {userProfile.email}
                        </span>
                      </h4>
                    </div>
                    <div className="comment-area">
                      <p>{userProfile.additional_info || ""}</p>
                    </div>
                    <div className="comment-respond mt-5">
                      <div className="d-flex justify-content-between">
                        <h3 className="comment-reply-title">Addresses List</h3>
                        {!openForm && (
                          <div className="">
                            <button
                              className="btn btn-dark"
                              onClick={() => setOpenForm(true)}
                            >
                              + Add New
                            </button>
                          </div>
                        )}
                        {openForm && (
                          <div className="">
                            <button
                              className="btn btn-danger"
                              onClick={() => setOpenForm(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </div>
                      {openForm && (
                        <AddressForm
                          onCancel={() => setOpenForm(false)}
                          onSave={handleAddAddress}
                        />
                      )}
                      <AddressList addresses={userProfile.addresses || []} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form">
              <h3 className="comments-title mt-5 mb-4">All Orders</h3>
              <OrderList
                orders={[
                  {
                    id: "8976A",
                    date: "05 : 08 : 2019",
                    quantity: 6,
                    shipTo: "Alex Genderia",
                    totalPrice: 450,
                    status: "Delivered",
                  },
                  // Add more order objects here...
                ]}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
