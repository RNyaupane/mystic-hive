import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import PreLoader from "../components/pre-loader";
import Register from "../pages/auth/register.jsx";

const MainLayout = lazy(() => import("../layout/main-layout"));
const AboutPage = lazy(() => import("../pages/about/about-page.jsx"));
const AuthLayout = lazy(() => import("../layout/auth-layout.jsx"));
const Login = lazy(() => import("../pages/auth/login.jsx"));
const HomePage = lazy(() => import("../pages/home/home-page"));
const ShopPage = lazy(() => import("../pages/shop/shop-page.jsx"));
const ContactPage = lazy(() => import("../pages/contact/contact-page.jsx"));
const ProductDetailsPage = lazy(() => import("../pages/product/details.jsx"));
const WishlistPage = lazy(() => import("../pages/wishlist/wishlist-page.jsx"));
const CartPage = lazy(() => import("../pages/cart/cart.jsx"));
const CheckoutPage = lazy(() => import("../pages/checkout/checkout-page.jsx"));
const OrderHistoryPage = lazy(() => import("../pages/order/order-history.jsx"));

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "product/:id",
          element: <ProductDetailsPage />,
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <CheckoutPage />,
        },
        {
          path: "order",
          element: <OrderHistoryPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return <Suspense fallback={<PreLoader />}>{routes}</Suspense>;
};

export default AppRouter;
