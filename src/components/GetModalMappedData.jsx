
const GetModalMappedData = ({mappedData,handleSelectValue,selectValue}) => {
  return (
   <>
       {mappedData?.map((mappedItem, index) => {
                  return (
                    <div
                      key={index}
                      className={`min-w-[30%] w-[33%] sm:min-w-[110px] sm:w-[110px] overflow-hidden  cursor-pointer rounded-xl p-1 `}
                      onClick={() => {
                        handleSelectValue(mappedItem);
                      }}
                    >
                      {/* <img
                        // src={mappedItem.image}
                        src="https://res.cloudinary.com/dky0bhd07/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_603/v1711187913/roverDrifters/yi3tyxq81uvlgya2jccr.png"
                        alt=""
                        className="w-full object-cover h-[54px] md:h-[60px] rounded-lg select-none"
                      /> */}
                      <h3
                        className={`font-light text-xs mt-1 GTE_light ml-1  ${
                          JSON.stringify(selectValue) ==
                            JSON.stringify(mappedItem) && " text-[#ff612c] "
                        }`}
                      >
                        {mappedItem?.name}
                      </h3>
                    </div>
                  );
                })}</>
  )
}

export default GetModalMappedData;