"use client";

const ChooseDestinationItems = ({ item }) => {
  return (
    <div
      className="min-w-[120px] w-[130px] h-[140px] sm:min-w-[160px] sm:w-[160px] sm:h-[200px] md:min-w-[230px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative "
      //   onClick={() => navigate("/city/city1")}
    >
      <img
        loading="lazy"
        src={item?.image}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black">
        <h2 className="text-white text-[14px] pb-3 px-3 pl-4 w-full hover:text-[15px] transition-all md:text-xl md:hover:text-2xl GTE_light">
          {item?.name}
        </h2>
      </div>
    </div>
  );
};

export default ChooseDestinationItems;
