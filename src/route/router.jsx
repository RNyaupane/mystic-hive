import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import PreLoader from "../components/pre-loader";
import Register from "../pages/auth/register.jsx";
import ProtectedRoute from "./PrivateRoutes.jsx";
import Profile from "../pages/auth/profile.jsx";

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
const CheckoutPageNew = lazy(() =>
  import("../pages/checkout/checkout-page-new.jsx")
);
const OrderHistoryPage = lazy(() => import("../pages/order/order-history.jsx"));
const BlogPage = lazy(() => import("../pages/blogs/blog-page.jsx"));
const Page404 = lazy(() => import("../components/page-404.jsx"));
const BlogDetailsPage = lazy(() => import("../pages/blogs/details.jsx"));
const FaqPage = lazy(() => import("../pages/faq/faq-page.jsx"));

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
          path: "blogs",
          element: <BlogPage />,
        },
        {
          path: "blogs/:id",
          element: <BlogDetailsPage />,
        },
        {
          path: "product/:id",
          element: <ProductDetailsPage />,
        },
        {
          path: "wishlist",
          element: <ProtectedRoute element={WishlistPage} />,
        },
        {
          path: "cart",
          element: <ProtectedRoute element={CartPage} />,
        },
        {
          path: "checkout",
          element: <ProtectedRoute element={CheckoutPageNew} />,
        },
        {
          path: "order",
          element: <ProtectedRoute element={OrderHistoryPage} />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "faq",
          element: <FaqPage />,
        },
        {
          path: "profile",
          element: <ProtectedRoute element={Profile} />,
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
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return <Suspense fallback={<PreLoader />}>{routes}</Suspense>;
};

export default AppRouter;
