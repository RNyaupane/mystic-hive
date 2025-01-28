import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRouter from "./route/router";
import ScrollToTop from "./hooks/scroll-top";

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

export default App;
