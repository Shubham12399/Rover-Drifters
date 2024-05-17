import dateOption from "./dateOption";

export default (date) => {
   const stringDate = date.toLocaleDateString("en-US", dateOption);
    const weekName = stringDate.trim().split(",")[0];
    return weekName;
}