import React from "react";

const TypeProfileItem = ({ item, onClick, itemId }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer min-w-[70px] group"
    >
      <img
        src={item?.image}
        className={`w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-[1px] border-2 border-transparent object-cover group-hover:border-[#ff621c]
              ${item?._id == itemId && " !border-[#ff621c] "}
             `}
             loading="lazy"
      />
      <p className="text-xs md:text-sm text-center mt-1">{item.name}</p>
    </div>
  );
};

export default TypeProfileItem;
