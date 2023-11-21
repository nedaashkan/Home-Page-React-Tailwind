export default function ButtonSection() {
  return (
    <div className="ButtonSection mt-4 md:mt-5 lg:mt-10">
      <div class="flex justify-center">
        <button class="text-[0.6rem] md:text-[1rem] lg:text-[1.2rem]  w-1/5 rounded-s border-2 border-[#00d5ff] bg-black py-1 text-[#00d5ff]">
          Physical
        </button>
        <button class="text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] w-1/5 rounded-e bg-[#00d5ff] py-1 ">
          Digital
        </button>
      </div>
    </div>
  );
}
