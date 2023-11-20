// fix this slider make like desing

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "./Logo";
import "./LogoSlider.css";

let logoSliderData = [
  {
    src: "/src/assets/LogoSlider/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/2.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/3.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/4.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/5.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/6.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/7.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/LogoSlider/7.png",
    alt: "/",
    link: "",
  },
];

export default function LogoSlider() {
  return (
    <div className="LogoSlider">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation
        spaceBetween={0}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {logoSliderData.map((logo, index) => {
          return (
            <SwiperSlide key={index}>
              <Logo
                LogoAlt={logo.alt}
                LogoSrc={logo.src}
                LogoLink={logo.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
