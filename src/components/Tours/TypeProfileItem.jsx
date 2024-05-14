import React from "react";

const TypeProfileItem = ({ type, onClick, typeId }) => {
  return (
    <div
      onClick={() => onClick(type)}
      className="cursor-pointer min-w-[70px] group"
    >
      <img
        src={type?.image}
        className={`w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-[1px] border-2 border-transparent object-cover group-hover:border-[#ff621c]
              ${type?._id == typeId && " !border-[#ff621c] "}
             `}
             loading="lazy"
      />
      <p className="text-xs md:text-sm text-center mt-1">{type.name}</p>
    </div>
  );
};

export default TypeProfileItem;
