
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
                      <img
                        // src={mappedItem.image}
                        src={mappedItem?.image}
                        alt=""
                        className="w-full object-cover h-[54px] md:h-[60px] rounded-lg select-none"
                      />
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