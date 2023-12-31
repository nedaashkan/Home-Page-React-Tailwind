import Header from "./Header";
import ImageSlider from "./ImageSlider";
import LogoSlider from "./LogoSlider";
import ButtonSection from "./ButtonSection";
import ProductImgSection from "./ProductImgSection";
import ClothingAccessoriesSection from "./ClothingAccessoriesSection";
import ActionFiguresSection from "./ActionFiguresSection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="HomePage  bg-black">
      <Header />
      <ImageSlider />
      <LogoSlider />
      <ButtonSection />
      <ProductImgSection />
      <ClothingAccessoriesSection />
      <ActionFiguresSection />
      <Footer />
    </div>
  );
}
