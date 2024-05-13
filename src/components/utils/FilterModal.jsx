import Modal from "../Modal";
// import NormalFilter from "../../data/NormalFilter";

const FilterModal = ({
  isFilterModal,
  setIsFilterModal,
  setFilterValue,
  setLoading,
  filterValue,
}) => {
  const handleFilter = (e) => {
    setFilterValue((prev) => ({
      [e.target.id]: e.target.checked,
      name: e.target.value,
    }));
    setIsFilterModal(false);
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  };
  return (
    <>
      {/* Modal section  */}
      {isFilterModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              Filter Options
            </div>
          }
          setModal={setIsFilterModal}
        >
          <div className="mx-auto select-none">
            <div className="flex flex-col w-full flex-wrap px-1 gap-y-1 my-2">
              {[{name:"Most Popular"}].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center py-1 text-richblack-700 cursor-pointer"
                  >
                    <input
                      key={index}
                      type="radio"
                      id={"checkbox_" + index}
                      name="normalfilter"
                      value={item.name}
                      onChange={handleFilter}
                      checked={
                        Object?.entries(filterValue)[0][0] ==
                        "checkbox_" + index
                      }
                    />
                    <label
                      htmlFor={"checkbox_" + index}
                      className="text-sm select-none GTE_light cursor-pointer pl-3 "
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FilterModal;
