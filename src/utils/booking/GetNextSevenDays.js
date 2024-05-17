import dateOption from "./dateOption";
import getWeekName from "./getWeekName";

function getNext7Days() {
    var dates = [];
    var today = new Date(); // Get today's date
    for (var i = 0; i < 7; i++) {
        var nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        dates.push(nextDate);
    }
    return dates;
}
const nextSevenDays = getNext7Days();
const getNextSevenDays = nextSevenDays.map((el) => {
    const weekName = getWeekName(el);
    const stringDate = el.toLocaleDateString("en-US", dateOption);
    // const monthName = stringDate.trim().split(",")[1].split(" ")[1];
    const day = stringDate.trim().split(",")[1].split(" ")[2];
    const year = stringDate.trim().split(",")[2];
    const date = el;
    return {
        status: weekName,
        day: day,
        year: year,
        date: JSON.stringify(date),
        active: false,
    };
});

export default getNextSevenDays;