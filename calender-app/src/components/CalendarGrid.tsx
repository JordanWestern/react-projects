import CalendarGridItem from "./CalendarGridItem";
import MonthSlider from "./MonthSlider";
import { useState } from "react";

export default function CalendarGrid() {
  let date = new Date();

  const [currentMonth, setMonth] = useState(date.getMonth());
  const [currentYear, setYear] = useState(date.getFullYear());

  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let daysArray = Array.from(new Array(daysInMonth), (x, i) => i + 1);

  return (
    <>
      <h6 className="display-6">
        {Month[currentMonth]} {currentYear}
      </h6>
      <div className="calender-grid flex-container">
        <div className="calender-grid-inner">
          {daysArray.map((day) => (
            <CalendarGridItem day={day} />
          ))}
        </div>
      </div>
      <div className="container slider">
        <MonthSlider
          title="Month"
          selected={currentMonth}
          min={0}
          max={11}
          onSelectedChanged={setMonth}
        />
      </div>
      <div className="container slider">
        <MonthSlider
          title="Year"
          selected={currentYear}
          min={date.getFullYear()}
          max={date.getFullYear() + 5}
          onSelectedChanged={setYear}
        />
      </div>
    </>
  );
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
