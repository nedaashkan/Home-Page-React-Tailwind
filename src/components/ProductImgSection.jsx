export default function ProductImgSection() {
  return (
    <div className="ProductImgSection">
      <div className="flex flex-col lg:flex-row md:flex-row items-center space-y-4  justify-center mt-6 md:mt-10 lg:mt-16 space-x-3 md:space-x-5 lg:space-x-10">
        <img
          src="/src/assets/ProductImgSection/1.png"
          alt="/"
          className="w-2/6"
        />
        <img
          src="/src/assets/ProductImgSection/2.png"
          alt="/"
          className="w-2/6"
        />
      </div>
      <div className="mt-4 md:mt-10 lg:mt-12 w-4/5 h-[1px] bg-[#8c969759] mx-auto"></div>
    </div>
  );
}
