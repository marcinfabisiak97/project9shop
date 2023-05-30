import Categories from "./Categories";
import Navbar from "./Navbar";
import PromoInfo from "./PromoInfo";
import Slider from "./Slider";
import Products from "./Products";
const MainPage = () => {
  return (
    <>
      <PromoInfo />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default MainPage;
