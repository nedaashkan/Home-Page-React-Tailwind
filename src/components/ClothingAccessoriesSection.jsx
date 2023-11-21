import Image from "./Image";
let ClothingAccessoriesSectionData = [
  {
    src: "/src/assets/ClothingAccessoriesSection/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ClothingAccessoriesSection/2.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ClothingAccessoriesSection/3.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ClothingAccessoriesSection/4.png",
    alt: "/",
    link: "",
  },
];

export default function ClothingAccessoriesSection() {
  return (
    <div className="ClothingAccessoriesSection mt-4 md:mt-5 lg:mt-10">
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-5 md:space-x-16 lg:space-x-16">
        <div className="order-2 md:order-1 lg:order-1  grid grid-cols-4 justify-items-center gap-x-1 w-3/5">
          {ClothingAccessoriesSectionData.map((img, index) => {
            return (
              <Image
                imgAlt={img.alt}
                imgSrc={img.src}
                imgLink={img.link}
                key={index}
                imgClass={"h-fit w-auto"}
              />
            );
          })}
        </div>
        <h1 className="order-1  md:order-2 lg:order-2 text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6] flex flex-col justify-center mb-5 lg:mb-0 md:mb-0">
          Clothing <br className="hidden md:block lg:block" /> &
          <br className="hidden md:block lg:block" />
          Accessories
        </h1>
      </div>
    </div>
  );
}
