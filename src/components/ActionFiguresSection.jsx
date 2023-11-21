// adding rubik font family
import Image from "./Image";
let ActionFiguresSectionData = [
  {
    src: "/src/assets/ActionFiguresSection/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/2.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/3.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/4.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/5.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/6.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/7.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/ActionFiguresSection/8.png",
    alt: "/",
    link: "",
  },
];
export default function ActionFiguresSection() {
  return (
    <div className="ActionFiguresSection mt-4 md:mt-5 lg:mt-10">
      <div className="flex flex-col lg:flex-row md:flex-row  justify-center items-center lg:items-stretch md:items-stretch space-x-2 md:space-x-6 lg:space-x-10">
        <div className="order-2 md:order-1 lg:order-1 grid grid-cols-4 justify-items-center gap-x-1 gap-y-5 md:gap-y-10 lg:gap-y-20 w-3/5">
          {ActionFiguresSectionData.map((img, index) => {
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
        <div className="order-1  md:order-2 lg:order-2 flex flex-col justify-evenly items-center  mb-5 md:mb-0 lg:mb-0">
          <h1 className="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6]">
            ActionFigures
          </h1>
          <span className="leading-5 md:leading-8 lg:leading-10 text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
            هیروها تو داستان ها نیستن
            <br className="hidden md:block lg:block" />
            !میان روی میزت
          </span>
          <button className="border-[1px] md:border-[1px] lg:border-1  border-[#00d5ff] bg-black text-center text-[0.5rem] text-[#E6E6E6] md:text-[0.9rem] lg:text-[1.1rem] w-3/5 py-1 mt-4 md:mt-0 lg:mt-0 hidden md:block lg:block">
            مشاهده همه
          </button>
        </div>
        <button className="order-3 border-[1px] md:border-[1px] lg:border-1  border-[#00d5ff] bg-black text-center text-[0.5rem] text-[#E6E6E6] md:text-[0.9rem] lg:text-[1.1rem] w-20 py-1 mt-4 md:mt-0 lg:mt-0  black md:hidden lg:hidden">
          مشاهده همه
        </button>
      </div>
    </div>
  );
}
