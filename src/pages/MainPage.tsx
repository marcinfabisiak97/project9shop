import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import PromoInfo from "../components/PromoInfo";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
const MainPage = () => {
  return (
    <>
      <PromoInfo />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default MainPage;
