import Header from "./Header";
import ImageSlider from "./ImageSlider";
import LogoSlider from "./LogoSlider";
import ButtonSection from "./ButtonSection";

export default function HomePage() {
  return (
    <div className="HomePage  bg-black">
      <Header />
      <ImageSlider />
      <LogoSlider />
      <ButtonSection />
    </div>
  );
}
