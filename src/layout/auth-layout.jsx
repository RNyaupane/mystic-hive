import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useRouter } from "../hooks/use-router";

const AuthLayout = () => {
  const token = useSelector((state) => state.auth?.accessToken);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = useRouter();

  useEffect(() => {
    if (!!token && isAuthenticated) {
      router.back();
    }
  }, [token, isAuthenticated, router]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
