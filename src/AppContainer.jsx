/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updateToken } from "./redux/restApi";
import { useRouter } from "./hooks/use-router";

export default function AppContainer() {
  const token = useSelector((state) => state.auth?.accessToken);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!token) {
      updateToken(token);
    } else {
      // router.replace(paths.auth.login)
    }
  }, [dispatch, token]);

  return (
    <>
      <ToastContainer
        style={{ zIndex: "999999999999999" }}
        stacked
        position="top-right"
        autoClose={5000000000000000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      {/*  */}
    </>
  );
}
