import HomeCategory from "../../modules/home/home-category";
import HomeFlashSale from "../../modules/home/home-flash-sale";
import HomeHero from "../../modules/home/home-hero";
import HomeOffer from "../../modules/home/home-offer";
import HomeProduct from "../../modules/home/home-product";
import HomeService from "../../modules/home/home-service";
import HomeTestimonials from "../../modules/home/home-testimonials";

const HomePage = () => {
  return (
    <>
      <HomeHero />

      <HomeCategory />

      <HomeProduct />

      <HomeOffer />

      <HomeFlashSale />

      <HomeService />

      <HomeTestimonials />
    </>
  );
};

export default HomePage;
