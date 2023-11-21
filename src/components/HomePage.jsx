import Header from "./Header";
import ImageSlider from "./ImageSlider";
import LogoSlider from "./LogoSlider";
import ButtonSection from "./ButtonSection";
import ProductImgSection from "./ProductImgSection";
import ClothingAccessoriesSection from "./ClothingAccessoriesSection";

export default function HomePage() {
  return (
    <div className="HomePage  bg-black">
      <Header />
      <ImageSlider />
      <LogoSlider />
      <ButtonSection />
      <ProductImgSection />
      <ClothingAccessoriesSection />
    </div>
  );
}
