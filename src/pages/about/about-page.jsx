import Breadcrumb from "../../components/breadcrumb.jsx";
import AboutStart from "../../modules/about/about-start.jsx";
import CategoryArea from "../../modules/about/category-area.jsx";
import HomeTestimonials from "../../modules/home/home-testimonials.jsx";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb />

      <AboutStart />

      <CategoryArea />

      <HomeTestimonials />
    </>
  );
}
