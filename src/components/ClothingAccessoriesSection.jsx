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
      <div className="flex  justify-center space-x-5 md:space-x-16 lg:space-x-16">
        <div className="grid grid-cols-4 justify-items-center gap-x-1 w-3/5">
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
        <h1 className="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#dfe8ea] flex flex-col justify-center">
          Clothing <br /> & <br /> Accessories
        </h1>
      </div>
    </div>
  );
}
