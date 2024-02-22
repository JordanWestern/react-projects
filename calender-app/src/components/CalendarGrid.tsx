import CalendarGridItem from "./CalendarGridItem";
import MonthSlider from "./MonthSlider";
import { useState } from "react";

export default function CalendarGrid() {
  let date = new Date();

  const [currentMonth, setMonth] = useState(date.getMonth());

  let daysInMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();

  let daysArray = Array.from(new Array(daysInMonth), (x, i) => i + 1);

  return (
    <>
      <div className="calender-grid flex-container">
        <div className="calender-grid-inner">
          {daysArray.map((day) => (
            <CalendarGridItem day={day} />
          ))}
        </div>
      </div>
      <div className="container slider">
        <MonthSlider
          selectedMonth={currentMonth}
          onSelectedChanged={setMonth}
        />
      </div>
    </>
  );
}
