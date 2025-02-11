import { useEffect, useState } from "react";
import { requests } from "../../redux/restApi";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import { logoutUser } from "../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import AddressForm from "./address-form";
import OrderList from "./profile-order";

const ProfilePicture = ({ src, onEdit, onLogout }) => (
  <div className="comment-theme col-12 col-lg-3 position-static">
    <div className="comment-image d-flex">
      <img
        style={{ height: "90%", width: "90%", maxWidth: "200px" }}
        className="m-auto"
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

const AddressList = ({ addresses }) => (
  <div className="row bg-light" style={{ width: "100%" }}>
    <div className=" p-0" style={{ overflow: "auto" }}>
      <table className="table-responsive cart-wrap ">
        <thead>
          <tr>
            <th className="py-0">#</th>
            <th className="py-0">City</th>
            <th className="py-0">State</th>
            <th className="py-0">Country</th>
            <th className="py-0">Postal Code</th>
            <th className="py-0">Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index} className="cursor-pointer">
              <td>{index + 1}</td>
              <td>{address?.city}</td>
              <td>{address?.state}</td>
              <td>{address?.country}</td>
              <td>{address?.postal_code}</td>
              <td className="actions">
                <ul>
                  <li className="w-btn-view d-flex justify-content-center gap-2 ">
                    <a title="View" className="">
                      <i className="fi ti-trash text-danger"></i>
                    </a>
                    {/* <a title="View" className="">
                      <i className="fi ti-pencil text-warning"></i>
                    </a> */}
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
    <div className="cart-area section-padding pt-0">
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
                        <h4 className="">Addresses List</h4>

                        <div className="">
                          <button
                            className="btn btn-dark"
                            onClick={() => setOpenForm(true)}
                          >
                            + Add New
                          </button>
                        </div>
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
              <h3 className="comments-title mt-5 mb-4">Order History</h3>
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
